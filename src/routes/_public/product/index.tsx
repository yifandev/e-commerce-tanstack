import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_public/product/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_public/product/"!</div>
}
