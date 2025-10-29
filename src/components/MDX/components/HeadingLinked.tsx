import type { HTMLAttributes } from "react";
import { Link as LinkIcon } from "lucide-react";
import NextLink from "next/link";

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {}
interface HeadingLinkedProps extends HeadingProps {
  readonly as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export function HeadingLinked({
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
