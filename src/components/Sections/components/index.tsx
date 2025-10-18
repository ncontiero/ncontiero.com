import { type HTMLAttributes, forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

interface SectionRootProps extends HTMLAttributes<HTMLElement> {}

const SectionRoot = forwardRef<HTMLElement, SectionRootProps>(
  ({ className, ...props }, ref) => {
    return (
      <section
        className={cn("py-20 xl:py-24", className)}
        ref={ref}
        {...props}
      />
    );
  },
);
SectionRoot.displayName = "Section.Root";

interface SectionContainerProps extends HTMLAttributes<HTMLDivElement> {}

const SectionContainer = forwardRef<HTMLDivElement, SectionContainerProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        className={cn("m-auto w-[92%] max-w-7xl", className)}
        ref={ref}
        {...props}
      />
    );
  },
);
SectionContainer.displayName = "Section.Container";

interface SectionTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  readonly asChild?: boolean;
}

const SectionTitle = forwardRef<HTMLHeadingElement, SectionTitleProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "h2";

    return (
      <Comp
        className={cn(
          `
            after:bg-primary after:absolute after:top-[calc(100%+1rem)] after:left-1/2 after:h-[5px] after:w-12
            after:-translate-x-1/2 after:rounded-md after:content-[''] relative mb-10 block text-center text-4xl
            font-bold tracking-wide
          `,
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
SectionTitle.displayName = "Section.Title";

interface SectionDescriptionProps
  extends HTMLAttributes<HTMLParagraphElement> {}

const SectionDescription = forwardRef<
  HTMLParagraphElement,
  SectionDescriptionProps
>(({ className, ...props }, ref) => {
  return (
    <p
      className={cn(
        "text-foreground/80 mx-auto mb-16 block max-w-xl text-center text-lg font-normal md:mb-20",
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
SectionDescription.displayName = "Section.Description";

export { SectionContainer, SectionDescription, SectionRoot, SectionTitle };
export { AboutParagraph } from "./AboutParagraph";
export { Form } from "./Form";
