import { createFileRoute, notFound } from '@tanstack/react-router'
import { getProduct } from '@/lib/mock'

export const Route = createFileRoute(
  '/(public)/categories/$categoryId/$subcategoryId/$productId',
)({
  component: RouteComponent,
  loader: async ({ params: { productId } }) => {
    const product = await getProduct(productId)
    if (!product) {
      throw notFound()
    }
    return { product }
  },
})

function RouteComponent() {
  const { product } = Route.useLoaderData()
  return (
    <div className="space-y-3">
      <h2 className="heading">Product Details</h2>
      <div className="card">
        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
        <p className="text-xl font-bold text-green-600 mb-3">${product.price}</p>
        <p className="text-gray-700 leading-relaxed">{product.description}</p>
      </div>
    </div>
  )
}
