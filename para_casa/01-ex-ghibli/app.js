const obj = require('./script')

for (let i = 0; i < obj.length; i++) {
    const filmes = obj[i]
    console.log('Filme ' + (i +1))
    console.log(`Título: ${filmes.title}\nDescrição: ${filmes.description}\n`)
}