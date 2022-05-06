const pokedex = require('./script')


for (let i = 0; i < pokedex.length; i++) {
    let pokemon = pokedex[i]
    console.log('\n','-------------------------------Pokemon nº ' 
    + (i + 1) + '-------------------------------','\n')

    console.log(`Nome do pokemon: ${pokemon.nome}\n
    Descrição: ${pokemon.description}\n`)

    for (let i = 0; i < pokemon.types.length; i++) {
        const element = pokemon.types[i]

        console.log('Tipo: ' + element)
    }


}