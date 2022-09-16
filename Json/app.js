const persona ={
    nombre:"Cristiano",
    apellido:"Ronaldo Nazario",
    edad:37,
    habilidades:["pichar","saltar","regate","esconderse"],
    equipo:"MU",
};

const jsonPersona=JSON.stringify(persona)
console.log(jsonPersona)

const objetopersona=JSON.parse(persona)
console.log(objetopersona)