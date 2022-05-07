const obj = require('./filmes')

for (let i = 0; i < obj.length; i++) {
    const filmes = obj[i]
    console.log('________________________________________')
    console.log('Título: ' + filmes.Title)
    console.log('Plot: ' + filmes.Plot)
    
    
}