const skills=["HTML","CSS","JavaScript","React"]

let ul=document.querySelector("ul");

// ul,innerHTML = 
/* <li>HTML</li> */
/* <li>CSS</li> */
/* <li>JavaScript</li> */
/* <li>React</li> ; */

let skillsConcat="";

for (let i = 0; i < skills.length; i++) {
    skillsConcat = skillsConcat + `<li>${skills[i].toUpperCase()}</li>`;
}


ul.innerHTML=skillsConcat
