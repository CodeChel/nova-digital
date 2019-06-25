
function requireAll(r) { r.keys().forEach(r); } //import files for webpack
requireAll(require.context('./img/', true));
requireAll(require.context('./videos/', true));

import "./css/main.css";
import "./css/normalize.css";
import mouseCustom from './mouseCustom';
import popUpShot from './shotPopUp';
import briefForm from './briefForm';
import SmoothScroll from 'smoothscroll-for-websites'; // slow scroll
import burgerMenu from './burgerMenu';

SmoothScroll({ stepSize: 30, arrowScroll: 20 });

mouseCustom();      
popUpShot();
briefForm();

burgerMenu();                                           


document.body.onload = ()=>{                                //preloader
  setTimeout(()=>{
    let preloader = document.getElementById('preloader');
    if(!preloader.classList.contains('vislually-hidden')){
      preloader.classList.add('visually-hidden');
    }
  }, 500)
}



//shots interactive


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
