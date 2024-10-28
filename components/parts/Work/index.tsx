import Card from "@components/ui/Card";
import { motion } from "framer-motion";

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
          @Victoria&apos;s Secret & Co.
        </a>
      </div>
    ),
    value: "June. 2023 - Present",
    description: (
      <ul className="list-disc list-outside ml-[20px] space-y-[10px]">
        <li>
          Enhanced the accessibility of the main Victoria&apos;s Secret website,
          leading to a <b>10% increase in retention</b> among users with
          disabilities.
        </li>
        <li>
          Implemented the &quot;Keep me signed in&quot; feature, resulting in a{" "}
          <b>$13.6 million</b> annualized impact
        </li>
        <li>
          Integrated an OTP-based authentication system, resulting in a{" "}
          <b>$12.6 million</b> impact, a <b>27% increase in sign-ins</b>, an{" "}
          <b>84% reduction in forgot password support requests</b>,
          approximately <b>4x more account creations</b>, and over{" "}
          <b>50% of users preferring OTP over passwords</b>.
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
          Designed and developed the entire websites for GitHub India (
          <a
            href="https://githubindia.com"
            target="_blank"
            rel="noopener noreferrer"
            className="m-0 leading-[17px] text-xs font-bold text-primary_light hover:text-blue-400 transition-colors duration-150 ease-in"
          >
            githubindia.com
          </a>
          ) and GitHub Brasil (
          <a
            href="https://githubbrasil.com"
            target="_blank"
            rel="noopener noreferrer"
            className="m-0 leading-[17px] text-xs font-bold text-primary_light hover:text-blue-400 transition-colors duration-150 ease-in"
          >
            githubbrasil.com
          </a>
          ), serving as key hubs for over <b>10 million developers in India</b>{" "}
          and <b>3 million+ developers in Brazil</b>, respectively, to access
          GitHub&apos;s activities and resources.
        </li>
        <li>
          Led the design and development of the GitHub Constellation India 2024
          website (
          <a
            href="https://githubconstellation.com"
            target="_blank"
            rel="noopener noreferrer"
            className="m-0 leading-[17px] text-xs font-bold text-primary_light hover:text-blue-400 transition-colors duration-150 ease-in"
          >
            githubconstellation.com
          </a>
          ), supporting{" "}
          <b>
            India&apos;s largest opensource developer conference where GitHub
            CEO Thomas Dohmke delivered the keynote address.
          </b>
        </li>
        <li>
          Created internal tools that streamlined operations, reducing manual
          tasks for Hubbers by <b>5%</b>.
        </li>
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
          Converted multiple web pages to WordPress websites, resulting in a{" "}
          <b>25% increase in website manageability</b> and a{" "}
          <b>20% reduction in maintenance costs</b> for GrowthCX and its
          clients.
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
  return (
    <div className="flex flex-col mt-[52px] tablet:max-w-[650px] tablet:mx-auto tablet:w-full">
      <motion.h2
        className="text-xl font-bold text-black dark:text-white"
        whileInView="visible"
        initial="hidden"
        viewport={{ once: true }}
        variants={{
          hidden: {
            y: 30,
            opacity: 0,
          },
          visible: {
            y: 0,
            opacity: 1,
          },
        }}
        transition={{
          type: "tween",
          duration: 0.3,
        }}
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
            bubbles={bubbles}
            key={i}
          />
        )
      )}
    </div>
  );
};

export default Work;
