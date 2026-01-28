import { createFileRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'
export const Route = createFileRoute('/posts_/$id/edit')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <Link to="/posts/$id" params={{id:"my-first-post"}}>Blog post</Link> {/*when link is clicked fills the id params with the my-first-app*/}
      <div>Hello "/posts_/$id/edit"!</div>
    </div>
  )
}
