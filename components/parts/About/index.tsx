import { motion } from "framer-motion";
import Button from "@components/ui/Button";
import AboutSection from "./AboutSection";

const About = () => {
  return (
    <>
      <AboutSection
        content={[
          <div key="hero">
            <div className="flex items-center space-x-3 mb-[12px] text-black dark:text-white">
              <a href="https://github.com/AbhinavRajesh">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  role="img"
                  viewBox="0 0 24 24"
                  className="w-7 h-7"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
                </svg>{" "}
              </a>
              <a href="https://twitter.com/_AbhinavRajesh_">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  role="img"
                  viewBox="0 0 24 24"
                  className="w-7 h-7"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"></path>
                </svg>
              </a>
              <span className="flex items-center px-[12px] py-[4px] rounded-full bg-slate-200 text-black">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="w-5 h-5 mr-[5px]"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  ></path>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>{" "}
                <span>Kerala, India</span>
              </span>
            </div>
            <h1 className="text-xl md:text-2xl mb-[30px] font-bold">
              Hey, I&apos;m{" "}
              <span className="text-primary_light dark:text-primary_dark">
                Abhinav Rajesh
              </span>
            </h1>
            I&apos;m a passionate UI/ UX Designer and{" "}
            <span className="font-bold text-primary_light dark:text-primary_dark">
              Full Stack Developer
            </span>{" "}
            based in India. Web development has transformed from a spark of
            interest to an all out passion and an area that I want to master.
          </div>,
        ]}
        delay={0}
      />
      <AboutSection
        content={[
          <div key="hero">
            I hold a Bachelor&apos;s degree in Computer Science and Engineering
            from{" "}
            <a
              href="https://soe.cusat.ac.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-primary_light hover:text-blue-400 transition-colors duration-150 ease-in dark:text-primary_dark"
            >
              School of Engineering, CUSAT, India
            </a>
            . My aspiration has always been to collaborate and thrive within a
            dynamic team of passionate and like-minded creatives. I am eager to
            contribute my skills and dedication to projects that challenge and
            inspire, fostering both personal and collective growth.
          </div>,
        ]}
        delay={0.1}
      />
      <AboutSection
        content={
          "Being a developer has given me the ability to craft digital things that not only look cool and interesting but that can be moved and interacted with. Enabling me to give great design life in a sense."
        }
        delay={0.2}
      />
      <AboutSection
        content={[
          <div key="hero">
            I occasionally write about technology at my{" "}
            <a
              href="https://blog.abhinavrajesh.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-primary_light hover:text-blue-400 transition-colors duration-150 ease-in dark:text-primary_dark"
            >
              blog.
            </a>
          </div>,
        ]}
        delay={0.3}
      />
      <AboutSection
        content={[
          <div key="hero">
            You can find me on{" "}
            <a
              href="https://twitter.com/_AbhinavRajesh_"
              className="font-bold text-primary_light hover:text-blue-400 transition-colors duration-150 ease-in dark:text-primary_dark"
            >
              X
            </a>{" "}
            where I talk about technology, or on{" "}
            <a
              href="https://github.com/AbhinavRajesh"
              className="font-bold text-primary_light hover:text-blue-400 transition-colors duration-150 ease-in dark:text-primary_dark"
            >
              Github
            </a>{" "}
            where I&apos;m building in the open.
          </div>,
        ]}
        delay={0.4}
      />
      <motion.div
        className="flex mt-[28px] text-[14px] tablet:max-w-[650px] tablet:mx-auto tablet:w-full"
        transition={{
          duration: 0.3,
          delay: 0.5,
          type: "tween",
        }}
        initial={{
          y: "30px",
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
      >
        <Button
          to="/resume/march-2024.pdf"
          text="Resume"
          key="update"
          extraClassNames="mr-[8px]"
        />
        <Button to="/projects" text="Checkout my projects" key="projects" />
      </motion.div>
    </>
  );
};

export default About;
