import z from "zod";
export const passwordSchema = z
  .string()
  .min(8, { message: "Password must be at least 8 characters long" })
  .max(30, { message: "Password cannot exceed 30 characters" })
  // Must contain at least one uppercase letter
  .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter" })
  // Must contain at least one lowercase letter
  .regex(/[a-z]/, { message: "Password must contain at least one lowercase letter" })
  //Must contain at least one number
  .regex(/[0-9]/, { message: "Password must contain at least one number" })
  //Must contain at least one special character
  .regex(/[^A-Za-z0-9]/, { message: "Password must contain at least one special character" });
export const signUpSchema=z.object({
    name:z.string().min(3).max(25),
    email:z.email(),
    password: passwordSchema
})

