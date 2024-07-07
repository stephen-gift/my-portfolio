import { Transition, Variants } from "framer-motion";
import { ReactNode } from "react";

export type MotionProps = {
  children?: ReactNode;
  initial?: Variants;
  animate?: Variants;
  whileInView?: Variants;
  transition?: Transition;
  className?: string;
};
export type ExpCard = {
  children?: ReactNode;
  initial?: Variants;
  whileInView?: Variants;
  transition?: Transition;
};

export type ImageProps = MotionProps & {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type PageProps = MotionProps & {
  children: ReactNode;
};
export type ExperienceCardProps = MotionProps & {
  children?: ReactNode;
};
