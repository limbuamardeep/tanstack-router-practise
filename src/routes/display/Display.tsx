import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/display/Display')({
  component: RouteComponent,
})

function RouteComponent() {
  const {isAuthenticated,isAdmin, isClient}=Route.useRouteContext()
  if (!isAuthenticated) {
    return <div>Please log in to view this page.</div>
  }
  return (
    <div>
      {isAdmin && <div>Welcome, Admin! You have full access.</div>}
      {isClient && <div>Welcome, Client! You have limited access.</div>}
    </div>)
}
