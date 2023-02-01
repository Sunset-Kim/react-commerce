import { z } from "zod";
import { CustomUser } from "./user.schema";

export const Member = CustomUser.extend({
  nickname: z.string(),
});

export type Member = z.infer<typeof Member>;
