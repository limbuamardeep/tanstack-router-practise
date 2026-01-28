import { createFileRoute, Link, Outlet } from '@tanstack/react-router'
import {Route as AboutRoute} from "./_layout.about.tsx"
import {Route as SettingRoute} from "./_layout.setting.tsx" //create route from the existing route

export const Route = createFileRoute('/dashboard/_layout')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <nav className='flex flex-row w-full gap-4 mb-2'>
        <div>
          <Link to={AboutRoute.to}>about</Link>  
        </div>
        <div>
          <Link to={SettingRoute.to}>setting</Link>
        </div>
        </nav>
        <Outlet/>
    </div>
  )
}
