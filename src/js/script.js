const lista=document.querySelectorAll(".item");
const proximo=document.getElementById("next");
const retorno=document.getElementById("prev");



let count = lista.length // 3 ou mais
let active = 0 //0, 1, 2

proximo.onclick = () => {
    let activeOld = document.querySelector(".active")
    activeOld.classList.remove("active")

    active = active >= count -1 ? 0 : active + 1
    lista[active].classList.add("active")
}
retorno.onclick = () =>{
    let activeOld = document.querySelector(".active")
    activeOld.classList.remove("active")

    active = active <= 0 ? count -1 : active - 1
    lista[active].classList.add("active")
}