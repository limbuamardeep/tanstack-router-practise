import { Outlet, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/_adminLayout/app/users/$userId')({
  component: RouteComponent,
})

function RouteComponent() {
  return(
    <Outlet/>
  )
}
