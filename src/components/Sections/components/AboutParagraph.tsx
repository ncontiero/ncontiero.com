interface AboutParagraphProps {
  readonly text: string;
  readonly i: number;
  readonly contentLength: number;
}

export function AboutParagraph({
  text,
  i,
  contentLength,
}: AboutParagraphProps) {
  const isLast = contentLength - 1 === i;

  return (
    <p
      className={`${
        isLast ? "mb-10" : "mb-2.5"
      } max-w-xl text-base/loose text-foreground/80`}
    >
      {text}
    </p>
  );
}
