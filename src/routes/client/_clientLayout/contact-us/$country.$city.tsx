import { createFileRoute, notFound } from '@tanstack/react-router'
import { getCities } from '@/lib/mock'


export const Route = createFileRoute('/client/_clientLayout/contact-us/$country/$city')({
  component: RouteComponent,
  loader:async({params:{country,city}})=>{
    const cities=await getCities(country)
    if (!cities.includes(city)){
      throw notFound();
    }
    return {city}
  }
})

function RouteComponent() {
  const {city}=Route.useLoaderData();
  return (
    <div>
      <h2 className='heading'>
        Selected City:<span>{city}</span>
      </h2>
    </div>
  )
}
