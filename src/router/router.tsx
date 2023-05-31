import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const BasicLayout = lazy(() => import('../view/layout/BasicLayout'));
const HomePage = lazy(() => import('../view/pages/HomePage/HomePage'));
const ReposPage = lazy(() => import('../view/pages/ReposPage/ReposPage'));
const StarsPage = lazy(() => import('../view/pages/StarsPage/StarsPage'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Suspense fallback={<></>}><BasicLayout /></Suspense>,
    children: [
      {
        path: "/",
        element: <Suspense fallback={<></>}><HomePage /></Suspense>,
      },
      {
        path: "repos",
        element: <Suspense fallback={<></>}><ReposPage /></Suspense>,
      },
      // {
      //   path: "repos/:id",
      //   element: <Suspense fallback={<></>}><RepoPage /></Suspense>,
      // },
      {
        path: "stars",
        element: <Suspense fallback={<></>}><StarsPage /></Suspense>,
      }
    ]
  }
])

export default router;