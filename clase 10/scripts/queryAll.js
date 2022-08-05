let todosTitulos=document.querySelectorAll('.titulo')

// console.log(todosTitulos)

// console.log(todosTitulos[1])
 for (let i = 0; i< todosTitulos.length; i++) {
     if(i%2===0){
         console.log(todosTitulos[i])
     }
 }
 console.warn('forEach')
 todosTitulos.forEach(element => {
     console.log(element)
 })