import { createFileRoute, Link, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/_layout')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <nav className='flex flex-row w-full gap-4 mb-2'>
        <div>
          <Link to="/dashboard/about">about</Link>  
        </div>
        <div>
          <Link to="/dashboard/setting">setting</Link>
        </div>
        </nav>
        <Outlet/>
    </div>
  )
}
