let animal=document.querySelector("#animal")
let enviar=document.querySelector("#enviar")

let almacenamiento=document.querySelector("#almacenamiento")

let inputAnimales = []

enviar.addEventListener("click",()=>{

    inputAnimales.push(animal.value)
    const texto=document.createElement("p")
    texto.innerHTML=animal.value

    almacenamiento.appendChild(texto)
    console.log(inputAnimales)
})

