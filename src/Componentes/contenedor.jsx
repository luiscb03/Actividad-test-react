import React from 'react'
import './contenedor.css'
import { useGetPokemones } from '../hooks/useGetPokemones'
import Pokeitem from './pokeItem';
import {firebase} from '../firebase'

export const Contenedor = ({valorBusqueda}) => {
  const {pokemones, cargando} = useGetPokemones(valorBusqueda);
  const [lista, setLista] = React.useState([])

  React.useEffect(()=>{
    const obtenerDatos = async () =>{
        try{
            const db = firebase.firestore()
            const data = await db.collection('pokemones').get()
            const array = data.docs.map(item =>(
                {
                    id:item.id, ...item.data()
                }
            ))
            setLista(array)

        }catch(error){
            console.log(error)
        }
    }
    obtenerDatos()
}, [lista])


  return (
        <>
            {cargando && <p className='animate__animated animate__flash'>Cargando...</p>}

            <div className='card-grid animate__animated animate__bounceInUp contenedor'>
                {

                  <div className='card animate__animated animate__fadeIn'>
                      <p>{valorBusqueda.nombre}</p>
                      <img src={valorBusqueda.url} alt = {valorBusqueda.nombre}/>
                  </div>
                }
            </div>
        </>
  )
}

