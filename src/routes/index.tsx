import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div className="text-center py-8">
      <h1 className="text-3xl font-bold mb-4">Welcome Home</h1>
      <p className="text-gray-600">This is your home page</p>
    </div>
  )
}
