const show = document.querySelector(".js-showWidth span");
window.addEventListener("resize",()=>{
  console.log(window.innerWidth)
  show.textContent= ` ${window.innerWidth}`
})