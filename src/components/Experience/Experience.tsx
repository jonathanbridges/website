import React from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import { ReactComponent as CodeIcon } from "../../graphics/code.svg";
import { ReactComponent as SupportIcon } from "../../graphics/support.svg";
import { ReactComponent as BriefcaseIcon } from "../../graphics/briefcase-line.svg";
import { ReactComponent as MicIcon } from "../../graphics/microphone-line.svg";
import localStyles from "./Experience.module.scss";
import Job from "./Job";

const Experience: React.FC = () => {
  const { icon, wrapper } = localStyles;

  return (
    <>
      <SectionHeader
        spanText="Experience"
        headerText={"Work Experience"}
        useHeaderAnimation
      />
      <div className={`${wrapper}`} data-testid="experience">
        <Job
          Icon={CodeIcon}
          iconClassname={`bg-custom-khoros`}
          aosOptions={{
            name: "fade-left",
            easing: "ease-in-sine",
            duration: 300,
          }}
          companyUrl={"https://khoros.com"}
          companyName={"Khoros"}
          headers={[
            {
              title: "Senior Software Engineer",
              date: "2023-2024",
            },
            {
              title: "Software Engineer III",
              date: "2022-2023",
            },
            {
              title: "Software Engineer II",
              date: "2021-2022",
            },
            {
              title: "Software Engineer I",
              date: "2020-2021",
            },
          ]}
          paragraphs={[
            "At Khoros I was progressively promoted in the software engineering department for exceeding expectations annually. I started as an individual contributor working primarily on the frontend Community application after being hired for my knowledge of React and CSS but took on more and more responsibility as I gained more experience.",
            "As a developer, I became increasingly pivotal across the department by devising generic, reusable, and scalable solutions to complex problems, including the frontend architecture for the Khoros page builder, and a WYSIWYG editor for the Khoros platform. This editor allows users to create and edit pages in a visual, drag-and-drop interface, with support for theming, and a variety of page templates.",
            "Most recently, I expanded my role to include work on the Java backend, where I streamlined error responses from disparate API endpoints. Other projects I undertook include significant refactoring of Jest unit test suites, which increased continuous integration (CI) speeds by over 50%; enhancing platform accessibility by utilizing Storybook to integrate and test accessibility features effectively.",
            "As a collaborator, I trained new hires on best practices and design patterns, authored documentation for the codebase, and increasingly became a go-to resource supporting junior developers across our globally located teams.",
          ]}
        />
        <Job
          Icon={CodeIcon}
          iconClassname={`bg-custom-brandly`}
          aosOptions={{
            name: "fade-left",
            easing: "ease-in-sine",
            duration: 300,
          }}
          companyUrl={"https://www.brandly.com"}
          companyName={"Brandly"}
          headers={[
            {
              title: "Software Developer",
              date: "2019-2020",
            },
          ]}
          paragraphs={[
            "As a freelance developer for Brandly, I worked on new features like pagination on admin order histories, bug fixes, and mobile design.",
          ]}
        />
        <Job
          Icon={SupportIcon}
          iconClassname={`bg-custom-tint`}
          aosOptions={{
            name: "fade-right",
            easing: "ease-in-sine",
            duration: 300,
          }}
          companyUrl={"https://www.tintup.com"}
          companyName={"TINT"}
          headers={[
            {
              title: "Support Engineer",
              date: "2015-2018",
            },
          ]}
          paragraphs={[
            "I supported our clients with web, mobile, and live event implementations of our application, boosting my knowledge of languages like CSS and SQL, among a myriad of other technical skills. I worked with Engineering closely, attending standups and meetings, reporting and tracking bugs in PivotalTracker, creating and running QA Tests, and authoring API documentation.",
            "In addition, I had full autonomy over client experience at TINT. I managed conversion to Zendesk and implemented live chat, greatly reducing our response time and contact rate during the process.",
          ]}
        />
        <Job
          Icon={SupportIcon}
          iconClassname={`bg-custom-stitch-fix`}
          aosOptions={{
            name: "fade-left",
            easing: "ease-in-sine",
            duration: 300,
          }}
          companyUrl={"https://www.stitchfix.com"}
          companyName={"Stitch Fix"}
          headers={[
            {
              title: "Client Experience / Operations Associate",
              date: "2014-2015",
            },
          ]}
          paragraphs={[
            "At Stitch Fix, I wholly embraced a customer-centric mindset and made several improvements to CX processes on the operational level. I implemented a priority ticket structure in Zendesk, wrote Marketing copy for help desk replies, and trained new hires in Austin headquarters.",
            "Other operational tasks involved disputing chargebacks, processing truant shipments, analyzing billing discrepancies, and reconciling accounts.",
            "Out of a team that scaled from 20 to over 300 agents, I routinely led the CX team by total ticket solves, while retaining a 98% positive rating on tickets with client ratings.",
          ]}
        />
        <Job
          Icon={BriefcaseIcon}
          iconClassname={`bg-custom-frb`}
          aosOptions={{
            name: "fade-up",
            easing: "ease-in-sine",
            duration: 300,
          }}
          companyUrl={"https://www.firstrepublic.com"}
          companyName={"First Republic Bank"}
          headers={[
            {
              title: "Purchasing Specialist",
              date: "2012-2013",
            },
          ]}
          paragraphs={[
            "Working in First Republic's Purchasing Department, I ordered tangible assets for our corporate HQ and nationwide branches. I worked closely with our Facilities department, managing several vendors, and coordinating subcontractors. I also administered employee access for UPS CampusShip, Staples Advantage, GroupTrak and other online accounts.",
          ]}
        />
        <Job
          Icon={MicIcon}
          iconClassname={`bg-custom-digifx`}
          aosOptions={{
            name: "fade-left",
            easing: "ease-in-sine",
            duration: 300,
          }}
          companyUrl={"https://digifx.com"}
          companyName={"DigiFX"}
          headers={[
            {
              title: "Editor / Audio Engineer",
              date: "2009-2010",
            },
          ]}
          paragraphs={[
            "While at DigiFX I worked primarily on eLearning modules that were used as training materials in the nuclear industry. I proofed and revised scripts prior to recording sessions, recorded and edited audio, and performed voice overs.",
          ]}
        />
        <Job
          Icon={MicIcon}
          iconClassname={`bg-custom-soundtrack`}
          aosOptions={{
            name: "fade-left",
            easing: "ease-in-sine",
            duration: 300,
          }}
          companyUrl={"http://soundtrackgroup.com/"}
          companyName={"Soundtrack Boston"}
          headers={[
            {
              title: "Studio Assistant",
              date: "2008-2009",
            },
          ]}
          paragraphs={[
            "Soundtrack Boston is the premier post-production facility in New England. While there I worked as a studio assistant, and provided coverage for the duplication room, machine room, client services, and wherever else I was needed.",
          ]}
        />
        <article className="timeline-entry begin">
          <div className={icon}></div>
        </article>
      </div>
    </>
  );
};
export default Experience;
