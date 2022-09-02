const txt='Python es el mejor lenguaje de programacion 2022'
// const texto='152342343 dsfsdfsdfs'

const txtReplaced=txt.replace(/\d/g,"$")
console.log(txtReplaced)

let patron=new RegExp(/\d/)

// console.log(patron.test(texto))



const user="Steven"
const patronUser=/^[a-zA-Z0-9-]/

console.log(patronUser.test(user))