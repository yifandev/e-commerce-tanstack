import { createFileRoute, Outlet } from '@tanstack/react-router'
import Header from '@/components/Header'
export const Route = createFileRoute('/_public')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <Header />
      <main className="max-w-350 mx-auto pt-10 min-h-screen mb-20">
        <Outlet />
      </main>
    </div>
  )
}
