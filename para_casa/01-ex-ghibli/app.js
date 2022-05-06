const filmes = require ('./script')

for (let index = 0; index < filmes.length; index++) {
   const element = filmes[index]
 console.log('Filme Nº' + (index+1) )
 console.log(`Título: ${element.title}\nDescrição: ${element.description}\n`)

}
