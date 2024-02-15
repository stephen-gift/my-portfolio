"use client";

import { Transition, Variants, motion } from "framer-motion";
import { ReactNode } from "react";

interface TemplateProps {
  children: ReactNode;
  initial?: Variants;
  animate?: Variants;
  transition?: Transition;
}

const Template = ({
  children,
  initial = {
    x: -500 ,
    opacity: 0,
    scale: 0.5,
  },
  animate = {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  transition = {
    duration: 1.5,
  },
}: TemplateProps) => {
  return (
    <motion.div initial={initial} animate={animate} transition={transition}>
      {children}
    </motion.div>
  );
};

export default Template;
