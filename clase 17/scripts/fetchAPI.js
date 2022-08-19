const name="USA"
const url=`https://restcountries.com/v3.1/name/${name}`
// const url="https://restcountries.com/v3.1/all"

// fetch(url).then(response=>response.json()).then(data=>console.log(data))

// fetch(url)
// .then((response) => response.json())
// .then((data) => console.table(data))
// .catch((err) => console.log(err))

const paisApi=async (enlace)=>{
    try {
        const response=await fetch(enlace)
        // console.log(response)
        const data=await response.json()
        console.log(`La frontera de ${name} son: ${data[0].dorders}`)
    } catch (error) {
        console.log(error)
    }
}

paisApi(url)