let mascota={
    nombre:"ayudante Santa",
    raza:"Galgo",
    color:"cafe",
    hambriento:true,
    ladrando:function(nombre,color){
        this.nombre=nombre
        this.color=color
        return `El ${this.nombre} esta ladrando`
    }
}

console.log(mascota)
console.log(`${mascota.color} ${mascota.nombre}`)

console.log(mascota.ladrando("Firulais","gris"))
console.log(mascota)

let mascotas=[
    {nombre:"roki", color:"cafe"},
    {nombre:"pioluin", color:"amarillo"}
]
