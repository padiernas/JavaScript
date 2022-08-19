//Funcion anonima o sincronica
const saludar=(nombrePersona)=>{
    console.log(`Hola ${nombrePersona}`)
}

const pedirNombre=(callBack)=>{
    let nombre=prompt("Ingrese nombre")
    callBack(nombre)
}

pedirNombre(saludar)
