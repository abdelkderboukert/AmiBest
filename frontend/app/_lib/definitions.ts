import { z } from "zod";

export const AuthSchema = z.object({
  username: z
    .string()
    .min(3, "Username must be at least 3 characters")
    .max(20, "Username cannot exceed 20 characters")
    .regex(/^[a-zA-Z0-9_]+$/, "Only letters, numbers and underscores allowed")
    .transform((val) => val.trim()),

  email: z
    .string()
    .email("Please enter a valid email address")
    .trim()
    .toLowerCase()
    // .refine((value) => value.endsWith("@gmail.com") === false, {
    //   message: "Gmail addresses are not allowed",
    // })
    ,

  password: z
    .string()
    .min(7, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Must contain at least one uppercase letter")
    .regex(/[a-z]/, "Must contain at least one lowercase letter")
    .regex(/[0-9]/, "Must contain at least one number")
    .regex(/[^A-Za-z0-9]/, "Must contain at least one special character"),
});

// Infer TypeScript type
export type AuthCredentials = z.infer<typeof AuthSchema>;
