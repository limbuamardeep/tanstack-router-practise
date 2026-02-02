import { Link, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/_adminLayout/dashboard')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <div className='flex gap-2 justify-center'>
        <Link to={'/admin/search'}>Search</Link>
        <Link to={'/admin/categories'}>category</Link>
      </div>
      <div>Admin Dashboard</div>
    </div>
  )
}
