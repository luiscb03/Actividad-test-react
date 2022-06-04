import '@testing-library/jest-dom';
import {shallow} from 'enzyme';
import Contenedor from '../componentes/contenedor'
import { useGetPokemones } from '../hooks/useGetPokemones';
jest.mock('../hooks/useGetPokemones')

describe('Pruebas en <Contenedor/>',() => {

    
    test('debe mostrar el pokemon al cargar el hook', () =>{

        const pokemon = {
                nombre: 'pikachu',
                url: 'https://pikachu/imagen.jpg'
        }
    
        useGetPokemones.mockReturnValue({
            gifs: pokemon,
            cargando: false
        })
    
        const valorBusqueda = 'ivysaur';
        const wrapper = shallow( <Contenedor valorBusqueda={valorBusqueda}/>);

        expect(wrapper.find('p').exists()).toBe(false)
    })

    test('debe mostrar cargando', () =>{

        useGetPokemones.mockReturnValue({
            pokemon: [],
            cargando: true
        })
    
        const valorBusqueda = 'ivysaur';
        const wrapper = shallow( <Contenedor valorBusqueda={valorBusqueda}/>);

        expect(wrapper.find('p').exists()).toBe(true)

    })
   
})