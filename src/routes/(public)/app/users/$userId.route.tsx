import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/(public)/app/users/$userId')({
  component: RouteComponent,
})

function RouteComponent() {
  return(
    <Outlet/>
  )
}
