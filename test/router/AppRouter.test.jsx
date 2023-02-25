import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { AuthContext, LoginPage } from "../../src/auth";
import { PrivateRoute } from "../../src/router/PrivateRoute";
import { PublicRoute } from "../../src/router/PublicRoute";

describe("Pruebas en <AppRouter/>", () => {
  test("Debe mostrar el Login si no está autenticado", () => {
    const contexValue = {
      authState: { logged: false },
    };

    render(
      <MemoryRouter initialEntries={["/marvel"]}>
        <AuthContext.Provider value={contexValue}>

          <Routes>
            <Route path="/login" element={<PublicRoute />} />

            <Route path="/*" element={<PublicRoute />} />
          </Routes>

        </AuthContext.Provider>
      </MemoryRouter>
    );
    // screen.debug();
    expect(screen.getByRole("heading", { level: 1 }).innerHTML).toBe("Login");
  });

  test("Debe mostrar el componente de marvel si está autenticado", () => {

    const contexValue = {
      authState: { logged: true },
    };

    render(
      <MemoryRouter initialEntries={["/marvel"]}>
        <AuthContext.Provider value={contexValue}>

          <Routes>
            <Route path="/login" element={<PublicRoute />} />

            <Route
              path="/*"
              element={<PrivateRoute />}
              //definiendo Hijos de Ruta Privada (tal conmo en el APPRouter)
              children={<Route path="marvel" element={<h1>Entro Marvel</h1>} />}
            />
          </Routes>
        </AuthContext.Provider>
      </MemoryRouter>
    );
    // screen.debug();
    expect(screen.getByRole("heading", { level: 1 }).innerHTML).toBe(
      "Entro Marvel"
    );
  });

  test("Debe mostrar el componente de dc si está autenticado", () => {
   
    const contexValue = {
      authState: { logged: true },
    };

    render(
      <MemoryRouter initialEntries={["/dc"]}>
        <AuthContext.Provider value={contexValue}>

          <Routes>
            
            <Route path="/login" element={<PublicRoute />} />
           
            <Route
              path="/*"
              element={<PrivateRoute />}
               //definiendo Hijos de Ruta Privada (tal conmo en el APPRouter)
              children={<Route path="dc" element={<h1>Entro dc</h1>} />}
            />

          </Routes>

        </AuthContext.Provider>
      </MemoryRouter>
    );
    // screen.debug();
    expect(screen.getByRole("heading", { level: 1 }).innerHTML).toBe(
      "Entro dc"
    );
  });
});
