import { Link, Outlet, createFileRoute, notFound } from '@tanstack/react-router'
import { getSubcategories } from '@/lib/mock'

export const Route = createFileRoute('/categories/$categoryId')({
  component: RouteComponent,
  loader: async ({ params: { categoryId } }) => {
    const subcategories = await getSubcategories(categoryId)
    if (subcategories.length === 0) {
      throw notFound()
    }
    return { subcategories }
  },
  pendingComponent: () => <div>Loading Sub-Categories...</div>,
  errorComponent: () => <div>Error...</div>,
})

function RouteComponent() {
  const { subcategories } = Route.useLoaderData()
  return (
    <div className="space-y-3">
      <h2 className="heading">Sub Categories</h2>
      <div className="list">
        {subcategories.map((subcategory) => (
          <Link
            key={subcategory.id}
            from={Route.fullPath}
            to="/categories/$categoryId/$subcategoryId"
            params={{ subcategoryId: subcategory.id }}
            className="card"
            activeProps={{className:"active-card"}}
          >
            <span className='title'>{subcategory.name}</span>
          </Link>
        ))}
      </div>
      <Outlet />
    </div>
  )
}
