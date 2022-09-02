const person1={
    nombre:"Steven",
    edad:26,
    genero:"Masculino",
    pais:"Colombia",
    cedula:123
}

const person2={
    nombre:"Santiago",
    edad:20,
    genero:"femenino",
    pais:"Suriname",
    cedula:321
}

console.log(person1.pais)

class persona{
    constructor(nombre, edad, genero, pais, cedula){
        this.pais = pais;
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
        this.cedula = cedula;

    }
    mostraPais(){
        console.log(this.pais)
    }

    get getCedula(){
        return this.cedula
    }
}

const person = new persona("baby flow", 21, "femenino", "Colombia", 213);

console.log(person.getCedula);
