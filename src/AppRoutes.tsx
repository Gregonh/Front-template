import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { ErrorPage } from './components/ErrorPage';
import { Home } from './components/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,

    // must be the last, to handle undefined route
    errorElement: (
      <>
        <ErrorPage />
      </>
    ),
  },
]);

export function AppRoutes() {
  return <RouterProvider router={router} />;
}
