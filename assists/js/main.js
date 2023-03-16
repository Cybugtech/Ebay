let hambicon = document.querySelector(".hamb_icon")
let nav = document.querySelector(".nav")

hambicon.addEventListener("click",()=>{
   if (nav.style.display !== `${"block"}`) {
       nav.style.display = `${"block"}`
       hambicon.classList.replace("fa-bars","fa-xmark")
       nav.classList.add("show")
   } else {
    nav.style.display = `${"none"}`
    nav.classList.remove("show")
    hambicon.classList.replace("fa-xmark","fa-bars")
   }
})