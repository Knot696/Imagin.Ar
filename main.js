const nav= document.querySelector('.nav');
const desplegable= document.querySelector('nav');

nav.addEventListener('click', ()=>{
  nav.classList.toggle('open');
  desplegable.classList.toggle('desplegado');
})
