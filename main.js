const nav= document.querySelector('button');
const desplegable= document.querySelector('nav');

nav.addEventListener('click', ()=>{
  nav.classList.toggle('open');
  desplegable.classList.toggle('desplegado');
})
