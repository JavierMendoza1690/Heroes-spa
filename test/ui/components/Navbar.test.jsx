import { fireEvent, render, screen } from "@testing-library/react"
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { AuthContext } from "../../../src/auth";
import { PrivateRoute } from "../../../src/router/PrivateRoute";
import { PublicRoute } from "../../../src/router/PublicRoute";
import { Navbar } from "../../../src/ui";

describe('Pruebas en el <Navbar/>', () => { 

    test('Debe Mostrar el nombre del usuario si está logeado', () => {

        const contexValue = {
            authState:{
                logged:true,
                user:{
                    name: 'Strider',
                    id: 'ABC',
                }
            }
        }
        
        render(
            <MemoryRouter initialEntries={["/login"]}>
                 <AuthContext.Provider value={contexValue}>

                    <Routes>

                        {/* Public Route */}
                        <Route path="/login" element={<PublicRoute />} />

                        {/* Private Route */}
                        <Route path="/*"
                        element={<PrivateRoute />}
                        //definiendo Hijos de Ruta Privada (tal conmo en el APPRouter)
                        children={<Route path="dc" element={<h1>Entro dc</h1>} />}
                        />

                    </Routes>

                 </AuthContext.Provider>
            </MemoryRouter>
            
        );
        // screen.debug();
            const span = screen.getByLabelText('span');
           
            expect(span.innerHTML).toBe('Strider');

     })

     test('Debe desloguearse y llamar a login cuando se hace click en logout', () => {

        const contexValue = {
            authState:{
                logged:true,
                user:{
                    name: 'Strider',
                    id: 'ABC',
                }
            }
        }
        
        render(
            <MemoryRouter initialEntries={["/login"]}>
                 <AuthContext.Provider value={contexValue}>

                    <Routes>

                        {/* Public Route */}
                        <Route path="/login" element={<PublicRoute />} />

                        {/* Private Route */}
                        <Route path="/*"
                        element={<PrivateRoute />}
                        //definiendo Hijos de Ruta Privada (tal conmo en el APPRouter)
                        children={<Route path="dc" element={<h1>Entro dc</h1>} />}
                        />

                    </Routes>

                 </AuthContext.Provider>
            </MemoryRouter>
            
        );
        
        const btn = screen.getByRole("button");
        // fireEvent.click(btn);
       


     })

 })