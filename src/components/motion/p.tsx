"use client";

import { type HTMLMotionProps, motion } from "motion/react";

export function MotionP(props: HTMLMotionProps<"p">) {
  return <motion.p {...props} />;
}
