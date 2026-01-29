import { Link, Outlet, createFileRoute } from '@tanstack/react-router'
import { getCountries } from '@/lib/mock'

export const Route = createFileRoute('/(public)/contact-us/')({
  component: RouteComponent,
  loader: async () => {
    const countries = await getCountries()
    return { countries }
  },
  pendingComponent: () => <div>Countries are loading</div>,
})

function RouteComponent() {
  const { countries } = Route.useLoaderData()
  return (
    <div>
      <div className="w-full">
        <h2 className="font-bold text-xl">What country are you at?</h2>
        <div className=" list justify-center items-center mt-2 p-4">
          {countries.map((country) => (
            <Link
              key={country.name}
              to="/contact-us/$country"
              params={{ country: country.name }}
              className="flex shadow-xl justify-center items-center border border-gray-500 w-full p-2 "
              activeProps={{ className: 'bg-gray-500' }}
            >
              <span className="title">{country.name}</span>
            </Link>
          ))}
        </div>
        <Outlet />
      </div>
    </div>
  )
}
