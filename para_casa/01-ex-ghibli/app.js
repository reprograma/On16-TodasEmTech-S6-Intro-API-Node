/*3) Apresente os dados dos JS no console
    - Exercício Ghibli: o título de cada filme e a descrição de cada filme

*/

const filmes = require('./script')

 for (let i = 0; i < filmes.length; i++) {
     const element = filmes[i]
     console.log(`Título: ${element.title} \nDescrição: ${element.description}\n`)

 }