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
        `mt-10 w-full scroll-m-20 border-b border-b-border pb-1 text-3xl font-semibold tracking-tight first:mt-0`,
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
      className={cn("my-1 marker:text-foreground/80", className)}
      {...props}
    />
  ),
  blockquote: ({ className, ...props }: HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className={cn(
        `
          mt-6 border-l-2 border-border pl-3 font-normal text-foreground/60 *:text-foreground/60
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
        "my-0! rounded-md border border-border shadow-xl shadow-primary/10 dark:border-border/40",
        className,
      )}
      alt={alt}
      {...props}
    />
  ),
  hr: ({ ...props }) => (
    <hr className="my-4 border-border md:my-8" {...props} />
  ),
  table: ({ className, ...props }: HTMLAttributes<HTMLTableElement>) => (
    <div className="w-full overflow-y-auto">
      <table className={cn("w-full", className, "m-0")} {...props} />
    </div>
  ),
  tr: ({ className, ...props }: HTMLAttributes<HTMLTableRowElement>) => (
    <tr
      className={cn(
        `duration-200 even:bg-primary/5 focus-within:bg-primary/30 hover:bg-primary/20`,
        className,
      )}
      {...props}
    />
  ),
  th: ({ className, ...props }: HTMLAttributes<HTMLTableCellElement>) => (
    <th
      className={cn(
        `
          h-12 border p-4 text-left align-middle font-bold dark:border-border/60 [[align=center]]:text-center
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
          border p-4 text-left align-middle font-medium dark:border-border/60 [[align=center]]:text-center
          [[align=right]]:text-right
        `,
        className,
      )}
      {...props}
    />
  ),
  pre: ({
    className,
    children,
    ...props
  }: HTMLAttributes<HTMLPreElement> & { "data-content"?: string }) => {
    const dataContent = props["data-content"];
    return (
      <div className="group relative my-4 overflow-x-auto bg-background">
        <pre
          className={cn("relative my-0! bg-background px-0 py-4", className)}
          {...props}
        >
          {children}
        </pre>
        {dataContent ? <CopyCodeButton code={dataContent} /> : null}
      </div>
    );
  },
  code: ({ className, ...props }: HTMLAttributes<HTMLPreElement>) => (
    <code
      className={cn(
        "relative rounded-sm bg-secondary-foreground/10 px-1.5 py-1 font-mono",
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
