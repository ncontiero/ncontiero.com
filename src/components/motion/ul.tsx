"use client";

import { type HTMLMotionProps, motion } from "motion/react";

export function MotionUl(props: HTMLMotionProps<"ul">) {
  return <motion.ul {...props} />;
}
