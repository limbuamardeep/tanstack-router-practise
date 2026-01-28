import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/posts/{-$category}/{-$slug}')({
  component: RouteComponent,
})

function RouteComponent() {
  const {category,slug}=Route.useParams();
  return <div>{category && slug?`post in:${category} and slug is:${slug}`:"All post"}</div>
}
