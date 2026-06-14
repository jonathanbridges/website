import { useCallback, useRef, useState } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const CHAT_API_URL = import.meta.env.VITE_CHAT_API_URL;

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const sendMessage = async () => {
    if (!input.trim() || loading || !CHAT_API_URL) return;

    const userMessage: Message = { role: "user", content: input.trim() };
    const nextMessages = [...messages, userMessage];
    setMessages(nextMessages);
    setInput("");
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(CHAT_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: nextMessages.map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => ({}))) as {
          error?: string;
        };
        throw new Error(data.error ?? `Request failed (${response.status})`);
      }

      const data = (await response.json()) as { content: string };
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.content },
      ]);
      setTimeout(scrollToBottom, 50);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  if (!CHAT_API_URL) {
    return null;
  }

  return (
    <div className="fixed right-6 bottom-6 z-50">
      {open && (
        <div
          className="mb-4 flex w-[min(100vw-3rem,380px)] flex-col overflow-hidden border border-theme bg-[var(--color-bg)] shadow-xl"
          role="dialog"
          aria-label="AI chat about Jonathan"
        >
          <div className="flex items-center justify-between border-b border-theme px-4 py-3">
            <div>
              <p className="text-sm font-medium text-primary">Ask about me</p>
              <p className="text-xs text-muted">AI demo — may be inaccurate</p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="text-muted hover:text-primary"
              aria-label="Close chat"
            >
              ✕
            </button>
          </div>

          <div className="flex max-h-72 flex-col gap-3 overflow-y-auto p-4">
            {messages.length === 0 && (
              <p className="text-sm text-muted">
                Try: &ldquo;What did Jonathan do at Khoros?&rdquo;
              </p>
            )}
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`text-sm leading-relaxed ${
                  msg.role === "user"
                    ? "ml-4 text-right text-[var(--color-accent)]"
                    : "mr-4 text-primary"
                }`}
              >
                {msg.content}
              </div>
            ))}
            {loading && (
              <p className="text-sm text-muted" aria-live="polite">
                Thinking…
              </p>
            )}
            {error && (
              <p className="text-sm text-red-500" role="alert">
                {error}
              </p>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form
            className="flex border-t border-theme"
            onSubmit={(e) => {
              e.preventDefault();
              void sendMessage();
            }}
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question…"
              disabled={loading}
              className="flex-1 bg-transparent px-4 py-3 text-sm text-primary placeholder:text-muted focus:outline-none"
              aria-label="Chat message"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="px-4 py-3 text-sm text-[var(--color-accent)] disabled:opacity-50"
            >
              Send
            </button>
          </form>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-accent)] text-[var(--color-bg)] shadow-lg transition-transform hover:scale-105"
        aria-expanded={open}
        aria-label={open ? "Close AI chat" : "Open AI chat"}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-6 w-6"
          aria-hidden
        >
          <path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 3 .97 4.29L2 22l5.71-.97A9.96 9.96 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.38 0-2.68-.35-3.81-.97l-.27-.16-2.82.48.48-2.82-.16-.27A7.96 7.96 0 014 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8z" />
        </svg>
      </button>
    </div>
  );
}
