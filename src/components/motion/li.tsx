"use client";

import { type HTMLMotionProps, motion } from "motion/react";

export function MotionLi(props: HTMLMotionProps<"li">) {
  return <motion.li {...props} />;
}
