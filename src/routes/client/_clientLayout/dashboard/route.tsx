import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/client/_clientLayout/dashboard')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Client Dashboard</div>
}
