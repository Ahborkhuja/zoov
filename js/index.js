const bur_open = document.querySelector('.navbar__sub_list')
const btn= document.querySelector('.site_header__burger');
const body = document.querySelector('body');
const site_head = document.querySelector('.site_header');
btn.addEventListener('click', ()=>{
  bur_open.classList.toggle('open');
  body.classList.toggle('overflow');
  site_head.classList.toggle('bgcol');
  btn.classList.toggle('exit');
});