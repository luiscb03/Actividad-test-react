import './form.css'

export function Formulario() {
    return(
        <>
            <form>
                <p>REGISTRAR POKEMON</p>
                <input type="text" placeholder="Nombre del pokemon" id="Valorusqueda"/>
                <button type="submit">Add</button>
            </form>
        </>
    );
}