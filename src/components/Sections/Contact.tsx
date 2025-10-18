import type { ContactSectionTypes } from "@/utils/types";
import { MotionDiv } from "../motion/div";
import { homeAnimation } from "./animationVariants";
import {
  SectionContainer,
  SectionDescription,
  SectionRoot,
  SectionTitle,
} from "./components";
import { ContactForm } from "./components/ContactForm";

interface ContactSectionProps extends ContactSectionTypes {}

export function ContactSection({
  title,
  description,
  id,
}: ContactSectionProps) {
  return (
    <SectionRoot id={id}>
      <MotionDiv
        variants={homeAnimation.container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <SectionContainer>
          <SectionTitle>{title}</SectionTitle>
          <SectionDescription>{description}</SectionDescription>
          <MotionDiv
            variants={homeAnimation.container}
            transition={{ duration: 0.5 }}
            className={`
              border-border/60 bg-background/25 shadow-primary/10 mx-auto w-full max-w-4xl overflow-hidden rounded-md
              border p-6 shadow-xl md:p-10
            `}
          >
            <ContactForm />
          </MotionDiv>
        </SectionContainer>
      </MotionDiv>
    </SectionRoot>
  );
}
