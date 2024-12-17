import { z } from "zod";

export const loginFormSchema = z.object({
  email: z.string().email("❗ Please, kindly enter a valid Email address"),
});
