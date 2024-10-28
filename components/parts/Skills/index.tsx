import Bubble from "@components/ui/Bubble";
import { motion } from "framer-motion";

const skills: string[] = [
  "React",
  "NextJS",
  "TypeScript",
  "JavaScript",
  "C",
  "C++",
  "Python",
  "GIT",
  "GitHub",
  "NodeJS",
  "Express",
  "SQL",
  "MongoDB",
  "Flask",
  "Java",
  "PHP",
  "SASS",
  "TailwindCSS",
  "React Native",
  "Figma",
  "Azure",
  "Firebase",
  "Heroku",
  "Linux",
  "Docker",
  "GraphQL",
  "PostgreSQL",
  "AntD",
];

const Skills = () => {
  return (
    <div className="flex flex-col mt-[52px] tablet:max-w-[650px] tablet:mx-auto tablet:w-full">
      <motion.h2
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
        className="text-xl font-bold text-black dark:text-white"
      >
        Technologies I&apos;m good at
      </motion.h2>
      <div className="flex flex-wrap mt-6">
        {skills?.map((skill, i) => (
          <Bubble text={skill} key={i} delay={i / 30 + 0.05} />
        ))}
      </div>
      <motion.div
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
        className="flex items-center mt-6"
      >
        <p className="text-black dark:text-white font-semibold text-sm mr-[8px]">
          I&apos;m currently learning:
        </p>
        <Bubble text="Golang" />
      </motion.div>
    </div>
  );
};

export default Skills;
