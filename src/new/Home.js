import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Help from './Help/Help';
import About from './About/About';
import PageNotFound from './PageNotFound/PageNotFound';
import Homepage from './Homepage/Homepage';
const router = createBrowserRouter([
  { path: '/', element: <Homepage /> },
  { path: '/about', element: <About /> },
  { path: '/contact', element: <Help /> },
  { path: '*', element: <PageNotFound /> }
]);
export default function Home() {
return(
    <>
      <RouterProvider router={router} />
    </>
  );
}
