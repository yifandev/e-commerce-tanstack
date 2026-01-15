import { z } from 'zod'

/* ================================
   Reusable Validators
================================ */

const passwordRules = z
  .string()
  .min(8, { message: 'Password minimal 8 karakter' })
  .max(64, { message: 'Password maksimal 64 karakter' })
  .regex(/[a-z]/, { message: 'Password harus mengandung huruf kecil' })
  .regex(/[A-Z]/, { message: 'Password harus mengandung huruf besar' })
  .regex(/[0-9]/, { message: 'Password harus mengandung angka' })
  .regex(/[^a-zA-Z0-9]/, {
    message: 'Password harus mengandung simbol',
  })

const emailRules = z
  .email({ message: 'Format email tidak valid' })
  .max(255, { message: 'Email terlalu panjang' })
  .transform((email) => email.toLowerCase())

/* ================================
   Login Schema
================================ */

export const loginSchema = z.object({
  email: emailRules,
  password: z.string().min(1, { message: 'Password wajib diisi' }),
})

/* ================================
   Sign Up Schema
================================ */

export const signUpSchema = z
  .object({
    fullName: z
      .string()
      .min(3, { message: 'Nama minimal 3 karakter' })
      .max(50, { message: 'Nama maksimal 50 karakter' })
      .regex(/^[a-zA-Z\s]+$/, {
        message: 'Nama hanya boleh mengandung huruf dan spasi',
      }),

    email: emailRules,

    password: passwordRules,

    confirmPassword: z
      .string()
      .min(1, { message: 'Konfirmasi password wajib diisi' }),
  })
  .superRefine((data, ctx) => {
    // 1️⃣ Password harus sama
    if (data.password !== data.confirmPassword) {
      ctx.addIssue({
        code: 'custom',
        path: ['confirmPassword'],
        message: 'Password tidak sama',
      })
    }

    // 2️⃣ Password tidak boleh mengandung nama
    const normalizedName = data.fullName.replace(/\s+/g, '').toLowerCase()
    if (
      normalizedName &&
      data.password.toLowerCase().includes(normalizedName)
    ) {
      ctx.addIssue({
        code: 'custom',
        path: ['password'],
        message: 'Password tidak boleh mengandung nama Anda',
      })
    }

    // 3️⃣ Password tidak boleh mirip email
    const emailPrefix = data.email.split('@')[0]?.toLowerCase()
    if (emailPrefix && data.password.toLowerCase().includes(emailPrefix)) {
      ctx.addIssue({
        code: 'custom',
        path: ['password'],
        message: 'Password tidak boleh mirip dengan email',
      })
    }
  })
