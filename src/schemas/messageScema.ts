import { z } from "zod";

export const signInSchema = z.object({
  content: z
    .string()
    .min(10, {
      error: "Message must be at least 10 characters long",
    })
    .max(300, {
      error: "Message must be at most 300 characters long",
    }),
});
