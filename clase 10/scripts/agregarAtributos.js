let titulos=document.querySelectorAll('h1')

// titulos[1].className="titulo"

for (let index = 0; index < titulos.length; index++) {
 titulos[index].className="titulo"; 
}

titulos[1].id="titulo1"
titulos[2].id="titulo2"

console.log(titulos)

let imagen=document.getElementById("imagen")
imagen.setAttribute("src","https://storage.googleapis.com/support-kms-prod/ZAl1gIwyUsvfwxoW9ns47iJFioHXODBbIkrK")

let enlace=document.querySelector("a")
enlace.setAttribute("href", "https://www.google.com/?&bih=789&biw=1423&hl=es")
