import "../globals.css";
import type { Metadata } from "next";
import { ToastContainer } from "react-toastify";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ThemeProvider } from "next-themes";
import { Merriweather_Sans as MerriweatherSans } from "next/font/google";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { data } from "@/data";
import { env } from "@/env";
import { routing } from "@/i18n/routing";
import { getLanguages } from "@/i18n/utils";

const merriweatherSans = MerriweatherSans({
  subsets: ["latin"],
  variable: "--font-merriweather-sans",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;

  const t = await getTranslations({ locale });
  const description = t("description");

  const image = `/og?description=${description}`;
  const imageAlt = `${data.name} - ${description}`;

  return {
    metadataBase: new URL(env.SITE_BASEURL),
    title: {
      default: env.SITE_NAME,
      template: `%s • ${env.SITE_NAME}`,
    },
    description,
    alternates: {
      canonical: "/",
      languages: getLanguages("/"),
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
    openGraph: {
      title: {
        default: env.SITE_NAME,
        template: `%s • ${env.SITE_NAME}`,
      },
      description,
      siteName: env.SITE_NAME,
      type: "website",
      url: "/",
      locale,
      images: {
        url: image,
        alt: imageAlt,
      },
    },
    twitter: {
      title: {
        default: env.SITE_NAME,
        template: `%s • ${env.SITE_NAME}`,
      },
      description,
      creator: `@${data.twitter}`,
      site: `@${data.twitter}`,
      card: "summary_large_image",
      images: {
        url: image,
        alt: imageAlt,
      },
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html lang={locale} suppressHydrationWarning data-scroll-behavior="smooth">
      <body className={merriweatherSans.variable}>
        <ThemeProvider attribute="class">
          <NextIntlClientProvider>
            <ToastContainer
              autoClose={3000}
              limit={3}
              theme="dark"
              className="bg-background font-merriweather-sans text-foreground z-99999!"
              toastClassName="bg-background z-99999! font-merriweather-sans font-medium text-foreground backdrop-blur-xs"
              closeOnClick
              stacked
            />
            <Header locale={locale} />
            <div
              className={`
                from-foreground/10 dark:from-secondary/30 absolute inset-0 -z-10 size-full bg-radial from-10%
                to-transparent to-10% bg-size-[16px_16px]
              `}
            />
            <div
              className={`
                dark:border-border/40 absolute inset-0 -z-10 mx-auto hidden size-full max-w-[1690px] border-x-2
                border-dashed px-4 md:flex
              `}
            />
            {children}
            <Footer />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
