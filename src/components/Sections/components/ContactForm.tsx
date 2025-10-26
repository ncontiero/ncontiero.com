"use client";

import type { ContactSectionTypes } from "@/utils/types";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Loader } from "lucide-react";
import { contactAction } from "@/actions/contact";
import { type ContactSchema, contactSchema } from "@/actions/schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useFormState } from "@/hooks/useFormState";
import { Form } from ".";
import { homeAnimation } from "../animationVariants";

interface ContactFormProps {
  readonly formTranslations: ContactSectionTypes["form"];
}

export function ContactForm({ formTranslations }: ContactFormProps) {
  const form = useForm({
    resolver: zodResolver(contactSchema, {
      error: (iss) => {
        const defaultError = formTranslations.invalidData;
        const path = iss.path?.join(".");
        if (!path) return { message: defaultError };

        const message = {
          name: formTranslations.name.error,
          email: formTranslations.email.error,
          message: formTranslations.message.error,
        }[path];

        return { message: message || defaultError };
      },
    }),
  });

  const contact = useFormState({
    schema: contactSchema,
    action: contactAction,
    onSuccess: (message) => {
      toast.success(message);
      form.reset();
    },
    onError: (message) => {
      toast.error(message);
    },
  });

  function onSubmit(data: ContactSchema) {
    contact.execute(data);
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <Form.Fieldset>
        <Label className="text-base font-bold" htmlFor="name">
          {formTranslations.name.label}
        </Label>
        <Input
          id="name"
          type="text"
          placeholder={formTranslations.name.placeholder}
          {...form.register("name")}
        />

        {form.formState.errors.name ? (
          <Form.ErrorMessage error={form.formState.errors.name.message} />
        ) : null}
      </Form.Fieldset>

      <Form.Fieldset>
        <Label className="text-base font-bold" htmlFor="email">
          {formTranslations.email.label}
        </Label>
        <Input
          id="email"
          type="email"
          placeholder={formTranslations.email.placeholder}
          {...form.register("email")}
        />

        {form.formState.errors.email ? (
          <Form.ErrorMessage error={form.formState.errors.email.message} />
        ) : null}
      </Form.Fieldset>

      <Form.Fieldset>
        <Label className="text-base font-bold" htmlFor="message">
          {formTranslations.message.label}
        </Label>
        <Textarea
          id="message"
          placeholder={formTranslations.message.placeholder}
          {...form.register("message")}
        />

        {form.formState.errors.message ? (
          <Form.ErrorMessage error={form.formState.errors.message.message} />
        ) : null}
      </Form.Fieldset>

      <motion.div
        variants={homeAnimation.item}
        transition={{ duration: 0.5 }}
        className="flex w-full justify-end"
      >
        <Button type="submit" size="xlg" disabled={contact.isPending}>
          {contact.isPending ? (
            <Loader className="animate-spin" />
          ) : (
            formTranslations.submit
          )}
        </Button>
      </motion.div>
    </form>
  );
}
