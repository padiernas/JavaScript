const contenedor = document.querySelector("#contenedor")

const jsonPersona = "{\"nombre\":\"Cristiano\",\"apellido\":\"Ronaldo Nazario\",\"edad\":37,\"habilidades\":[\"pichar\",\"saltar\",\"regate\",\"esconderse\"],\"equipo\":\"MU\",\"foto\":\"https://cdn-icons-png.flaticon.com/512/1120/1120389.png?w=360\"}"

const objetoPersona=JSON.parse(jsonPersona)

const crearTarjeta=(persona)=>{
    console.log(persona)
    const tarjeta=document.createElement("div")
    const imagen=document.createElement("img")

    const nombre=document.createElement("h2")
    nombre.innerHTML=persona.nombre

    const edad=document.createElement("h2")
    edad.innerText=persona.edad

    imagen.setAttribute("src",persona.foto)
    tarjeta.appendChild(imagen)
    tarjeta.appendChild(nombre)
    tarjeta.appendChild(edad)

    tarjeta.classList.add("tarjeta")
    contenedor.appendChild(tarjeta)
}

crearTarjeta(objetoPersona)