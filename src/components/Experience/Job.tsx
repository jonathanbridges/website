import React from "react";
import localStyles from "./Experience.module.scss";
import { AosOptions } from "aos";

interface AnimationStyle extends Pick<AosOptions, "easing" | "duration"> {
  name: string;
}

/**
 * JobHeader defines the structure for job title and date information.
 * @param title - The title of the job position.
 * @param date - The date or duration of the job tenure.
 */

interface JobHeader {
  title: string;
  date: string;
}

/**
 * Props defines the structure for properties passed to the Job component.
 * @param Icon - A React functional component representing an icon.
 * @param iconClassname - A classname for custom styling of the icon.
 * @param aosOptions - Animation options for the job component.
 * @param companyUrl - URL of the company's website.
 * @param companyName - Name of the company.
 * @param headers - Array of job headers containing title and date.
 * @param paragraphs - Array of paragraphs describing job responsibilities and achievements.
 */
interface Props {
  Icon: React.FC;
  iconClassname: string;
  aosOptions: AnimationStyle;
  companyUrl: string;
  companyName: string;
  headers: Array<JobHeader>;
  paragraphs: Array<string>;
}

const Job: React.FC<Props> = ({
  Icon,
  iconClassname,
  companyName,
  companyUrl,
  headers,
  paragraphs,
  aosOptions = {
    name: "fade-left",
    easing: "ease-in-sine",
    duration: 300,
  },
}: Props) => {
  const { article, label, icon } = localStyles;
  const { name, easing, duration } = aosOptions;

  return (
    <article className={article}>
      <div className={`${icon} ${iconClassname}`}>
        <Icon />
      </div>
      <div
        className={label}
        data-aos={name}
        data-aos-easing={easing}
        data-aos-duration={duration}
      >
        {headers.map(({ date, title }: JobHeader, idx: number) => (
          <div key={title} className={"d-flex w-100"}>
            <h6>
              {title}
              {idx === 0 && (
                <>
                  {" "}
                  at{" "}
                  <a
                    href={companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {companyName}
                  </a>{" "}
                </>
              )}
            </h6>
            <span>{date}</span>
          </div>
        ))}
        {paragraphs.map((p: string, idx: number) => (
          <p key={idx}>{p}</p>
        ))}
      </div>
    </article>
  );
};

export default Job;
