const pokemons = require("./script")

const mostraNomeDescricaoTipo = () => {
  for (let i = 0; i < pokemons.length; i++) {
  
    console.log(`Pokemom nº ${i+1}:  
    Nome: ${pokemons[i].nome}
    Descrição: ${pokemons[i].description}
    Tipo: ${pokemons[i].types}
    `)
  }
}
  
mostraNomeDescricaoTipo()