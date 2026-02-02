import { Outlet, createFileRoute,redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/_adminLayout')({
  beforeLoad:({context})=>{
    if (!context.isAuthenticated || context.role !== 'admin') {
      throw redirect({to:'/login'})
    }
  },
  component: RouteComponent,
})

function RouteComponent() {
  return <Outlet />
}
