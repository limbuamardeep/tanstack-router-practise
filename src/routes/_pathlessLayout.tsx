import { Outlet, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_pathlessLayout')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <h2>Hello</h2>
      <Outlet />
    </div>
  )
}
