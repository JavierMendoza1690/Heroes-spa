import { render, screen } from "@testing-library/react"
import { MemoryRouter, Route, Routes, useNavigate } from "react-router-dom"
import { AuthContext, LoginPage } from "../../src/auth"
import { PublicRoute } from "../../src/router/PublicRoute"



describe('pruebas en PublicRoute', () => { 

 

    test('Si no está autenticado debe mostrar LoginPage', () => { 

        const contexValue = {
            authState:
                {logged:false},
        }

       const {logged} = contexValue.authState;
        render ( 
            <MemoryRouter initialEntries={['/']}> 
                <AuthContext.Provider value={contexValue}>

                <Routes>
                    <Route index element = {<PublicRoute/>}  />
                    <Route path="/marvel" element ={<h1>Entro a marvel</h1>} />
                </Routes> 

            </AuthContext.Provider>
            </MemoryRouter>
        );

        expect(screen.getByRole("heading",{level: 1}).innerHTML).toBe('Login');
    })

    test('Debe navegar si está autenticado', () => { 

        const contexValue = {
            authState:{
                logged:true,
                user:{
                    name: 'Strider',
                    id: 'ABC',
                }
                },
        }
        
       const {logged} = contexValue.authState;
        render ( 
            <MemoryRouter initialEntries={['/login']}> 
                <AuthContext.Provider value={contexValue}>

                <Routes>
                    <Route path="/login"
                    element = {<PublicRoute />}  />
                    
                    <Route 
                        path="/marvel" 
                        element = { <h1>Entrando a Marvel</h1> }  
                    />
                </Routes> 

            </AuthContext.Provider>
            </MemoryRouter>
        );
      
        // expect(screen.getByText('Entrando a Marvel')).toBeTruthy();
        expect(screen.getByRole('heading', {level: 1}).innerHTML).toBe('Entrando a Marvel');

     })
 })