"use client";

import { AnimatePresence, motion } from "framer-motion";

export function ErrorMessage({
  error,
}: {
  readonly error: string | undefined;
}) {
  return (
    <AnimatePresence mode="wait">
      {error ? (
        <motion.span
          key={error}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="text-destructive text-sm"
        >
          {error}
        </motion.span>
      ) : null}
    </AnimatePresence>
  );
}
