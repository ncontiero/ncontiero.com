import type {
  AnchorHTMLAttributes,
  HTMLAttributes,
  ImgHTMLAttributes,
} from "react";
import { Link as LinkIcon } from "lucide-react";
import { useMDXComponent } from "next-contentlayer2/hooks";
import NextLink from "next/link";
import { cn } from "@/lib/utils";
import { Link } from "./ui/link";

function AnchorLink({
  href,
  children,
  className,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
  const isInside = href ? href.startsWith("#") || href.startsWith("/") : false;

  return (
    <Link
      href={href}
      asChild={!!isInside}
      className={cn("no-underline [&>code]:py-0", className)}
      {...props}
    >
      {isInside ? <NextLink href={href!}>{children}</NextLink> : children}
    </Link>
  );
}

interface HeadingLinkedProps extends HTMLAttributes<HTMLHeadingElement> {
  readonly as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

function HeadingLinked({
  id,
  as = "h1",
  children,
  ...props
}: HeadingLinkedProps) {
  const Comp = as;

  return id ? (
    <Comp id={id} {...props}>
      <NextLink
        href={`#${id}`}
        aria-label="Link to section"
        className={`
          group flex w-fit items-center rounded-md no-underline underline-offset-4 ring-offset-background duration-200
          hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring
          focus-visible:ring-offset-2 active:opacity-70
        `}
      >
        {children}
        <LinkIcon
          size={20}
          className="ml-2 opacity-30 duration-200 group-hover:opacity-70"
        />
      </NextLink>
    </Comp>
  ) : (
    <Comp id={id} {...props} />
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const components = {
  h1: ({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
    <HeadingLinked
      className={cn(
        "relative mt-2 w-full scroll-m-20 text-4xl font-bold tracking-tight",
        className,
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
    <HeadingLinked
      as="h2"
      className={cn(
        "mt-10 w-full scroll-m-20 border-b border-b-border pb-1 text-3xl font-semibold tracking-tight first:mt-0",
        className,
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
    <HeadingLinked
      as="h3"
      className={cn(
        "mt-8 w-full scroll-m-20 text-2xl font-semibold tracking-tight",
        className,
      )}
      {...props}
    />
  ),
  h4: ({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
    <HeadingLinked
      as="h4"
      className={cn(
        "mt-8 w-full scroll-m-20 text-xl font-semibold tracking-tight",
        className,
      )}
      {...props}
    />
  ),
  h5: ({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
    <HeadingLinked
      as="h5"
      className={cn(
        "mt-8 w-full scroll-m-20 text-lg font-semibold tracking-tight",
        className,
      )}
      {...props}
    />
  ),
  h6: ({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
    <HeadingLinked
      as="h6"
      className={cn(
        "mt-8 w-full scroll-m-20 text-base font-semibold tracking-tight",
        className,
      )}
      {...props}
    />
  ),
  a: (props: AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <AnchorLink {...props} />
  ),
  p: ({ className, ...props }: HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}
      {...props}
    />
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
        "mt-6 border-l-2 border-border pl-3 font-normal text-foreground/60 [&>*]:text-foreground/60",
        className,
      )}
      {...props}
    />
  ),
  img: ({ className, alt, ...props }: ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line nextjs/no-img-element
    <img
      className={cn(
        "my-0 rounded-md border border-border shadow-xl shadow-primary/10",
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
        "border-b border-border duration-200 even:bg-primary/5 focus-within:bg-primary/30 hover:bg-primary/20",
        className,
      )}
      {...props}
    />
  ),
  th: ({ className, ...props }: HTMLAttributes<HTMLTableCellElement>) => (
    <th
      className={cn(
        "h-12 border p-4 text-left align-middle font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
        className,
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }: HTMLAttributes<HTMLTableCellElement>) => (
    <td
      className={cn(
        "border p-4 text-left align-middle font-medium [&[align=center]]:text-center [&[align=right]]:text-right",
        className,
      )}
      {...props}
    />
  ),
  pre: ({ className, ...props }: HTMLAttributes<HTMLPreElement>) => (
    <pre
      className={cn(
        "mb-4 mt-6 overflow-x-auto rounded-lg bg-background/80 px-0 py-4",
        className,
      )}
      {...props}
    />
  ),
  code: ({ className, ...props }: HTMLAttributes<HTMLPreElement>) => (
    <code
      className={cn(
        "relative rounded bg-secondary/20 px-1.5 py-1 font-mono text-inherit",
        className,
      )}
      {...props}
    />
  ),
};

interface MdxProps {
  readonly code: string;
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return (
    <div>
      {/* eslint-disable-next-line react-hooks/static-components */}
      <Component components={components} />
    </div>
  );
}
