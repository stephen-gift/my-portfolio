import {
  ExpCard,
  ImageProps,
  MotionProps,
  PageProps,
} from "@/utils/interfaces";
import { Transition, Variants, motion } from "framer-motion";
import Image from "next/image";
import { ReactNode } from "react";

export const MotionDiv = ({
  children,
  initial,
  animate,
  whileInView,
  transition,
  className,
}: MotionProps) => {
  return (
    <motion.div
      initial={initial}
      animate={animate}
      whileInView={whileInView}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const AnimatedImage = ({
  src,
  alt,
  width,
  height,
  initial,
  transition,
  whileInView,
  className,
}: ImageProps) => {
  return (
    <MotionDiv
      initial={initial}
      transition={transition}
      whileInView={whileInView}
      className={className}
    >
      <Image src={src} alt={alt} width={width} height={height} />
    </MotionDiv>
  );
};

export const AnimatedPage = ({
  children,
  initial = { opacity: 0 },
  whileInView = { opacity: 1 },
  transition = { duration: 1.5 },
}: PageProps) => {
  return (
    <MotionDiv
      initial={initial}
      transition={transition}
      whileInView={whileInView}
    >
      {children}
    </MotionDiv>
  );
};

export const BGCircles = ({
  children,
  initial = { opacity: 0 },
  animate = {
    scale: [1, 2, 2, 3, 1],
    opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
    borderRadius: ["20%", "20%", "50%", "80%", "20%"],
  },
  transition = { duration: 2.5 },
  className="relative flex justify-center items-center"
}: PageProps) => {
  return (
    <MotionDiv
      initial={initial}
      transition={transition}
      animate={animate}
      className={className}
    >
      {children}
    </MotionDiv>
  );
};

export const AnimateExperiencePage = ({
  children,
  initial = { opacity: 0 },
  whileInView = {
    opacity: 1,
  },
  transition = { duration: 1.5 },
  className = "h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center",
}: PageProps) => {
  return (
    <MotionDiv
      initial={initial}
      whileInView={whileInView}
      transition={transition}
      className={className}
    >
      {children}
    </MotionDiv>
  );
};

export const AnimatedExpCard = ({
  children,
  initial = { y: -100, opacity: 0 },
  whileInView = { opacity: 1, y: 0 },
  transition = { duration: 1.2 },
}: //   className = "w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center",
ExpCard) => {
  return (
    <MotionDiv
      initial={initial}
      whileInView={whileInView}
      transition={transition}
      //   className={className}
    >
      {children}
    </MotionDiv>
  );
};
