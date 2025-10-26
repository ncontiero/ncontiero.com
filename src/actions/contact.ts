"use server";

import type { ActionResult } from "@/hooks/useFormState";
import type { ContactSchema, contactSchema } from "./schema";
import { getTranslations } from "next-intl/server";
import { env } from "@/env";

export async function contactAction(
  data: ContactSchema,
): ActionResult<typeof contactSchema> {
  const t = await getTranslations("sections.contact.form");

  const formData = new FormData();
  formData.append("name", data.name);
  formData.append("email", data.email);
  formData.append("message", data.message);

  const res = await fetch(env.FORM_SEND_URL, {
    method: "POST",
    body: formData,
  });

  if (!res.ok) {
    throw new Error(t("somethingWentWrong"));
  }

  return {
    success: true,
    message: t("success"),
    errors: null,
    data,
  };
}
