import { createFileRoute, useRouter } from '@tanstack/react-router'

export const Route = createFileRoute('/(auth)/login')({
  component: RouteComponent,
})

function RouteComponent() {
  const router = useRouter()
  const { login } = Route.useRouteContext()
    const handleLogin = (role: 'admin' | 'client') => {
    login(role)
    router.navigate({ to: '/' })
  }

  return (
    <div>
      <div>
        <button onClick={()=>handleLogin('admin')as const}>Login as admin</button>
        <button onClick={()=>handleLogin('client')as const}>Login as Client</button>
      </div>
    </div>
  )
}
