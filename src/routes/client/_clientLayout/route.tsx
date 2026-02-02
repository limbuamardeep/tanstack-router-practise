import { Link, Outlet, createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/client/_clientLayout')({
  beforeLoad: ({ context }) => {
    if (!context.isAuthenticated || context.role !== 'client') {
      throw redirect({ to: '/login' })
    }
  },
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <div className='flex justify-center'>
      <Link to={"/client/contact-us"} className='cursor-pointer'>Contact Us</Link>
      </div>
      <Outlet />
    </div>
  )
}
