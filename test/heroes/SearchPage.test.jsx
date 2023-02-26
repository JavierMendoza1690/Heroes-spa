import { fireEvent, render, screen } from "@testing-library/react"
import { MemoryRouter, Navigate, useNavigate } from "react-router-dom";
import { SearchPage } from "../../src/heroes/pages/SearchPage";


const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', ()=>(
    {
    ...jest.requireActual('react-router-dom'),
    useNavigate: ()=> mockedUseNavigate
    }
))

describe('Pruebas en <SearchPage/> ', () => { 

    beforeEach(()=> jest.clearAllMocks());

    test('Debe mostrarse correctamente con valores por defecto', () => { 
        //haciendo snapshot
        const { container } =render(
            <MemoryRouter>
                <SearchPage />
            </MemoryRouter>
        );

        // expect( container ).toMatchSnapshot();
        // screen.debug();
     })
   
     test('Debe de mostrar a Batman y el input con el valor del queryString', () => { 
       
        render(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <SearchPage />
            </MemoryRouter>
        );

        // screen.debug();
        const input = screen.getByRole('textbox');
        expect(input.value).toBe('batman')

        const img = screen.getByRole('img');
        expect(img.src).toContain('/heroes/dc-batman.jpg')
        
     })
     
     test('Debe de mostrar un error si no encuentra el heroe', () => { 
       
        render(
            <MemoryRouter initialEntries={['/search?q=batmanxxxx']}>
                <SearchPage />
            </MemoryRouter>
        );

        // screen.debug();
        const noHero = screen.getByLabelText('no-hero');
        expect(noHero).toBeTruthy();
        
     })
    
     test('Debe de mostrar un error si no encuentra el heroe', () => { 
       
     


        render(
            <MemoryRouter>
                <SearchPage />
            </MemoryRouter>
        );
        
        const inputPrueba = screen.getByRole('textbox');
        fireEvent.change(inputPrueba,{target: {name: "searchText", value:'javier'}})
        // screen.debug();

        const form = screen.getByRole('form');
        fireEvent.submit(form);
        
        //probando que se llame navigate
        expect(mockedUseNavigate).toBeCalled();
        expect(mockedUseNavigate).toBeCalledWith('?q=javier');
        
        
     })
 })