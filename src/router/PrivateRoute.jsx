import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../auth/context'
import { HeroesApp } from '../HeroesApp';

export const PrivateRoute = ({ children }) => {
    const authState = useContext(AuthContext);

    const {logged} = authState.authState;
    
    const {pathname, search} = useLocation();
    const lastPath = pathname + search;
    
    localStorage.setItem('lastPath', lastPath)

  return (logged
    ? <HeroesApp />
    : <Navigate to={'/login'}/>);
  
}
