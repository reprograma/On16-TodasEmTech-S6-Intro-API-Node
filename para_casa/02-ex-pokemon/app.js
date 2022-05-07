const data = require('./script')

for (let i = 0; i < data.length; i++) {
    let pokemon = data[i]
    console.log('______________________________________________________')
    console.log('Pokemon ' + (i+1))
    console.log('Nome: ' + pokemon.name)
    console.log('Descrição: ' + pokemon.description)
    console.log('Tipo: ' + pokemon.types)
}