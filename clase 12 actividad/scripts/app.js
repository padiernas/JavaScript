const box=document.querySelector(".box")

for(let i=1; i<=100; i++) {
    const element=document.createElement("div")
    element.innerHTML=i
    // element.className=("general")
    if( i%2==0) {
        element.classList.add("element")
    } else {
        element.classList.add("element1")
    }
    box.appendChild(element)
}