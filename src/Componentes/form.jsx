import './form.css'
import {useState} from 'react'

export const Formulario =({setCategoriasBusqueda})=>{
    const [valorBusqueda, setValorBusqueda] = useState('');

    const cambiarValorBusqueda= (e) => {
        setValorBusqueda(e.target.value);
    }

    const buscar = (e)=>{
        e.preventDefault();
        if (valorBusqueda.trim().length > 0){
          setCategoriasBusqueda(valores => [valorBusqueda, ...valores])
          setValorBusqueda('')
        }
        
    }

    return(
        <>
            <form onSubmit={buscar}>
                <p>REGISTRAR POKEMON</p>
                <input 
                    type="text" 
                    placeholder="Nombre del pokemon" 
                    id="Valorusqueda"
                    value = {valorBusqueda}
                    onChange={cambiarValorBusqueda}
                />
                <button type="submit">Add</button>
            </form>
        </>
    );
}