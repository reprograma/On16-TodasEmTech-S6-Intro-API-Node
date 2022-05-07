const data = require('./estados-cidades')
const estadosCidades = require('./estados-cidades')

data.forEach(pais =>{
    pais.estados.forEach(estados =>{
        const {sigla, nome, cidades} = estados
        console.log('____________________________________________')
        console.log('Sigla: ' + sigla)
        console.log('Nome do estado: ' + nome)
        cidades.forEach(cidades =>{
            console.log('Cidade: ' + cidades)
        })
    })
})
