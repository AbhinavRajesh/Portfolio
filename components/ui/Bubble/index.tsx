import { motion } from "framer-motion";

interface Props {
  text: string;
  inView?: boolean;
  delay?: number;
  variant?: "primary" | "secondary";
}

const Bubble = ({
  text,
  inView = true,
  delay = 0,
  variant = "primary",
}: Props) => {
  return (
    <motion.span
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
        delay,
      }}
      className={`py-1 px-2 text-xs font-semibold ${
        variant === "primary"
          ? "text-white bg-primary_light dark:bg-primary_dark"
          : "dark:text-white bg-transparent border border-primary_light dark:border-primary_dark"
      } leading-[17px] m-[2px] rounded-[4px]`}
    >
      {text}
    </motion.span>
  );
};

export default Bubble;
