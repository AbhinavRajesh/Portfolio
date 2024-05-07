import Bubble from "@components/ui/Bubble";
import Card from "@components/ui/Card";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const workExperience: Parameters<typeof Card>[0][] = [
  {
    title: (
      <div className="flex flex-col">
        <span className="m-0 leading-[19px]">Assoc. Frontend Developer</span>
        <a
          href="https://www.victoriassecret.com"
          target="_blank"
          rel="noopener noreferrer"
          className="m-0 leading-[17px] text-xs font-bold text-primary_light hover:text-blue-400 transition-colors duration-150 ease-in"
        >
          @VS&Co.
        </a>
      </div>
    ),
    value: "Feb. 2022 - June 2023",
    description: (
      <ul className="list-disc list-outside ml-[20px] space-y-[10px]">
        <li>Worked on improving the accessibility of the website</li>
        <li>
          Currently working on the new authentication system for the better
          experience of user
        </li>
      </ul>
    ),
    bubbles: ["ReactJS", "JavaScript", "Redux", "Git", "Jest"],
  },
  {
    title: (
      <div className="flex flex-col">
        <span className="m-0 leading-[19px]">DevRel Engineering Intern</span>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="m-0 leading-[17px] text-xs font-bold text-primary_light hover:text-blue-400 transition-colors duration-150 ease-in"
        >
          @GitHub
        </a>
      </div>
    ),
    value: "Feb. 2022 - June 2023",
    description: (
      <ul className="list-disc list-outside ml-[20px] space-y-[10px]">
        <li>
          Created the design and developed the website{" "}
          <a
            href="https://githubindia.com"
            target="_blank"
            rel="noopener noreferrer"
            className="m-0 leading-[17px] text-xs font-bold text-primary_light hover:text-blue-400 transition-colors duration-150 ease-in"
          >
            githubindia.com
          </a>{" "}
          which serves as an anchor point for everything GitHub does in India
        </li>
        <li>
          Ported the{" "}
          <a
            href="https://githubindia.com"
            target="_blank"
            rel="noopener noreferrer"
            className="m-0 leading-[17px] text-xs font-bold text-primary_light hover:text-blue-400 transition-colors duration-150 ease-in"
          >
            GitHub India
          </a>{" "}
          website for Brazil as{" "}
          <a
            href="https://githubbrazil.com"
            target="_blank"
            rel="noopener noreferrer"
            className="m-0 leading-[17px] text-xs font-bold text-primary_light hover:text-blue-400 transition-colors duration-150 ease-in"
          >
            githubbrazil.com
          </a>{" "}
          which serves as an anchor point for everything GitHub does in Brazil
        </li>
        <li>
          Created various designs for upcoming initiatives and posters for
          various social media posts for their{" "}
          <a
            href="https://twitter.com/GitHubIndia"
            target="_blank"
            rel="noopener noreferrer"
            className="m-0 leading-[17px] text-xs font-bold text-primary_light hover:text-blue-400 transition-colors duration-150 ease-in"
          >
            @GitHubIndia
          </a>{" "}
          X handle
        </li>
        <li>Created few internal tools for better hubber experience</li>
      </ul>
    ),
    bubbles: [
      "ReactJS",
      "NextJS",
      "TypeScript",
      "JavaScript",
      "TailwindCSS",
      "Primer Styles",
      "Jekyll",
      "Ruby",
      "Rspec",
      "Figma",
      "Azure",
      "Git",
      "GitHub API",
    ],
  },
  {
    title: (
      <div className="flex flex-col">
        <span className="m-0 leading-[19px]">Software Engineer Intern</span>
        <a
          href="https://growth.cx"
          target="_blank"
          rel="noopener noreferrer"
          className="m-0 leading-[17px] text-xs font-bold text-primary_light hover:text-blue-400 transition-colors duration-150 ease-in"
        >
          @Growth.CX
        </a>
      </div>
    ),
    value: "Mar. 2021 - Jan. 2022",
    description: (
      <ul className="list-disc list-outside ml-[20px] space-y-[10px]">
        <li>
          Responsible for creating the whole frontend of theirlatest SaaS
          product{" "}
          <a
            href="https://suitejar.com"
            target="_blank"
            rel="noopener noreferrer"
            className="m-0 leading-[17px] text-xs font-bold text-primary_light hover:text-blue-400 transition-colors duration-150 ease-in"
          >
            SuiteJar
          </a>{" "}
          from a design.
        </li>
        <li>
          Converted various web pages written in different frameworks to
          Wordpress websites fortheir website and their clients
        </li>
      </ul>
    ),
    bubbles: [
      "ReactJS",
      "AntD",
      "TypeScript",
      "TailwindCSS",
      "Redux",
      "Wordpress",
      "NodeJS",
      "Git",
    ],
  },
];

const Work = () => {
  const [loaded, setLoaded] = useState<boolean>(false);
  const { ref, inView } = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if (loaded) return;
    if (inView) {
      setLoaded(true);
      animation.start({
        y: 0,
        opacity: 1,
        transition: {
          type: "tween",
          duration: 0.3,
        },
      });
    } else {
      animation.start({
        y: "30px",
        opacity: 0,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <div
      ref={ref}
      className="flex flex-col mt-[52px] tablet:max-w-[650px] tablet:mx-auto tablet:w-full"
    >
      <motion.h2
        className="text-xl font-bold text-black dark:text-white"
        animate={animation}
      >
        Work Experience
      </motion.h2>
      {workExperience?.map(
        ({ title, value, description, extras, bubbles }, i) => (
          <Card
            title={title}
            value={value}
            description={description}
            extras={extras}
            delay={i / 10 + 0.2}
            inView={inView}
            bubbles={bubbles}
            key={i}
          />
        )
      )}
    </div>
  );
};

export default Work;
