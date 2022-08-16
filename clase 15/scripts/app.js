const usuario={
    nombreCompleto: "santiago padierna",
    edad: 20,
    cedula: 123,
    habilidades: ["HTML", "CSS", "JavaScript"]
}

console.table(usuario)

if (usuario.edad > 18){
    console.log("Es mayor de edad y hermoso");
}

const usuarioJSON=JSON.stringify(usuario)
console.log(usuarioJSON)