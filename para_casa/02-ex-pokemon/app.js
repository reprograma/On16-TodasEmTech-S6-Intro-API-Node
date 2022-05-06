/*3) Apresente os dados dos JS no console
- Exercício Pokemón: o nome, descrição e tipo (separadamente) de cada pokemón*/

const pokemon = require('./script')

for (let i = 0; i < pokemon.length; i++) {
    const element = pokemon[i]
    console.log(`Nome: ${element.name} \nDescrição: ${element.description} \nTipo: ${element.types}\n`)

}
