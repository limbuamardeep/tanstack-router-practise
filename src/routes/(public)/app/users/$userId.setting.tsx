import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(public)/app/users/$userId/setting')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/app/users/$userId/setting"!</div>
}
