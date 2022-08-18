// console.log(sessionStorage)

// sessionStorage.setItem("id", 123)
// console.log(sessionStorage.getItem("id"))

// console.log(localStorage)

const usuario={
    nombre:"Santiago Padierna",
    edad:20,
    correo:"padierna.saurez@gmail.com"
}

// const jsonUsuario=JSON.stringify(usuario)
const jsonUsuario=JSON.stringify(usuario,undefined,4)
localStorage.setItem(usuario.correo,jsonUsuario)

console.log(localStorage.getItem(usuario.correo))