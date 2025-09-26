const navs=document.querySelector('.navbar');
const Menu=document.querySelector('#menus');

Menu.addEventListener('click',()=>
{
    navs.classList.toggle('active');
    Menu.classList.toggle('bx-x')
});