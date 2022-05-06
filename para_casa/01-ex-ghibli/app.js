const filmes = require("./script")

const mostraTituloEDescricao = () => {
  for (let i = 0; i < filmes.length; i++) {
  
    console.log(`Filme nº ${i+1}:  
    Nome: ${filmes[i].title}
    Descrição: ${filmes[i].description}
    `)
  }
  }
  
  mostraTituloEDescricao()