import "./css/main.css";
import "./css/normalize.css";


function requireAll(r) { r.keys().forEach(r); } //import files
requireAll(require.context('./img/', true));
requireAll(require.context('./videos/', true));


const SmoothScroll = require('smoothscroll-for-websites');
SmoothScroll({ stepSize: 20, arrowScroll: 20 });



const burger = document.querySelector('.burger-menu');
const header = document.querySelector('header');
const navMenu = document.querySelector('.nav-menu');
const siteLang = document.querySelector('.site-lang')
let timerId = 0; 

burger.addEventListener('click', () => { // humburger-menu open/close

  if (timerId == 0) {

    burger.lastElementChild.classList.toggle('visually-hidden');
    burger.firstElementChild.classList.toggle('visually-hidden');
    if (navMenu.classList.contains('flex-show')) {
      navMenu.classList.add('flex-hide');
      navMenu.classList.remove('flex-show');
      siteLang.classList.add('flex-hide');
      siteLang.classList.remove('flex-show');


      timerId = setTimeout(() => { //remove classes after 500ms
        siteLang.classList.remove('flex-hide');
        navMenu.classList.remove('flex-hide');
        header.classList.remove('header-full');
        document.body.style.overflow = '';
        timerId = 0;

      },

        500);
    }
    else {
      document.body.style.overflow = 'hidden';
      siteLang.classList.add('flex-show');
      navMenu.classList.add('flex-show');
      header.classList.toggle('header-full');
    }


    burger.firstElementChild.nextElementSibling.classList.toggle('burger-rotate-1'); //rotate burger-lines
    burger.lastElementChild.previousElementSibling.classList.toggle('burger-rotate-2');

  }
})


window.addEventListener('resize', () => {   // remove classes when width > 840px
  if (document.documentElement.clientWidth > 840) {
    header.classList.remove('visually-hidden');
    burger.firstElementChild.nextElementSibling.classList.remove('burger-rotate-1');
    burger.lastElementChild.previousElementSibling.classList.remove('burger-rotate-2');

    burger.lastElementChild.classList.remove('visually-hidden');
    burger.firstElementChild.classList.remove('visually-hidden');
    header.classList.remove('header-full');
    navMenu.classList.remove('flex-show');
    siteLang.classList.remove('flex-show');
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
  cursor.setAttribute("style", "top: " + (e.pageY) + "px; left: " + (e.pageX) + "px;")
})


document.addEventListener('mouseleave', () => {
  cursor.classList.add('visually-hidden');
})

// mouse-custom focus


let elements = document.querySelectorAll('a, .btn-brief,input[type=submit],.shot-container img, .cross-close, #widgethelp_uniquecssid'),
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
