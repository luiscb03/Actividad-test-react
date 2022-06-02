import './App.css';
import logo from './logo.png'
import { useState } from 'react'
import { Formulario } from './Componentes/form';
import { Contenedor } from './Componentes/contenedor'

const App = ({categorias = ['pikachu']}) => {
  const [categoriasBusqueda, setCategoriasBusqueda] = useState(categorias);
  return (
    <div className="App">
        <img src={logo} alt='poke' className='poke'/>
        <hr />
        <Formulario setCategoriasBusqueda={setCategoriasBusqueda}/>
        <ol>
        {
            categoriasBusqueda.map(categoriaBusqueda => (
                <Contenedor
                    key = {categoriaBusqueda} 
                    valorBusqueda={categoriaBusqueda}
                />
            ))
        }
    </ol>
    </div>
  );
}

export default App;
