import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "The name must be at least 2 characters long."),
  email: z.email("Invalid email address."),
  message: z.string().min(5, "The message must be at least 5 characters long."),
});
export type ContactSchema = z.infer<typeof contactSchema>;
