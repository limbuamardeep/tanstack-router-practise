import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/_layout/setting')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      Placeholder settings
    </div>
  )
}
