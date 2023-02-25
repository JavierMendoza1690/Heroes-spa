import { render, screen } from "@testing-library/react"
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { AuthContext, LoginPage } from "../../src/auth"
import { HeroPage, MarvelPage } from "../../src/heroes/pages";
import { AppRouter } from "../../src/router/AppRouter";
import { PrivateRoute } from "../../src/router/PrivateRoute";
import { PublicRoute } from "../../src/router/PublicRoute";

describe('Pruebas en <AppRouter/>', () => { 

    test('Debe mostrar el Login si no está autenticado', () => { 

        const contexValue={
            authState:
            {logged:false},
        }

        render(
        <MemoryRouter initialEntries={['/marvel']}>   
            <AuthContext.Provider value={contexValue}>
               <Routes>
                    <Route path="/marvel" element={<PublicRoute/>}/>
                </Routes>
                
            </AuthContext.Provider>
        </MemoryRouter>

        );
        expect(screen.getByRole("heading",{level: 1}).innerHTML).toBe('Login');
    })

    test('Debe mostrar el componente de marvel si está autenticado', () => { 

        const contexValue={
            authState:
            {logged:true},
        }

        render(
        <MemoryRouter initialEntries={['/marvel']}>   
            <AuthContext.Provider value={contexValue}>
               <Routes>
                    <Route path="/marvel" element={<PrivateRoute/>}/>
                    <Route path="/login" element={<h1>Entro login</h1>}/>
                </Routes>
               
            </AuthContext.Provider>
        </MemoryRouter>
        );
        screen.debug();
        expect(screen.getByRole("button").innerHTML).toBe('Logout');
    })

 })