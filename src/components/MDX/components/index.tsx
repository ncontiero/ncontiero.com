import type { HTMLAttributes, ImgHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { AnchorLink } from "./AnchorLink";
import { CodeTitleOrCaption } from "./CodeTitleOrCaption";
import { CopyCodeButton } from "./CopyCodeButton";
import { type HeadingProps, HeadingLinked } from "./HeadingLinked";
import { Notes } from "./Notes";

export const components = {
  h1: ({ className, ...props }: HeadingProps) => (
    <HeadingLinked
      className={cn(
        "relative mt-2 w-full scroll-m-20 text-4xl font-bold tracking-tight",
        className,
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }: HeadingProps) => (
    <HeadingLinked
      as="h2"
      className={cn(
        `border-b-border mt-10 w-full scroll-m-20 border-b pb-1 text-3xl font-semibold tracking-tight first:mt-0`,
        className,
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }: HeadingProps) => (
    <HeadingLinked
      as="h3"
      className={cn(
        "mt-8 w-full scroll-m-20 text-2xl font-semibold tracking-tight",
        className,
      )}
      {...props}
    />
  ),
  h4: ({ className, ...props }: HeadingProps) => (
    <HeadingLinked
      as="h4"
      className={cn(
        "mt-8 w-full scroll-m-20 text-xl font-semibold tracking-tight",
        className,
      )}
      {...props}
    />
  ),
  h5: ({ className, ...props }: HeadingProps) => (
    <HeadingLinked
      as="h5"
      className={cn(
        "mt-8 w-full scroll-m-20 text-lg font-semibold tracking-tight",
        className,
      )}
      {...props}
    />
  ),
  h6: ({ className, ...props }: HeadingProps) => (
    <HeadingLinked
      as="h6"
      className={cn(
        "mt-8 w-full scroll-m-20 text-base font-semibold tracking-tight",
        className,
      )}
      {...props}
    />
  ),
  p: ({ className, ...props }: HTMLAttributes<HTMLParagraphElement>) => (
    <p className={cn("leading-7 not-first:mt-6", className)} {...props} />
  ),
  ul: ({ className, ...props }: HTMLAttributes<HTMLUListElement>) => (
    <ul className={cn("my-6 list-disc pl-8", className)} {...props} />
  ),
  ol: ({ className, ...props }: HTMLAttributes<HTMLOListElement>) => (
    <ol className={cn("my-6 list-decimal pl-8", className)} {...props} />
  ),
  li: ({ className, ...props }: HTMLAttributes<HTMLLIElement>) => (
    <li
      className={cn("marker:text-foreground/80 my-1", className)}
      {...props}
    />
  ),
  blockquote: ({ className, ...props }: HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className={cn(
        `
          border-border text-foreground/60 *:text-foreground/60 mt-6 border-l-2 pl-3 font-normal
          *:first-of-type:before:content-[''] *:first-of-type:after:content-['']
        `,
        className,
      )}
      {...props}
    />
  ),
  img: ({ className, alt, ...props }: ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line nextjs/no-img-element
    <img
      className={cn(
        "border-border shadow-primary/10 dark:border-border/40 my-0! rounded-md border shadow-xl",
        className,
      )}
      alt={alt}
      {...props}
    />
  ),
  hr: ({ ...props }) => (
    <hr className="border-border my-4 md:my-8" {...props} />
  ),
  table: ({ className, ...props }: HTMLAttributes<HTMLTableElement>) => (
    <div className="w-full overflow-y-auto">
      <table className={cn("w-full", className, "m-0")} {...props} />
    </div>
  ),
  tr: ({ className, ...props }: HTMLAttributes<HTMLTableRowElement>) => (
    <tr
      className={cn(
        `even:bg-primary/5 focus-within:bg-primary/30 hover:bg-primary/20 duration-200`,
        className,
      )}
      {...props}
    />
  ),
  th: ({ className, ...props }: HTMLAttributes<HTMLTableCellElement>) => (
    <th
      className={cn(
        `
          dark:border-border/60 h-12 border p-4 text-left align-middle font-bold [[align=center]]:text-center
          [[align=right]]:text-right
        `,
        className,
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }: HTMLAttributes<HTMLTableCellElement>) => (
    <td
      className={cn(
        `
          dark:border-border/60 border p-4 text-left align-middle font-medium [[align=center]]:text-center
          [[align=right]]:text-right
        `,
        className,
      )}
      {...props}
    />
  ),
  pre: ({ className, children, ...props }: HTMLAttributes<HTMLPreElement>) => (
    <div className="bg-background group relative my-4 overflow-x-auto">
      <pre
        className={cn("bg-background relative my-0! px-0 py-4", className)}
        {...props}
      >
        {children}
      </pre>
      <CopyCodeButton code={(props as any)["data-content"]} />
    </div>
  ),
  code: ({ className, ...props }: HTMLAttributes<HTMLPreElement>) => (
    <code
      className={cn(
        "bg-secondary-foreground/10 relative rounded-sm px-1.5 py-1 font-mono",
        className,
      )}
      {...props}
    />
  ),
  figcaption: (props: HTMLAttributes<HTMLElement>) => (
    <CodeTitleOrCaption as="figcaption" {...props} />
  ),
  div: (props: HTMLAttributes<HTMLDivElement>) => (
    <CodeTitleOrCaption as="div" {...props} />
  ),
  a: AnchorLink,
  Link: AnchorLink,
  Notes,
};
