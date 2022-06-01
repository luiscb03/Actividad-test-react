import './App.css';
import logo from './logo.png'
import { Formulario } from './Componentes/form';

function App() {
  return (
    <div className="App">
        <img src={logo} alt='poke' className='poke'/>
        <hr />
        <Formulario/>
    </div>
  );
}

export default App;
