"use client";

import { type HTMLMotionProps, motion } from "motion/react";

import { cn } from "@/lib/utils";
import { homeAnimation } from "../../animationVariants";

export function Fieldset({ className, ...props }: HTMLMotionProps<"fieldset">) {
  return (
    <motion.fieldset
      className={cn("mb-6 flex flex-col space-y-2.5", className)}
      variants={homeAnimation.item}
      transition={{ duration: 0.5 }}
      {...props}
    />
  );
}
