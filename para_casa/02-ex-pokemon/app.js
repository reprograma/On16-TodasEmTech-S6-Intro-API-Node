const pokedex =require("./script")


 for (let index = 0; index < pokedex.length; index++) {
    let pokemon = pokedex[index]
    console.log("-------------------------------------------------------")
    console.log("Especie de pokemon " + (index + 1))
    console.log("Nome do Pokemon: " + pokemon.nome)
    console.log("Descrição: " + pokemon.description)

    for (let index = 0; index < pokemon.types.length; index++) {
        const element = pokemon.types[index];
        console.log("Tipo: " + element)
    }
 }