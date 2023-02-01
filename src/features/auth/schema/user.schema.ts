import { z } from "zod";

export const CustomUser = z.object({
  uid: z.string().uuid(),
  name: z.string(),
  email: z.string().email().optional(),
  photoUrl: z.string().optional(),
});

export type CustomUser = z.infer<typeof CustomUser>;
