const json=`{"nombre":"Santiago Padierna","edad":26, "cedula":123, "habilidades":["HTML","CSS", "JS"]}`

const objJSON=JSON.parse(json)
console.table(objJSON)

objJSON.edad > 18 ? console.log("Edan mayor") : console.log("Hola");