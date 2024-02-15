"use client";

import { Transition, Variants, motion } from "framer-motion";
import Image from "next/image";
import { ReactNode } from "react";

interface TemplateProps {
  children: ReactNode;
  initial?: Variants;
  animate?: Variants;
  whileInView?: Variants;
  transition?: Transition;
}

const Template = ({
  children,
  initial = {
    x: -500,
    opacity: 0,
    scale: 0.5,
  },
  animate = {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  whileInView,
  transition = {
    duration: 1.5,
  },
}: TemplateProps) => {
  return (
    <motion.div
      initial={initial}
      whileInView={whileInView}
      animate={animate}
      transition={transition}
    >
      {children}
    </motion.div>
  );
};

export default Template;

interface AnimatedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  initial?: Variants;
  transition?: { duration: number };
  whileInView?: Variants;
}

export const AboutImgTemp = ({
  src,
  alt,
  width,
  height,
  initial = { x: -200, opacity: 0 },
  transition = { duration: 1.2 },
  whileInView = { x: 0, opacity: 1 },
}: AnimatedImageProps) => {
  return (
    <motion.div
      initial={initial}
      transition={transition}
      whileInView={whileInView}
      viewport={{ once: true }}
      className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
    >
      <Image src={src} alt={alt} width={width} height={height} />
    </motion.div>
  );
};
