import { render, screen } from "@testing-library/react"
import { MemoryRouter, Route, Routes, useNavigate } from "react-router-dom"
import { AuthContext, LoginPage } from "../../src/auth"
import { HeroesApp } from "../../src/HeroesApp"
import { PublicRoute } from "../../src/router/PublicRoute"



describe('pruebas en PublicRoute', () => { 

    test('Si no está autenticado debe mostrar LoginPage', () => { 

        const contexValue = {
            authState:
                {logged:false},
        }
       const {logged} = contexValue.authState;
        render ( 
            <MemoryRouter> 
                <AuthContext.Provider value={contexValue}>

                <Routes>
                    <Route index element = {<PublicRoute />}  />
                </Routes> 

            </AuthContext.Provider>
            </MemoryRouter>
        );

        expect(screen.getByRole("heading",{level: 1}).innerHTML).toBe('Login');
    })

    test('Debe navigar si está autenticado', () => {  })
 })