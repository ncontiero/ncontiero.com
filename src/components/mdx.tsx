import type {
  AnchorHTMLAttributes,
  HTMLAttributes,
  ImgHTMLAttributes,
} from "react";
import {
  FileJson,
  Info,
  Link as LinkIcon,
  Settings,
  Terminal,
} from "lucide-react";
import { useMDXComponent } from "next-contentlayer2/hooks";
import Image, { type ImageProps } from "next/image";
import NextLink from "next/link";
import JavascriptIcon from "public/icons/langs/javascript.svg";
import TypescriptIcon from "public/icons/langs/typescript.svg";
import { cn } from "@/lib/utils";
import { CopyCodeButton } from "./ui/button";
import { type LinkProps, Link } from "./ui/link";

function AnchorLink({ href, children, className, ...props }: LinkProps) {
  const isInside = href ? href.startsWith("#") || href.startsWith("/") : false;

  return (
    <Link
      href={href}
      asChild={!!isInside}
      className={cn("no-underline [&>code]:py-0", className)}
      target={isInside ? undefined : "_blank"}
      rel={isInside ? undefined : "noopener noreferrer"}
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
          group ring-offset-background flex w-fit items-center rounded-md no-underline underline-offset-4 duration-200
          focus-visible:ring-ring focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden
          hover:underline active:opacity-70
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

function LangImage({ className, ...props }: ImageProps) {
  return (
    <Image
      width={18}
      height={18}
      className={cn("m-0!", className)}
      {...props}
    />
  );
}

function CodeTitleOrCaption({
  className,
  children,
  as = "figcaption",
  ...props
}: HTMLAttributes<HTMLElement> & { readonly as: "div" | "figcaption" }) {
  const language = (props as any)["data-language"] as string | undefined;
  const Comp = as;

  if (!language) {
    return (
      <Comp className={className} {...props}>
        {children}
      </Comp>
    );
  }

  const isTitle = (props as any)["data-rehype-pretty-code-title"] === "";

  const baseClassName =
    "text-secondary-foreground bg-secondary mt-0 px-4 py-3 text-sm font-medium";
  if (!isTitle && as === "figcaption") {
    return (
      <Comp {...props} className={cn(baseClassName, className)}>
        {children}
      </Comp>
    );
  }

  const languageIsBash = language === "bash";
  const langIsJs = ["mjs", "js", "javascript"].includes(language);
  const langIsTs = ["ts", "typescript"].includes(language);
  const languageIsJson = language === "json";
  const languageIsEnv = language === "env";

  return (
    <Comp
      {...props}
      className={cn(baseClassName, "flex items-center gap-1.5", className)}
    >
      {languageIsBash ? (
        <Terminal size={18} />
      ) : langIsJs ? (
        <LangImage alt="Javascript Icon" src={JavascriptIcon} />
      ) : langIsTs ? (
        <LangImage alt="Typescript Icon" src={TypescriptIcon} />
      ) : languageIsJson ? (
        <FileJson size={18} />
      ) : languageIsEnv ? (
        <Settings size={18} />
      ) : null}
      {children}
    </Comp>
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
        `border-b-border mt-10 w-full scroll-m-20 border-b pb-1 text-3xl font-semibold tracking-tight first:mt-0`,
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
          border-border text-foreground/60 mt-6 border-l-2 pl-3 font-normal *:text-foreground/60
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
        "border-border shadow-primary/10 my-0! rounded-md border shadow-xl dark:border-border/40",
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
        className={cn(
          "bg-background group relative my-0! px-0 py-4",
          className,
        )}
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
  Notes: ({
    children,
    className,
    level = "INFO",
    ...props
  }: HTMLAttributes<HTMLDivElement> & { readonly level: "INFO" }) => (
    <div
      {...props}
      className={cn(
        "[&_p]:not-first:text-foreground/80 [&_p]:not-first:my-0! my-7 gap-6 rounded-lg border p-6",
        level === "INFO" ? "border-blue-600 bg-blue-600/10" : "",
        className,
      )}
    >
      <div className="mb-2 flex items-center gap-2">
        {level === "INFO" ? <Info className="text-blue-600" /> : null}
        <p
          className={cn(
            level === "INFO" ? "text-blue-600! dark:text-blue-400!" : "",
          )}
        >
          {level}
        </p>
      </div>
      {children}
    </div>
  ),
  Link: AnchorLink,
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
