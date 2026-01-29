import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(public)/app/users/$userId/edit')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/app/users/$userId/edit"!</div>
}
