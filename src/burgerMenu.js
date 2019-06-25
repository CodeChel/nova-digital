function burgerMenu () {
const burger = document.querySelector('.burger-menu');
const header = document.querySelector('header');
const navMenu = document.querySelector('.nav-menu');
const contacts = document.querySelector('.contacts');
const logo = document.querySelector('.logo');
const cursor = document.querySelector('.cursor');





let timerId = 0;

burger.addEventListener('click', () => { // humburger-menu open/close
  
  if (timerId == 0) {

    
    if (navMenu.classList.contains('flex-show')) {
      header.removeEventListener('mouseenter', addCursorBlack);
      header.removeEventListener('mouseleave', removeCursorBlack);
      document.body.removeEventListener('click', closeMenu);

      cursor.firstElementChild.classList.remove('cursor-black');
      navMenu.classList.add('flex-hide');
      navMenu.classList.remove('flex-show');
      
     

      timerId = setTimeout(() => { //remove classes after 500ms
  
        navMenu.classList.remove('flex-hide');
        header.classList.remove('header-full');
        logo.classList.remove('logo-black');
        contacts.classList.add('visually-hidden');

        timerId = 0;

      },

        500);
    }
    else {
      
      document.body.addEventListener('click', closeMenu );
      
      navMenu.classList.add('flex-show');
   
      
      

      logo.classList.add('logo-black');
      header.classList.toggle('header-full');
      contacts.classList.remove('visually-hidden');

      cursor.firstElementChild.classList.add('cursor-black');
      header.addEventListener('mouseenter', addCursorBlack);
      header.addEventListener('mouseleave', removeCursorBlack);
    }


    burger.firstElementChild.classList.toggle('burger-rotate-1'); //rotate burger-lines
    burger.lastElementChild.classList.toggle('burger-rotate-2');

  }
})
function closeMenu(e){  // if click not on header - close menu
  if(!header.contains(e.target)){
  burger.click();
}
}
function addCursorBlack() {
  cursor.firstElementChild.classList.add('cursor-black');
}
function removeCursorBlack(){
  cursor.firstElementChild.classList.remove('cursor-black');
}
}
module.exports = burgerMenu;