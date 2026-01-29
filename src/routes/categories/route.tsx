import { Link, Outlet, createFileRoute } from '@tanstack/react-router'
import { getCategories } from '@/lib/mock'

export const Route = createFileRoute('/categories')({
  component: RouteComponent,
  loader: async () => {
    const categories = await getCategories()
    return { categories }
  },
  pendingComponent: () => <div>Categories are loading...</div>,
  errorComponent: () => <div>Error....</div>,
})

function RouteComponent() {
  const { categories } = Route.useLoaderData()
  return (
    <div className="space-y-3">
      <h2 className="heading">Categories</h2>
      <div className="list">
        {categories.map((category) => (
          <Link
            to="/categories/$categoryId"
            key={category.name}
            className="card"
            params={{ categoryId: category.id }}
            activeProps={{className:"active-card"}}
          >
            <span className='title'>{category.name}</span>
          </Link>
        ))}
      </div>
      <Outlet />
    </div>
  )
}
