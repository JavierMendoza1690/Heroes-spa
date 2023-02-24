import { authReducer, types } from "../../../src/auth";
types;

describe("Pruebas en authReducer", () => {
  const state = {
    logged: false,
  };

  test("debe de retornar el estado por defecto", () => {
    const test = authReducer(state);
    expect(test).toEqual(state);
  });

  test("debe de activar la opción de login y cambiar logged a true", () => {
    

    const action = {
      type: types.login,
      payload: { id: "ABC", name: "Javier" },
    };

    const test = authReducer(state, action);

    expect(test).toEqual({
      logged: true,
      user: { id: "ABC", name: "Javier" },
    });
  });

  test("debe de activar la opción de logout y cambiar logged a false", () => {

   
    const action = {
      type: types.logout,
      payload: { id: "ABC", name: "Javier" },
    };
  
    const test = authReducer(state, action);
  
    expect(test).toEqual({
      logged: false,
      user: {},
    });
  });
});
