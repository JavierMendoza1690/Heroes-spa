import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { AuthContext, AuthProvider } from "./auth"
import { Navbar } from "./ui"


export const HeroesApp = () => {

  return (
  <>
      <Navbar />
      <div className="container">
        <Outlet />
      </div>
    </>
    
 
  )
}
