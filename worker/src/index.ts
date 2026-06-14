export interface Env {
  ANTHROPIC_API_KEY: string;
  ALLOWED_ORIGINS?: string;
}

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

interface ChatRequest {
  messages: ChatMessage[];
}

const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 10;

const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

const SYSTEM_PROMPT = `You are a helpful assistant on Jonathan Bridges' portfolio website. Answer questions about Jonathan based only on the following information. If asked something outside this scope, politely say you can only discuss Jonathan's professional background. Keep answers concise and friendly.

Jonathan Bridges is a software developer based in San Francisco, CA.

Bio:
- Passionate about lifelong learning, problem-solving, and self-improvement.
- Extensive frontend experience: React, TypeScript, Apollo GraphQL, NextJS, CSS.
- Backend experience: Java, MySQL, Ruby, Rails, PostgreSQL.
- Unique perspective from both developer and client-facing roles.
- Personal interests: cycling in SF, playing instruments, travel. Grew up in Vermont.

Work Experience:
- Khoros (2020-2024): Progressively promoted from Software Engineer I to Senior Software Engineer. Built frontend architecture for page builder and WYSIWYG editor. Java backend work streamlining API error responses. Refactored Jest suites improving CI speed 50%+. Trained new hires, authored docs, mentored junior devs globally.
- Brandly (2019-2020): Freelance developer. Pagination, bug fixes, mobile design.
- TINT (2015-2018): Support Engineer. Client implementations, CSS/SQL, QA, API docs. Managed Zendesk migration and live chat.
- Stitch Fix (2014-2015): CX/Operations. Zendesk improvements, 98% positive rating, led team in ticket solves.
- First Republic Bank (2012-2013): Purchasing Specialist.
- DigiFX (2009-2010): Editor/Audio Engineer for nuclear industry eLearning.
- Soundtrack Boston (2008-2009): Studio Assistant at post-production facility.

Skills: React, TypeScript, Apollo GraphQL, NextJS, JavaScript, HTML5, CSS3, Sass, Bootstrap, Redux, Ruby, Rails, Java, PostgreSQL, MySQL, NodeJS, ExpressJS, AWS, Git, Heroku, Docker, D3JS.

Projects:
- ClickCamp: HipCamp-inspired SPA (Rails, React, Redux, PostgreSQL)
- Twitter GeoTrends: Twitter trending data visualization (d3, Express)
- Spacey: Space industry content aggregator (MERN stack)
- Winter Design Build: Portfolio site (React)

Contact: jbridges7@gmail.com, GitHub: github.com/jonathanbridges, LinkedIn: linkedin.com/in/bridgesjonathan`;

function getAllowedOrigins(env: Env): string[] {
  const defaults = [
    "https://jonathanbridges.com",
    "http://localhost:5173",
    "http://localhost:4173",
  ];
  if (env.ALLOWED_ORIGINS) {
    return env.ALLOWED_ORIGINS.split(",").map((o) => o.trim());
  }
  return defaults;
}

function isOriginAllowed(origin: string | null, env: Env): boolean {
  if (!origin) return false;
  return getAllowedOrigins(env).includes(origin);
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }

  if (entry.count >= RATE_LIMIT_MAX) {
    return false;
  }

  entry.count++;
  return true;
}

function corsHeaders(origin: string): Record<string, string> {
  return {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const origin = request.headers.get("Origin");
    const url = new URL(request.url);

    if (request.method === "OPTIONS") {
      if (origin && isOriginAllowed(origin, env)) {
        return new Response(null, { headers: corsHeaders(origin) });
      }
      return new Response(null, { status: 403 });
    }

    if (url.pathname !== "/api/chat" || request.method !== "POST") {
      return new Response(JSON.stringify({ error: "Not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    if (!origin || !isOriginAllowed(origin, env)) {
      return new Response(JSON.stringify({ error: "Forbidden origin" }), {
        status: 403,
        headers: { "Content-Type": "application/json" },
      });
    }

    const ip = request.headers.get("CF-Connecting-IP") ?? "unknown";
    if (!checkRateLimit(ip)) {
      return new Response(
        JSON.stringify({ error: "Rate limit exceeded. Try again later." }),
        {
          status: 429,
          headers: {
            "Content-Type": "application/json",
            ...corsHeaders(origin),
          },
        }
      );
    }

    if (!env.ANTHROPIC_API_KEY) {
      return new Response(
        JSON.stringify({ error: "Server configuration error" }),
        {
          status: 500,
          headers: {
            "Content-Type": "application/json",
            ...corsHeaders(origin),
          },
        }
      );
    }

    let body: ChatRequest;
    try {
      body = (await request.json()) as ChatRequest;
    } catch {
      return new Response(JSON.stringify({ error: "Invalid JSON" }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders(origin) },
      });
    }

    if (!body.messages?.length) {
      return new Response(JSON.stringify({ error: "Messages required" }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders(origin) },
      });
    }

    const anthropicMessages = body.messages.map((m) => ({
      role: m.role,
      content: m.content,
    }));

    try {
      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": env.ANTHROPIC_API_KEY,
          "anthropic-version": "2023-06-01",
        },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 512,
          system: SYSTEM_PROMPT,
          messages: anthropicMessages,
        }),
      });

      if (!response.ok) {
        const errText = await response.text();
        console.error("Anthropic API error:", errText);
        return new Response(
          JSON.stringify({ error: "AI service unavailable" }),
          {
            status: 502,
            headers: {
              "Content-Type": "application/json",
              ...corsHeaders(origin),
            },
          }
        );
      }

      const data = (await response.json()) as {
        content: Array<{ type: string; text: string }>;
      };

      const text =
        data.content?.find((c) => c.type === "text")?.text ??
        "Sorry, I could not generate a response.";

      return new Response(JSON.stringify({ content: text }), {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders(origin) },
      });
    } catch (err) {
      console.error("Worker error:", err);
      return new Response(JSON.stringify({ error: "Internal server error" }), {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders(origin) },
      });
    }
  },
};
