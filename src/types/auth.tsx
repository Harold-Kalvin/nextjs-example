import { z } from "zod";

export const UserSchema = z.object({
  id: z.number(),
  email: z.string(),
  username: z.string(),
  display: z.string(),
  has_usable_password: z.boolean(),
});

export type User = z.infer<typeof UserSchema>;
