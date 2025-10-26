import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2),
  email: z.email(),
  message: z.string().min(5),
});
export type ContactSchema = z.infer<typeof contactSchema>;
