const obtenerNumero=()=>{
    let num=prompt("Ingrese un número");
    try{
        if(num== "")throw "Esta vacio"
        if(isNaN(num)) throw "No es un número"
        num=Number(num)
        if (num <5) throw "El numero es muy pequeño"
        if (num >10) throw "El numero es muy grande"
    }catch(error){
        console.log(error)
    }
}
obtenerNumero()

const usuarios= ['Steven','Carlos','juan',];
console.time('ciclo basico')
for (let i = 0; i < usuarios.length; i++){
    console.log(usuarios[i])
}
console.timeEnd('Ciclo básico')

console.info(usuarios)

console.assert(4>3, '4 es mayor que 3')
console.assert(3>4, '3 es menor que 4')