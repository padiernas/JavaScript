const contenedor = document.querySelector("#padre")

for (let index = 1; index <= 100; index++) {
    const caja = document.createElement("div");
    caja.innerHTML = index;
    caja.classList.add("caja")

    const imagen=document.createElement("img")
    imagen.classList.add("imagen")
    imagen.src="styles/sol.png"

    if (index % 2 === 0) {
        caja.classList.add("caja");
    } else {
        caja.classList.add("caja1")
    }

    contenedor.appendChild(caja)
}

