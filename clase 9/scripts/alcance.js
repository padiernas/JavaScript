let num=1;
console.log(num)

const saludar=()=>{
    let num2
    console.log(num*num2)
}

saludar()
// console.log(num2) esta variable no se podria identificar porque solo se encuentra existente dentro de una funcion

const validarEdad=()=>{
    let edad=19;
    if (edad>18) {
        let mensaje="wakanda for ever"
        console.log("Es mayor de edad")
        console.log(mensaje)
    }else{
        console.log(mensaje)
        console.log("estas sardino")
    }
}
