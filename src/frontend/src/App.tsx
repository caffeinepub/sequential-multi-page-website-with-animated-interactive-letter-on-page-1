import { createRouter, createRoute, createRootRoute, RouterProvider, Outlet } from '@tanstack/react-router';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';

// Root route with layout
const rootRoute = createRootRoute({
  component: () => <Outlet />
});

// Page 1 route
const page1Route = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Page1
});

// Page 2 route
const page2Route = createRoute({
  getParentRoute: () => rootRoute,
  path: '/page2',
  component: Page2
});

// Page 3 route
const page3Route = createRoute({
  getParentRoute: () => rootRoute,
  path: '/page3',
  component: Page3
});

// Create router
const routeTree = rootRoute.addChildren([page1Route, page2Route, page3Route]);
const router = createRouter({ routeTree });

// Type declaration for router
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

function App() {
  return <RouterProvider router={router} />;
}

export default App;
