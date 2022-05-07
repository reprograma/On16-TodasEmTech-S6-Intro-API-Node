const cores = require('./colors-rgb')

cores.forEach ((rgbs)=>{
    Object.keys (rgbs).forEach(cor => {
        const rgb = rgbs[cor]
        console.log(`${cor} - rgb(${rgb.join(" , ")})`)
    })

})