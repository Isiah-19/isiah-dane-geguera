import { motion } from "motion/react";
import { ElementType } from "react";

interface RevealTextProps {
  text: string;
  className?: string;
  delay?: number;
  as?: ElementType;
  isReady?: boolean;
}

export default function RevealText({ text, className = "", delay = 0, as: Component = "div", isReady = true }: RevealTextProps) {
  // Split text into words
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.04, delayChildren: delay * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: "120%",
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const MotionComponent = motion(Component as any);

  return (
    <MotionComponent
      className={className}
      variants={container}
      initial="hidden"
      animate={!isReady ? "hidden" : undefined}
      whileInView={isReady ? "visible" : undefined}
      viewport={{ once: true, margin: "-50px" }}
    >
      {words.map((word, index) => (
        <span key={index} className="inline-block overflow-hidden pb-[0.2em] -mb-[0.2em] pt-[0.2em] -mt-[0.2em] align-bottom">
          <motion.span variants={child} className="inline-block origin-bottom">
            {word}
          </motion.span>
        </span>
      )).reduce((acc: any, curr: any) => acc === null ? [curr] : [...acc, " ", curr], null)}
    </MotionComponent>
  );
}
