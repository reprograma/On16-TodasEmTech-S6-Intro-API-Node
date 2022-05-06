const filmes = require("./script")

for (let index = 0; index < filmes.length; index++) {
    const element = filmes[index];
    console.log("Filme n." + (index + 1))
    console.log(element)
    
}