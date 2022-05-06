const data = require('./script')


for (let index = 0; index < data.length; index++) {
    let pokemon = data[index]
    console.log("-------------------------------")
    console.log("Pokemon  numero " + (index + 1))
    console.log("Nome do pokemon " + pokemon.nome)
    console.log("Descrição: " + pokemon.description)

    for (let index = 0; index < pokemon.types.length; index++) {
        const element = pokemon.types[index]

        console.log("Tipo: " + element)
    }


}

