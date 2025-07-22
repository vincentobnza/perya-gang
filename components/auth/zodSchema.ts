import { z } from "zod";

export const accountDetailsSchema = z
  .object({
    fullName: z.string().min(1, "Full Name is required"),
    username: z.string().min(1, "Username is required"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string().min(1, "Please confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export type formFields = z.infer<typeof accountDetailsSchema>;
