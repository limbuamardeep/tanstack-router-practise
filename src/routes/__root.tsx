import { Link, Outlet, createRootRouteWithContext} from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'

import Header from '../components/Header'

import TanStackQueryDevtools from '../integrations/tanstack-query/devtools'
import type { QueryClient } from '@tanstack/react-query'

export type UserRole = 'admin' | 'client' | null
export type RouterContext = {
  role: UserRole
  login: (newRole:"admin"|"client") => void
  logout: () => void
  isAdmin: boolean
  isClient: boolean
  isAuthenticated: boolean
  queryClient:QueryClient
}
export const Route = createRootRouteWithContext<RouterContext>()({
 
  component: () => (
    <>
      <Header />
      <div className='container mx-auto max-w-xl mb-2'>
        <div className='space-x-2'>
          <Link to="/categories">Categories</Link>
          <Link to="/search">Search</Link>
          <Link to="/contact-us">Contact Us</Link>
        </div>
      </div>
      <Outlet />
      <TanStackDevtools
        config={{
          position: 'bottom-right',
        }}
        plugins={[
          {
            name: 'Tanstack Router',
            render: <TanStackRouterDevtoolsPanel />,
          },
          TanStackQueryDevtools,
        ]}
      />
    </>
  ),
  notFoundComponent: () => <div>404 not Found</div>,
})
