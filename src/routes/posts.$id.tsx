import { createFileRoute, Link } from '@tanstack/react-router'
export const Route = createFileRoute('/posts/$id')({
  component: RouteComponent,
})

function RouteComponent() {
  const {id}=Route.useParams();
  return (
    <div>
      <Link from={Route.fullPath} to ="/login">Login</Link>
      <div>Hello {id}</div>
    </div>
  )
}
