export const getPokemon = () =>{
    return fetch(`https://pokeapi.co/api/v2/pokemon/`, {
        method:"GET"
    })
    .then(response=> {return response.json()})
    .catch(error => console.log(error))
}