import { render, screen } from "@testing-library/react"
import { MemoryRouter, Route, Routes} from "react-router-dom"
import { AuthContext, LoginPage } from "../../src/auth"
import { PrivateRoute } from "../../src/router/PrivateRoute"


describe('pruebas en PrivateRouter', () => { 

Storage.prototype.setItem = jest.fn();

    test('Si está autenticado debe mostrar LoginPage', () => { 

        const contexValue = {
            authState:
                {logged:false},
        }

       const {logged} = contexValue.authState;
        render ( 
            <MemoryRouter initialEntries={['/']}> 
                <AuthContext.Provider value={contexValue}>

                <Routes>
                    <Route index element = {<PrivateRoute />}  />
                    <Route path="/login" element={<h1>Entro a login</h1>} /> 
                </Routes> 

            </AuthContext.Provider>
            </MemoryRouter>
        );
        // screen.debug();
            expect(screen.getByRole('heading',{level:1}).innerHTML).toBe('Entro a login')
            expect( localStorage.setItem ).toHaveBeenCalledWith("lastPath","/");
    })

    test('Debe navegar si no está autenticado', () => { 

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
            <MemoryRouter initialEntries={['/']}> 
                <AuthContext.Provider value={contexValue}>

                <Routes>
                    <Route path="/*" element= {<PrivateRoute />}  />
                    <Route path="/login" element={<h1>Entro a login</h1>} /> 
                </Routes> 

            </AuthContext.Provider>
            </MemoryRouter>
        );
        expect(screen.getByRole('button').innerHTML).toBe('Logout');
        

     })
 })