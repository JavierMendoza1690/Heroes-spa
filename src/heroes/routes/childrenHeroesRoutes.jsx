import { Navigate } from "react-router-dom";
import { HeroesApp } from "../../HeroesApp";
import { DcPage, HeroPage, MarvelPage, SearchPage } from "../pages";



export const childrenHeroesRoutes = [
        {
          path: "/marvel",
          element: <MarvelPage />,
        },
        {
          path: "/dc",
          element: <DcPage />,
        },
        {
          path: "/search",
          element: <SearchPage />,
        },
        {
          path: "/hero/:heroid",
          element: <HeroPage />,
        },
        {
          path: "/",
          element: <Navigate to={"/marvel"} />,
        }, 
        {
          path: "/*",
          element: <Navigate to={"/marvel"} />,
        },
  
   
];
