import { z } from "zod";

export const emailSchema = z
  .string()
  .min(1, "Email address is required")
  .email("Please enter a valid email address");

export const passwordSchema = z
  .string()
  .min(1, "Password is required")
  .min(8, "Password must be at least 8 characters long")
  .regex(/[A-Z]/, "Include at least one uppercase letter")
  .regex(/[a-z]/, "Include at least one lowercase letter")
  .regex(/[0-9]/, "Include at least one number")
  .regex(/[@$!%*?&#_]/, "Include at least one special character (@, #, $, %, etc.)");

export const confirmPasswordSchema = (password: string) =>
  z
    .string()
    .min(1, "Confirm password is required")
    .refine((val) => val === password, {
      message: "Passwords do not match",
    });

export const phoneSchema = z
  .string()
  .min(1, "Phone number is required")
  .refine(
    (val) => {
      const clean = val.replace(/[\s-]/g, "");
      return /^\d{7,15}$/.test(clean);
    },
    { message: "Please enter a valid phone number" }
  );

export const ninSchema = z
  .string()
  .min(1, "NIN is required")
  .regex(/^\d{11}$/, "NIN must be an 11-digit number");

export function requiredSchema(fieldName: string = "This field") {
  return z
    .string()
    .min(1, `${fieldName} is required`)
    .refine((val) => val.trim().length > 0, {
      message: `${fieldName} is required`,
    });
}

// Zod Schemas for Full Forms
export const signInSchema = z.object({
  email: emailSchema,
  password: z.string().min(1, "Password is required"),
});

export const signUpSchema = z
  .object({
    email: emailSchema,
    password: passwordSchema,
    confirmPassword: z.string().min(1, "Confirm password is required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const completeSignUpSchema = z
  .object({
    fullName: requiredSchema("Full name"),
    password: passwordSchema,
    confirmPassword: z.string().min(1, "Confirm password is required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const forgotPasswordSchema = z.object({
  email: emailSchema,
});

export const changePasswordSchema = z
  .object({
    password: passwordSchema,
    confirmPassword: z.string().min(1, "Confirm password is required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const startApplicationSchema = z.object({
  assessmentCenter: requiredSchema("Assessment center"),
  trade: requiredSchema("Trade"),
});

export const personalInfoSchema = z.object({
  firstName: requiredSchema("First name"),
  lastName: requiredSchema("Last name"),
  dob: requiredSchema("Date of birth"),
  gender: requiredSchema("Gender"),
  nationality: requiredSchema("Nationality"),
  email: emailSchema,
  phoneNumber: phoneSchema,
  state: requiredSchema("State of residence"),
  lga: requiredSchema("Local Government Area"),
  streetAddress: requiredSchema("Residential address"),
  impairment: requiredSchema("Accessibility selection"),
});

export const rplExperienceTradeSchema = z.object({
  qualificationTitle: requiredSchema("Qualification title"),
  assessmentType: requiredSchema("Assessment type"),
  occupation: requiredSchema("Occupation"),
  yearsOfExperience: requiredSchema("Years of experience"),
});

// Helper function to extract field errors from a Zod safeParse result
export function extractZodErrors(
  result: { success: boolean; error?: z.ZodError }
): Record<string, string> {
  if (result.success || !result.error) return {};
  const errors: Record<string, string> = {};
  for (const issue of result.error.issues) {
    const key = issue.path[0];
    if (key !== undefined && typeof key === "string" && !errors[key]) {
      errors[key] = issue.message;
    }
  }
  return errors;
}

// Validation helper functions powered by Zod schemas
export function validateEmail(email: string): string | null {
  const res = emailSchema.safeParse(email);
  return res.success ? null : res.error.issues[0]?.message || "Invalid email";
}

export function validatePassword(password: string): string | null {
  const res = passwordSchema.safeParse(password);
  return res.success ? null : res.error.issues[0]?.message || "Invalid password";
}

export function validateConfirmPassword(password: string, confirmPassword: string): string | null {
  const res = confirmPasswordSchema(password).safeParse(confirmPassword);
  return res.success ? null : res.error.issues[0]?.message || "Passwords do not match";
}

export function validateRequired(value: string, fieldName: string = "This field"): string | null {
  const res = requiredSchema(fieldName).safeParse(value);
  return res.success ? null : res.error.issues[0]?.message || `${fieldName} is required`;
}

export function validatePhone(phone: string): string | null {
  const res = phoneSchema.safeParse(phone);
  return res.success ? null : res.error.issues[0]?.message || "Invalid phone number";
}

export function validateNIN(nin: string): string | null {
  const res = ninSchema.safeParse(nin);
  return res.success ? null : res.error.issues[0]?.message || "Invalid NIN";
}
