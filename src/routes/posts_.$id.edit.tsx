import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/posts_/$id/edit')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/posts_/$id/edit"!</div>
}
