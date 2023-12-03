const hamburguer =document.querySelector("#hamburguer");
const close = document.querySelector("#close");
const menu =  document.querySelector("#menu");
hamburguer.addEventListener('click',()=>{
    menu.style.display = 'flex';
    close.style.display = 'block';
});
close.addEventListener('click',()=>{
    menu.style.display = 'none';
    close.style.display = 'none';
})
   