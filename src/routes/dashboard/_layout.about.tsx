import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/_layout/about')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      Placeholder about
    </div>
  )
}
