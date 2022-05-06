const movies = require('./script')

for (let i = 0; i < movies.length; i++) {
    const element = movies[i];
    console.log('\n','-------------------------Filme nº' +
    (i + 1) + '-------------------------','\n')
   
    console.log(`Título: ${element.title}\n
    Descrição: ${element.description}\n`)

}