import { useTranslations } from "next-intl";
import { Link as IntlLink } from "@/i18n/navigation";
import { Link } from "./ui/link";

interface PageErrorProps {
  readonly title: string;
  readonly description: string;
}

function LinkToHome() {
  const t = useTranslations("pageError");

  return t.rich("goBackToHome", {
    link: (chunks) => (
      <Link href="/" asChild>
        <IntlLink href="/">{chunks}</IntlLink>
      </Link>
    ),
  });
}

export function PageError({ title, description }: PageErrorProps) {
  return (
    <main className="flex h-screen flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold tracking-wide">{title}</h1>
      <p className="mt-4 text-lg">{description}</p>
      <p className="mt-2 text-base">
        <LinkToHome />
      </p>
    </main>
  );
}
