"use client";

import {
  type ComponentProps,
  type MouseEvent,
  type ReactNode,
  useEffect,
  useRef,
} from "react";
import { Slot } from "@radix-ui/react-slot";
import { motion, useMotionTemplate, useSpring } from "framer-motion";
import Link from "next/link";

import { cn } from "@/lib/utils";

interface CardRootProps extends ComponentProps<"div"> {
  readonly children?: ReactNode;
  readonly radialColor?: string;
  readonly radialWidth?: number;
}

function CardRoot({
  className,
  radialColor = "oklch(var(--primary-value)/0.5)",
  radialWidth = 240,
  children,
  ...props
}: CardRootProps) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useSpring(0, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 100 });

  function onMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }
  const maskImage = useMotionTemplate`radial-gradient(${radialWidth}px at ${mouseX}px ${mouseY}px, ${radialColor}, transparent)`;
  const style = { maskImage, backgroundImage: maskImage };

  useEffect(() => {
    if (ref.current) {
      const { height, width } = ref.current.getBoundingClientRect();
      mouseY.set(Math.random() * height);
      mouseX.set(Math.random() * width);
    }
  }, [mouseY, mouseX]);

  return (
    <div
      onMouseMove={(e) => onMouseMove(e)}
      ref={ref}
      className={cn(
        `
          group border-border/80 bg-background/60 relative h-full overflow-hidden rounded-xl border duration-700
          focus-within:border-ring focus-within:bg-background/10 hover:border-ring/60 hover:bg-background/30
          dark:border-border/15 dark:hover:border-ring/60 dark:focus-within:border-ring/80
          dark:focus-within:bg-background/30 md:gap-8
        `,
        className,
      )}
      {...props}
    >
      <div className="pointer-events-none">
        <div className="absolute inset-0 z-0 mask-[linear-gradient(black,transparent)] duration-1000" />
        <motion.div
          className={`
            via-primary/30 absolute inset-0 z-10 bg-linear-to-br opacity-70 duration-1000 group-hover:opacity-60
            dark:opacity-50 dark:group-hover:opacity-40
          `}
          style={style}
        />
        <motion.div
          className="absolute inset-0 z-10 opacity-0 mix-blend-overlay duration-1000 group-hover:opacity-100"
          style={style}
        />
      </div>
      {children}
    </div>
  );
}

interface CardContainerProps extends ComponentProps<"div"> {
  readonly projectUrl: string;
  readonly children?: ReactNode;
}

function CardContainer({
  className,
  projectUrl,
  children,
  ...props
}: CardContainerProps) {
  return (
    <div
      className={cn(
        "relative flex size-full flex-col px-4 py-6 md:p-8",
        className,
      )}
      {...props}
    >
      <Link
        href={projectUrl}
        className="absolute inset-0 z-10"
        aria-label="View project"
      />
      {children}
    </div>
  );
}

interface CardTitleProps extends ComponentProps<"h1"> {
  readonly asChild?: boolean;
}

function CardTitle({ className, asChild, ...props }: CardTitleProps) {
  const Comp = asChild ? Slot : "h3";

  return (
    <Comp
      className={cn(
        "text-foreground/80 text-xl font-bold duration-200 group-hover:text-foreground",
        className,
      )}
      {...props}
    />
  );
}

interface CardDescriptionProps extends ComponentProps<"p"> {}

function CardDescription({ className, ...props }: CardDescriptionProps) {
  return (
    <p
      className={cn(
        "text-foreground/60 mt-2 leading-8 duration-200 group-hover:text-foreground/80",
        className,
      )}
      {...props}
    />
  );
}

export { CardContainer, CardDescription, CardRoot, CardTitle };
