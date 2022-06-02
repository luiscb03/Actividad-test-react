import {useEffect, useState} from 'react'
import { getPokemon } from '../helpers/getpokemon'

export const useGetPokemones = (valorBusqueda) => {

    const [estado, setEstado] = useState({
        pokemones: [],
        cargando: true
    })

    useEffect(()=>{
        setTimeout(()=>
            getPokemon(valorBusqueda)
            .then(pokemones =>{
                setEstado({
                    pokemones: pokemones,
                    cargando: false
                });
            }), 1000)
    },[valorBusqueda])

    return estado;
  
}