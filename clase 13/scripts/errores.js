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