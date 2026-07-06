import type { ComponentProps } from "react";
import { Slot } from "radix-ui";
import { cn } from "@/lib/utils";

function SectionRoot({ className, ...props }: ComponentProps<"section">) {
  return <section className={cn("py-20 xl:py-24", className)} {...props} />;
}

function SectionContainer({ className, ...props }: ComponentProps<"div">) {
  return (
    <div className={cn("m-auto w-[92%] max-w-7xl", className)} {...props} />
  );
}

interface SectionTitleProps extends ComponentProps<"h1"> {
  readonly asChild?: boolean;
}

function SectionTitle({
  className,
  asChild = false,
  ...props
}: SectionTitleProps) {
  const Comp = asChild ? Slot.Root : "h2";
  return (
    <Comp
      className={cn(
        `
          relative mb-10 block text-center text-4xl font-bold tracking-wide after:absolute after:top-[calc(100%+1rem)]
          after:left-1/2 after:h-1.25 after:w-12 after:-translate-x-1/2 after:rounded-md after:bg-primary after:content-['']
        `,
        className,
      )}
      {...props}
    />
  );
}

function SectionDescription({ className, ...props }: ComponentProps<"p">) {
  return (
    <p
      className={cn(
        "mx-auto mb-16 block max-w-xl text-center text-lg font-normal text-foreground/80 md:mb-20",
        className,
      )}
      {...props}
    />
  );
}

export { SectionContainer, SectionDescription, SectionRoot, SectionTitle };
export { AboutParagraph } from "./AboutParagraph";
export { Form } from "./Form";
