import { motion } from "framer-motion";

import Bubble from "../Bubble";

interface Props {
  title: string | JSX.Element;
  value: string | JSX.Element;
  description: string | JSX.Element;
  extras?: string | JSX.Element;
  delay?: number;
  inView?: boolean;
  bubbles?: string[];
}

const Card = ({
  title,
  value,
  description,
  extras,
  delay = 0,
  bubbles,
}: Props) => {
  return (
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
      className="flex flex-col mt-[24px]"
    >
      <div className="flex items-start justify-between">
        <span className="text-sm font-semibold text-black dark:text-white">
          {title}
        </span>
        <span className="text-xs font-medium text-dark dark:text-text_dark leading-[19px]">
          {value}
        </span>
      </div>
      <div className="italic text-xs font-medium leading-[17px] mt-1">
        {description}
      </div>
      {extras && (
        <div className="italic text-xs font-medium leading-[17px] mt-1">
          {extras}
        </div>
      )}
      {bubbles?.length !== 0 && (
        <div className="flex mt-[12px] ml-[20px] flex-wrap">
          {bubbles?.map((skill) => (
            <Bubble text={skill} variant="secondary" key={skill} />
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default Card;
