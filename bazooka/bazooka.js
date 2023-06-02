let cont = document.querySelector(".container")

let logosi = document.querySelector(".logosi")
let loco = document.querySelector(".loco")
let bacloco = document.querySelector(".bacloco")
let bac = document.querySelector(".bac2")
let container2 = document.querySelector(".container2")
let screen = document.querySelector(".screen")

window.onload = ()=>{
screen.style.display="flex"
  cont.style.display="none"
  logosi.style.display="flex"
}

//screen splash
setTimeout(()=>{
  
  cont.style.display="inline"
  logosi.style.display="none"
  
},6000)

setTimeout(()=>{
  bac.style.display="flex"
  bac.classList.add("ba")
  screen.style.display="none"
},5900)
setTimeout(()=>{
  bac.style.display="none"
  
},7100)


// login photo
loco.onclick = ()=>{
  if(loco.hasAttribute("id") === true){
    bacloco.style.display="block"
    loco.removeAttribute("id")
  }
  else{
    bacloco.style.display="none"
    loco.id="loco"
  }
}


