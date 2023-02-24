import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { LoginPage } from '../auth';
import { AuthContext } from '../auth/context'
import { HeroesApp } from '../HeroesApp';


export const PublicRoute = () => {

    const authState = useContext(AuthContext);

    const {logged} = authState.authState;
    
    return (!logged
        ? <LoginPage />
        : <Navigate to={'/marvel'}/>
    );
}
