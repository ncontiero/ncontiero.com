"use client";

import { type HTMLMotionProps, motion } from "motion/react";

export function MotionDiv(props: HTMLMotionProps<"div">) {
  return <motion.div {...props} />;
}
