import type { HomeSectionTypes } from "@/utils/types";
import NextLink from "next/link";
import { Button } from "@/components/ui/button";
import { MotionDiv } from "../motion/div";
import { homeAnimation } from "./animationVariants";
import {
  SectionContainer,
  SectionDescription,
  SectionRoot,
  SectionTitle,
} from "./components";

export function HomeSection({
  id,
  title,
  description,
  btnSectionId,
  btnSectionLabel,
}: HomeSectionTypes) {
  return (
    <SectionRoot className="relative h-screen" id={id}>
      <MotionDiv
        variants={homeAnimation.container}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5 }}
      >
        <SectionContainer>
          <MotionDiv
            variants={homeAnimation.item}
            transition={{ duration: 0.5 }}
          >
            <SectionTitle
              asChild
              className="text-center text-6xl font-extrabold tracking-wide"
            >
              <h1>{title}</h1>
            </SectionTitle>
          </MotionDiv>
          <MotionDiv
            variants={homeAnimation.item}
            transition={{ duration: 0.5 }}
            className="mx-auto mt-10 max-w-4xl"
          >
            <SectionDescription className="mb-0 text-center text-xl tracking-wide text-inherit">
              {description}
            </SectionDescription>
          </MotionDiv>
          <MotionDiv
            variants={homeAnimation.item}
            transition={{ duration: 0.5 }}
            className="mt-14 text-center md:mt-16"
          >
            <Button size="xlg" asChild className="capitalize">
              <NextLink href={`#${btnSectionId}`}>{btnSectionLabel}</NextLink>
            </Button>
          </MotionDiv>
        </SectionContainer>
      </MotionDiv>
    </SectionRoot>
  );
}
