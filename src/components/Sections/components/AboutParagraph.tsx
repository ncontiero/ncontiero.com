type AboutParagraphProps = {
  readonly text: string;
  readonly i: number;
  readonly contentLength: number;
};

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
      } text-foreground/80 max-w-xl text-base leading-loose`}
    >
      {text}
    </p>
  );
}
