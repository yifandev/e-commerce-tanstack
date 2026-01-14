import { createServerFn } from '@tanstack/react-start'
import { getRequestHeaders } from '@tanstack/react-start/server'
import { redirect } from '@tanstack/react-router'
import { auth } from '@/lib/auth'

/**
 * Normalisasi role dari database
 * null -> USER
 */
function normalizeRole(role?: string | null) {
  return role?.toUpperCase() ?? 'USER'
}

/**
 * Dashboard ADMIN only
 */
export const requireAdminFn = createServerFn({ method: 'GET' }).handler(
  async () => {
    const headers = getRequestHeaders()

    const session = await auth.api.getSession({ headers })

    // 1️⃣ Authentication
    if (!session) {
      throw redirect({ to: '/login' })
    }

    // 2️⃣ Authorization
    const role = normalizeRole(session.user.role)

    if (role !== 'ADMIN') {
      throw redirect({ to: '/unauthorized' })
    }

    return session
  },
)
