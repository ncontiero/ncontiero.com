import NextLink from "next/link";
import { type LinkProps, Link } from "@/components/ui/link";
import { cn } from "@/lib/utils";

export function AnchorLink({ href, children, className, ...props }: LinkProps) {
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
