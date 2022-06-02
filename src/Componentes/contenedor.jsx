import React from 'react'
import './contenedor.css'
import { useGetPokemones } from '../hooks/useGetPokemones'
import Pokeitem from './pokeItem';

export const Contenedor = ({valorBusqueda}) => {
  const {pokemones, cargando} = useGetPokemones(valorBusqueda);
  return (
        <>
            {cargando && <p className='animate__animated animate__flash'>Cargando...</p>}

            <div className='card-grid animate__animated animate__bounceInUp contenedor'>
                {
                  <Pokeitem 
                    key={pokemones.id}
                    title = {pokemones.name}
                    url = {pokemones.url}
                  />
                    // pokemones.map((pokemon) =>( 
                    //     <Pokeitem
                    //     key = {pokemon.id}
                    //     {... pokemon}/>
                    // ))
                }
            </div>
        </>
  )
}

