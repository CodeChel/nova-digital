import "./css/main.css";
import "./css/normalize.css";



function requireAll(r) { r.keys().forEach(r); } //import files
requireAll(require.context('./img/', true));
requireAll(require.context('./videos/', true));


const SmoothScroll = require('smoothscroll-for-websites');
SmoothScroll({ stepSize: 30, arrowScroll: 20 });



document.body.onload = ()=>{
  setTimeout(()=>{
    let preloader = document.getElementById('preloader');
    if(!preloader.classList.contains('vislually-hidden')){
      preloader.classList.add('visually-hidden');
    }
  }, 500)
}

const burger = document.querySelector('.burger-menu');
const header = document.querySelector('header');
const navMenu = document.querySelector('.nav-menu');
const contacts = document.querySelector('.contacts');
const logo = document.querySelector('.logo');


window.addEventListener('resize', () => {   // remove classes when width > 840px
  if (document.documentElement.clientWidth > 840) {
    header.classList.remove('visually-hidden');
    burger.firstElementChild.classList.remove('burger-rotate-1');
    burger.lastElementChild.classList.remove('burger-rotate-2');
    cursor.firstElementChild.classList.remove('cursor-black');
    header.classList.remove('header-full');
    navMenu.classList.remove('flex-show');
    logo.classList.remove('logo-black');
    contacts.classList.add('visually-hidden');
    timerId = 0;
    document.body.style.overflow = '';

  }
});


const brief = document.querySelector('.brief-form');
if (brief) {
  brief.addEventListener('click', formButtonHandler);
  brief.addEventListener('keydown', () => {
    if (event.keyCode == '32') event.target.nextElementSibling.click(); // if checked with keyboard-space
  });

  // input-text focus/blur
  const briefText = document.querySelectorAll('.brief-text');
  for (let index = 0; index < briefText.length; index++) {
    const item = briefText[index];
    item.addEventListener('focus', inputFocus);
    item.addEventListener('blur', inputBlur);
  }
}
function formButtonHandler(event) { //check radio and checkbox
  const target = event.target;
  if (target.tagName == 'LABEL' && !target.classList.contains('brief-text-in')) {
    setTimeout(() => {

      if (target.previousElementSibling.checked) {
        target.classList.add('btn-brief-marked');
        const btnMarked = document.querySelectorAll('.btn-brief-marked');
        btnMarked.forEach((btn) => {
          if (!btn.previousElementSibling.checked) {
            btn.classList.remove('btn-brief-marked');
          }
        })


      }
      else target.classList.remove('btn-brief-marked')
    }, 50)
  }
}

function inputFocus() {
  this.nextElementSibling.classList.add('brief-text-over');
  this.nextElementSibling.classList.remove('brief-text-in');
  this.classList.add('brief-text-focus');
}
function inputBlur() {
  if (!this.value) {
    this.nextElementSibling.classList.remove('brief-text-over');
    this.nextElementSibling.classList.add('brief-text-in');
  }
  this.classList.remove('brief-text-focus');
}

//mouse-custom move
const cursor = document.querySelector('.cursor');



document.addEventListener('mousemove', e => {

  cursor.classList.remove('visually-hidden');
  cursor.setAttribute("style", "top: " + (e.pageY - 2)  + "px; left: " + (e.pageX - 2)  + "px;");
 
})


document.addEventListener('mouseleave', () => {
  cursor.classList.add('visually-hidden');
})


// mouse-custom focus


let elements = document.querySelectorAll('a, .btn-brief,input[type=submit],.shot-container img, .cross-close, #widgethelp_uniquecssid, .burger-menu'),
  cursorFollow = document.querySelector('.cursor-follow'),
  index, item;

for (index = 0; index < elements.length; index++) {
  item = elements[index];
  item.addEventListener('mouseenter', mouseenterHandler);
  item.addEventListener('mouseleave', mouseleaveClickHandler);

}

function mouseenterHandler() {
  cursorFollow.classList.add('cursor-focus');
}
function mouseleaveClickHandler() {
  cursorFollow.classList.remove('cursor-focus');
}

document.addEventListener('click', () => { //mouse-custon click
  cursorFollow.classList.add("expand");

  setTimeout(() => {
    cursorFollow.classList.remove("expand");
  }, 500)
})

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

//shots interactive
let timerPopUp = 0;
const crossClose = document.querySelector('.cross-close');
const shotContainer = document.querySelector('.shot-container');
const popUp = document.querySelector('.popup-container');
if (shotContainer) {
  shotContainer.addEventListener('click', () => {
    const target = event.target;
    if (target.tagName == 'IMG') {
      popUp.classList.add('layer-shot');
      const newIMG = target.cloneNode('true');
      newIMG.classList.add('shot-position');
      newIMG.classList.add('shot-position-open');
      popUp.appendChild(newIMG);
      crossClose.classList.remove('visually-hidden');

      document.addEventListener('keydown', () => {        //space-click
        if (event.keyCode == 27) {
          const imgPopUp = popUp.querySelector('img')

          popUp.querySelector('img').classList.add('shot-position-back');

          timerPopUp = setTimeout(() => {
            popUp.classList.remove('layer-shot');
            popUp.removeChild(imgPopUp);
            crossClose.classList.add('visually-hidden'),
              timerPopUp = 0
          },
            470)
        }
      })
    }
  })
}


if (popUp) {
  popUp.addEventListener('click', () => {
    if (timerPopUp == 0) {
      if (event.target.tagName != 'IMG') {
        let imgPopUp = popUp.querySelector('img')

        popUp.querySelector('img').classList.add('shot-position-back');

        timerPopUp = setTimeout(() => {
          popUp.classList.remove('layer-shot');
          popUp.removeChild(imgPopUp);
          crossClose.classList.add('visually-hidden'),
            timerPopUp = 0
        },
          470)
      }
    }
  })
}


// let img = document.querySelectorAll('img');


// for (let index = 0; index < img.length; index++) {
//   item = img[index];
//   item.addEventListener('keydown', spaceHunlder);
// }

// function spaceHunlder() { // availability

//   if (event.keyCode == '32') {
//     event.preventDefault();
//     this.click();
//   }
// }
