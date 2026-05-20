import { createRouter, createMemoryHistory } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'

export function getRouter() {
  const router = createRouter({
    routeTree,
    scrollRestoration: true,
    defaultPreload: false,
  })

  return router
}

export function getRouterSsr(opts) {
  const router = createRouter({
    routeTree,
    scrollRestoration: false,
    history: createMemoryHistory({
      initialEntries: [opts.path],
    }),
    context: {
      ...opts.context,
    },
  })

  return router
}
