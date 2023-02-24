
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import { childrenHeroesRoutes } from "../heroes/routes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";


const router = createBrowserRouter([
         
    {
      path: "/login",
      element: <PublicRoute />,
    },
    {
      path: "/",
      element: <PrivateRoute />,
      children: childrenHeroesRoutes,
    },
  ]);

export const AppRouter = () => {

  return (
    
    <RouterProvider router={router} />
 
  )
}
