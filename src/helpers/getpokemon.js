// export const getPokemon = async (valorBusqueda) => {
//     const url = `https://pokeapi.co/api/v2/pokemon/${valorBusqueda}`;
//     const resp = await fetch(url);
//     const {data} = await resp.json();
    
//     const pokemones = data.map( () => {
//         return {
//             id: data.id,
//             name: data.name,
//             url: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`
//         }
//     })

//     return pokemones;
// }

export const getPokemon = (valorBusqueda) => {
    let pokemones = {
        id: 0,
        name: "",
        url: ''
    };
    const url = `https://pokeapi.co/api/v2/pokemon/${valorBusqueda}`;
    fetch(url)
    .then((resp) => resp.json())
    .then((data) => (
        pokemones.id = data.id,
        pokemones.name = data.name,
        pokemones.url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`
    ))
    
    return pokemones;
}