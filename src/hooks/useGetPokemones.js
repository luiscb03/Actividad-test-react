import {useEffect, useState} from 'react'
import { getPokemon } from '../helpers/getpokemon'

export const useGetPokemones = (valorBusqueda) => {

    const [estado, setEstado] = useState({
        pokemones: [],
        cargando: true
    })

    useEffect(() =>{
        setTimeout(() =>{
            let pokemones = getPokemon(valorBusqueda)
            setEstado({
                pokemones: pokemones,
                cargando: false
            })
        }, 20)
    }, [valorBusqueda])

    return estado;
  
}