import { Link } from '@tanstack/react-router'
import { Button, buttonVariants } from './ui/button'
import { authClient } from '@/lib/auth-client'
import { toast } from 'sonner'
import { ModeToggle } from './web/theme-toggle'
import CartIcon from './web/CartIcon'

export default function Navbar() {
  const { data: session, isPending } = authClient.useSession()

  const handleSignOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          toast.success('Keluar akun successfully')
        },
        onError: ({ error }) => {
          toast.error(error.message)
        },
      },
    })
  }

  const isAdmin = session?.user?.role?.toUpperCase() === 'ADMIN'

  return (
    <nav className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="mx-auto flex h-12 max-w-350 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <img
            src="/apple.png"
            alt="Air Apple"
            className="h-7 w-7 object-contain dark:invert transition"
          />
          <h1 className="text-2xl font-semibold tracking-tight">
            Air<span className="font-bold">Apple</span>
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <ModeToggle />
          <CartIcon />

          {isPending ? null : session ? (
            <>
              {/* 🔐 ADMIN ONLY */}
              {isAdmin && (
                <Link to="/dashboard" className={buttonVariants()}>
                  Dashboard
                </Link>
              )}

              <Button onClick={handleSignOut} variant="secondary">
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className={buttonVariants({ variant: 'secondary' })}
              >
                Login
              </Link>
              <Link to="/sign-up" className={buttonVariants()}>
                Get Started
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}
