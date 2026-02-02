import { Link, Outlet, createFileRoute, notFound } from '@tanstack/react-router'
import { getProducts } from '@/lib/mock'

export const Route = createFileRoute('/admin/_adminLayout/categories/$categoryId/$subcategoryId')({
  component: RouteComponent,
  loader: async ({ params: { subcategoryId } }) => {
    const products = await getProducts(subcategoryId)
    if (products.length === 0) {
      throw notFound()
    }
    return { products }
  },
})

function RouteComponent() {
  const { products } = Route.useLoaderData()
  return (
    <div className="space-y-3">
      <h2 className="heading">Products</h2>
      <div className="list">
        {products.map((product) => (
          <Link
            from={Route.fullPath}
            to="/admin/categories/$categoryId/$subcategoryId/$productId"
            className="card"
            activeProps={{ className: 'active-card' }}
            params={{ productId: product.id }}
          >
            <span className='title'>{product.name}</span>
          </Link>
        ))}
      </div>
      <Outlet/>
    </div>
  )
}
