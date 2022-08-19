const pedirNombre= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let nombre=prompt("Ingrese nombre")
        if (nombre.length > 0){
            resolve(nombre)
        }else{
            reject("Ingrese bien el nombre, fundillero")
        }
    },2000);
})

pedirNombre.then((result)=>{
    console.log(result)
})
.catch(err=>console.log(err))