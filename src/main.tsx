import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'

import * as TanStackQueryProvider from './integrations/tanstack-query/root-provider.tsx'

import { routeTree } from './routeTree.gen'

import './styles.css'
import reportWebVitals from './reportWebVitals.ts'
import { useRouterContextState } from './lib/use-router-context-state.tsx'

const TanStackQueryProviderContext = TanStackQueryProvider.getContext()

function App() {
  const routerContextState = useRouterContextState(TanStackQueryProviderContext.queryClient)

  const router = createRouter({
    routeTree,
    context: routerContextState,
    defaultPreload: 'intent',
    scrollRestoration: true,
    defaultStructuralSharing: true,
    defaultPreloadStaleTime: 0,
    defaultPendingMs: 0,
  })

  return <RouterProvider router={router} />
}

const rootElement = document.getElementById('app')
if (rootElement && !rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <TanStackQueryProvider.Provider {...TanStackQueryProviderContext}>
        <App />
      </TanStackQueryProvider.Provider>
    </StrictMode>,
  )
}

reportWebVitals()
reportWebVitals()
