import Image from "next/image";
import { data } from "@/data";
import { Button } from "./ui/button";

export function Footer() {
  const social = Object.entries(data.social);

  return (
    <footer
      className={`mt-10 flex w-full items-center justify-center border-t-2 border-dashed border-border bg-background/40`}
    >
      <div className="mx-auto w-[92%] max-w-7xl">
        <div className="flex flex-col justify-between py-16 md:flex-row md:py-24">
          <div className="mb-12 md:order-2 md:mb-0">
            <h2 className="text-xl font-bold uppercase leading-5">Social</h2>
            <div className="mt-5 flex space-x-1.5">
              {social.map(([key, value]) => (
                <Button key={key} size="icon" variant="outline" asChild>
                  <a
                    title={key}
                    href={value.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={key}
                  >
                    <Image
                      src={value.icon}
                      alt={key}
                      width={24}
                      height={24}
                      className="size-6 rounded-full bg-foreground dark:bg-transparent"
                    />
                  </a>
                </Button>
              ))}
            </div>
          </div>
          <div className="w-full max-w-3xl md:order-1 md:w-1/2">
            <h2 className="text-xl font-bold leading-5">{data.name}</h2>
            <p className="mt-5 text-base text-foreground/80">
              {data.description}
            </p>
          </div>
        </div>
        <div className="border-t border-border py-7 md:py-10">
          <p className="text-center align-middle text-base text-foreground/80">
            <span className="mr-1 align-middle">&copy;</span>
            {data.name} {new Date().getFullYear()}
          </p>
          <p className="text-center text-base text-foreground/80">
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
