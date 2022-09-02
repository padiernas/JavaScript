const persona2={
    nombre:"Steven Zuluaga",
    edad:26,
    genero:"Indefinido",
    ciudad:"Medellin"
}

const persona1={
    nombre:"Yinier",
    edad:16,
    genero:"Masculino",
    ciudad:"Medellín",
    cedula:666
}

class Persona{
    constructor(nombre,ciudad,edad,genero){
        this.nombre = nombre;
        this.ciudad = ciudad;
        this.edad = edad;
        this.enero = genero; 
    }
    caminar(){
        console.log(`${this.nombre} esta caminando `)
    }
    get obtenerEdad(){
        return this.edad
    }
    set establecerNombre(nombre){

    }
}

const persona3 = new Persona ("Santiago Padierna", "Medellín",20,"Masculino")

console.log(persona3.obtenerEdad)
console.log(persona3.establecerNombre = "cuquimbo")