import type { Locale } from "@/i18n/types";
import { Menu } from "lucide-react";
import { getMessages, getTranslations } from "next-intl/server";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { data } from "@/data";
import { Link } from "@/i18n/navigation";
import { MotionDiv } from "../motion/div";
import { MotionLi } from "../motion/li";
import { MotionUl } from "../motion/ul";
import { animation } from "./animationVariants";
import { ChangeLocale } from "./ChangeLocale";
import { ThemeToggle } from "./ThemeToggle";

export async function Header({ locale }: { readonly locale: Locale }) {
  const t = await getTranslations({ locale });
  const { sections, navbar } = await getMessages({ locale });
  const { name } = data;

  return (
    <header
      className={`
        dark:border-border/40 sticky inset-x-0 top-0 z-9999 h-16 border-b-2 border-dashed backdrop-blur-md md:h-[72px]
      `}
    >
      <nav className="flex h-full items-center justify-between px-4 sm:px-6 md:px-12">
        <MotionDiv
          variants={animation.item}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <Link
            href={`/#${t("sections.home.id")}`}
            className={`
              group ring-ring flex items-center space-x-2 rounded-full underline-offset-4 duration-300 hover:underline
              hover:brightness-200 focus-visible:ring-2 focus-visible:outline-hidden active:opacity-70 md:pr-3
            `}
          >
            <Image
              src="/icon/"
              alt={t("navbar.logoAlt", { name })}
              className="size-[52px] rounded-full border-2"
              width={52}
              height={52}
              quality={100}
            />
            <span className="pr-1 text-xl font-bold duration-200">
              {name.split(" ")[0]}
            </span>
          </Link>
        </MotionDiv>
        <div className="flex items-center">
          <MotionUl
            className="hidden items-center space-x-2 uppercase md:flex"
            variants={animation.list}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
          >
            {Object.entries(sections).map(([key, value]) => (
              <MotionLi
                key={key}
                variants={animation.item}
                transition={{ duration: 0.6 }}
              >
                <Link
                  className={`
                    ring-ring rounded-full p-4 underline-offset-4 duration-200 hover:text-primary hover:underline
                    focus:outline-hidden focus-visible:opacity-100 focus-visible:ring-2 active:opacity-60
                  `}
                  href={`/#${value.id}`}
                >
                  {value.navbarLabel}
                </Link>
              </MotionLi>
            ))}
            <MotionLi variants={animation.item} transition={{ duration: 0.6 }}>
              <ThemeToggle title={t("navbar.toggleTheme")} />
            </MotionLi>
            <MotionLi variants={animation.item} transition={{ duration: 0.6 }}>
              <ChangeLocale navbarLocale={navbar.locale} locale={locale} />
            </MotionLi>
          </MotionUl>
          <div className="flex items-center gap-2 md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  type="button"
                  size="icon"
                  variant="ghost"
                  radius="full"
                  aria-label={t("navbar.toggleMenu")}
                >
                  <Menu size={24} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className={`
                  border-border/60 bg-background/60 shadow-secondary/10 shadow-xl backdrop-blur-md dark:bg-background/80
                  md:w-48
                `}
              >
                {Object.entries(sections).map(([key, value], i) => (
                  <DropdownMenuItem
                    key={key}
                    asChild
                    className="p-2 text-base capitalize"
                  >
                    <Link href={i === 0 ? "/" : `/#${value.id}`}>
                      {value.navbarLabel}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <ThemeToggle title={t("navbar.toggleTheme")} />
            <ChangeLocale navbarLocale={navbar.locale} locale={locale} />
          </div>
        </div>
      </nav>
    </header>
  );
}
