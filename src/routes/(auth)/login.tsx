import { createFileRoute, redirect, useRouter } from '@tanstack/react-router'


export const Route = createFileRoute('/(auth)/login')({
  beforeLoad: ({ context }) => {
    if (context.isAuthenticated) {
      throw redirect({
        to: context.role === 'admin' ? '/admin/dashboard' : '/client/dashboard'
      })
    }
  },
  component: RouteComponent,
})

function RouteComponent() {
  const router = useRouter()
  const { login } = Route.useRouteContext()
  const handleLogin = (role: 'admin' | 'client') => {
    login(role)
    if (role === 'admin') {
      router.navigate({ to: '/admin/dashboard' })
    }
    if (role === 'client') {
      router.navigate({ to: '/client/dashboard' })
    }
  }

  return (
    <div>
      <div className="flex flex-col gap-3 w-50 mx-auto">
        <button
          className="border shadow-xl w-auto justify-center items-center"
          onClick={() => handleLogin('admin')}
        >
          Login as admin
        </button>
        <button
          className="border shadow-xl w-auto justify-center items-center"
          onClick={() => handleLogin('client')}
        >
          Login as Client
        </button>
      </div>
    </div>
  )
}
