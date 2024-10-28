import { motion } from "framer-motion";

import Card from "@components/ui/Card";

const education: Parameters<typeof Card>[0][] = [
  {
    title: "B.Tech in CSE",
    value: "9.05 GPA",
    description: "School Of Engineering, CUSAT, India",
    extras: "2019-23",
  },
  {
    title: "Higher Secondary Education in CS",
    description: "Saraswathi Vidyanikethan, Elamakkara, India",
    value: "88.8%",
    extras: "2017-19",
  },
];

const Education = () => {
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
        Education
      </motion.h2>
      {education?.map(({ title, value, description, extras }, i) => (
        <Card
          title={title}
          value={value}
          description={description}
          extras={extras}
          delay={i / 10 + 0.2}
          key={i}
        />
      ))}
    </div>
  );
};

export default Education;
