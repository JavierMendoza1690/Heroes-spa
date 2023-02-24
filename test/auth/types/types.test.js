import { types } from "../../../src/auth"

describe('pruebas en types.js', () => { 

    test('debe de regresar los types correctos', () => { 

        expect(types).toEqual({
            login: '[Auth] Login',
            logout: '[Auth] Logout',
        })
     })
 })