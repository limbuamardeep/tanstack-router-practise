import { Link,createFileRoute  } from '@tanstack/react-router'
import { searchSchema } from './-schema/SearchSchema.zod'
import { searchProducts } from '@/lib/mock'
import { FilterPanel } from './-components/FilterPanel'


export const Route = createFileRoute('/(public)/search')({
  component: RouteComponent,
  validateSearch: searchSchema,
  loaderDeps: ({ search }) => search,
  loader: async ({ deps }) => {
    const products = await searchProducts(deps)
    return { products }
  },
})

function RouteComponent() {
  const { products } = Route.useLoaderData()
  return (
    <div>
      <FilterPanel />
      <div className="list">
        {products.map((product) => (
          <Link
            className="card"
            to="/categories/$categoryId/$subcategoryId/$productId"
            params={{
              productId: product.id,
              categoryId: product.categoryId,
              subcategoryId: product.subcategoryId,
            }}
            key={product.id}
          >
            <p className="title">{product.name}</p>
            <p className="description">{product.description}</p>
            <p className="price">{product.price}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
