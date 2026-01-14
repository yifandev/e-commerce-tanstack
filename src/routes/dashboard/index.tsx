import { requireAdminFn } from '@/data/admin'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/')({
  beforeLoad: async () => {
    await requireAdminFn()
  },
  component: DashboardPage,
})

function DashboardPage() {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p>Hanya user dengan role ADMIN</p>
    </div>
  )
}
