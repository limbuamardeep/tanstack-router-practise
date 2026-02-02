import { createFileRoute, redirect,  } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/dashboard')({
    beforeLoad:({ context })=>{
        if(!context.isAuthenticated ){
            throw redirect({ to: '/login' })
        } 
    },
  component: RouteComponent,
})

function RouteComponent() {
  const {role}=Route.useRouteContext()
  return <div>Hello {role}</div>
}
