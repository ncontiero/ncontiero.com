import type { HTMLAttributes } from "react";
import { FileJson, Settings, Terminal } from "lucide-react";
import Image, { type ImageProps } from "next/image";
import DockerIcon from "public/icons/langs/docker.svg";
import JavascriptIcon from "public/icons/langs/javascript.svg";
import TypescriptIcon from "public/icons/langs/typescript.svg";
import { cn } from "@/lib/utils";

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

interface CodeTitleOrCaptionProps extends HTMLAttributes<HTMLElement> {
  readonly as: "div" | "figcaption";
}

export function CodeTitleOrCaption({
  className,
  children,
  as = "figcaption",
  ...props
}: CodeTitleOrCaptionProps) {
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
  const langIsDockerfile = language === "dockerfile";

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
      ) : langIsDockerfile ? (
        <LangImage alt="Docker Icon" src={DockerIcon} className="dark:invert" />
      ) : languageIsJson ? (
        <FileJson size={18} />
      ) : languageIsEnv ? (
        <Settings size={18} />
      ) : null}
      {children}
    </Comp>
  );
}
