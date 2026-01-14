import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Link, useNavigate } from '@tanstack/react-router'
import { useForm } from '@tanstack/react-form'
import { loginSchema } from '@/schemas/auth'
import { authClient } from '@/lib/auth-client'
import { toast } from 'sonner'
import { useTransition } from 'react'
import { Separator } from '@/components/ui/separator'

export function LoginForm() {
  const navigate = useNavigate()
  const [isPending, startTransition] = useTransition()

  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    validators: {
      onSubmit: loginSchema,
    },
    onSubmit: ({ value }) => {
      startTransition(async () => {
        await authClient.signIn.email({
          email: value.email,
          password: value.password,
          fetchOptions: {
            onSuccess: () => {
              toast.success('Login telah berhasil')
              navigate({
                to: '/',
              })
            },
            onError: ({ error }) => {
              toast.error(error.message)
            },
          },
        })
      })
    },
  })

  // Fungsi untuk login dengan provider sosial
  const handleSocialLogin = (provider: 'github' | 'google') => {
    startTransition(async () => {
      try {
        await authClient.signIn.social({
          provider: provider,
          fetchOptions: {
            onSuccess: () => {
              toast.success(`Login dengan ${provider} berhasil`)
              navigate({
                to: '/',
              })
            },
            onError: ({ error }) => {
              toast.error(error.message)
            },
          },
        })
      } catch (error) {
        toast.error(`Terjadi kesalahan saat login dengan ${provider}`)
      }
    })
  }

  const socialButtons = [
    {
      id: 'github',
      label: 'GitHub',
      iconSrc: '/github.svg',
      onClick: () => handleSocialLogin('github'),
    },
    {
      id: 'google',
      label: 'Google',
      iconSrc: '/google.svg',
      onClick: () => handleSocialLogin('google'),
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Masuk ke akun Anda</CardTitle>
        <CardDescription>
          Masukkan email Anda di bawah untuk masuk ke akun Anda
        </CardDescription>
      </CardHeader>
      <CardContent>
        {/* Grid Tombol Login Sosial */}
        <div className="mb-6">
          <div className="grid grid-cols-2 gap-3">
            {socialButtons.map((button) => (
              <Button
                key={button.id}
                type="button"
                variant="outline"
                onClick={button.onClick}
                disabled={isPending}
                className="
          h-11
          w-full
          justify-center
          gap-2
          rounded-lg
          border-muted
          bg-background
          hover:bg-accent
          hover:text-accent-foreground
          transition
        "
              >
                <img
                  src={button.iconSrc}
                  alt={button.label}
                  className="h-5 w-5"
                />
                <span className="text-sm font-medium">{button.label}</span>
              </Button>
            ))}
          </div>
        </div>

        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center">
            <Separator className="w-full" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Atau dengan email
            </span>
          </div>
        </div>

        {/* Form Login Email/Password */}
        <form
          onSubmit={(e) => {
            e.preventDefault()
            form.handleSubmit()
          }}
        >
          <FieldGroup>
            <form.Field
              name="email"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid
                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={field.name}>Email</FieldLabel>
                    <Input
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      aria-invalid={isInvalid}
                      placeholder="johndoe032@gmail.com"
                      type="email"
                      autoComplete="off"
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                )
              }}
            />
            <form.Field
              name="password"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid
                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={field.name}>Password</FieldLabel>
                    <Input
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      aria-invalid={isInvalid}
                      placeholder="**********"
                      type="password"
                      autoComplete="off"
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                )
              }}
            />
            <Field>
              <Button type="submit" className="w-full" disabled={isPending}>
                {isPending ? 'Masuk halaman...' : 'Masuk'}
              </Button>
              <FieldDescription className="text-center">
                Tidak punya akun?{' '}
                <Link to={'/sign-up'} className="text-primary hover:underline">
                  Sign Up
                </Link>
              </FieldDescription>
            </Field>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  )
}
