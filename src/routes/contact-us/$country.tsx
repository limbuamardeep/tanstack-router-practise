import { Link, Outlet, createFileRoute, notFound } from '@tanstack/react-router'
import { getCities } from '@/lib/mock'

export const Route = createFileRoute('/contact-us/$country')({
  component: RouteComponent,
  loader: async ({ params: { country } }) => {
    const cities = await getCities(country)
    if (cities.length === 0) {
      throw notFound()
    }
    return { cities }
  },
})

function RouteComponent() {
  const { cities } = Route.useLoaderData()
  return (
    <div className="space-y-3">
      <h2 className="font-bold text-xl">Which City?</h2>
      <div className="list p-4 mt-2">
        {cities.map((city) => (
          <Link
            from={Route.fullPath}
            to="/contact-us/$country/$city"
            className="card"
            params={{ city: city }}
            key={city}
            activeProps={{ className: 'active-card' }}
          >
            <span className="title">{city}</span>
          </Link>
        ))}
      </div>
      <Outlet />
    </div>
  )
}
