import React from 'react'
import { useGetPokemones } from '../hooks/useGetPokemones'
import Pokeitem from './pokeItem';

export const Contenedor = ({valorBusqueda}) => {

  const {pokemones, cargando} = useGetPokemones(valorBusqueda);
  return (

    <>
        <h3>{valorBusqueda}</h3>
        {cargando && <p className='animate__animated animate__flash'>Cargando</p>}

        <div className='card-grid animate__animated animate__bounceInUp'>
            {
                pokemones.map((pokemon) =>( 
                    <Pokeitem
                     key = {pokemon.id}
                     {... pokemon}/>

                ))
            }
        </div>
    </>
  )
}

