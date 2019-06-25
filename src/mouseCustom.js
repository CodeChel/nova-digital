//mouse-custom move

function mouseCustom (){      
    mouseCustom.cursor = document.querySelector('.cursor');



document.addEventListener('mousemove', e => {

    mouseCustom.cursor.classList.remove('visually-hidden');
    mouseCustom.cursor.setAttribute("style", "top: " + (e.pageY - 2)  + "px; left: " + (e.pageX - 2)  + "px;");
 
})


document.addEventListener('mouseleave', () => {
    mouseCustom.cursor.classList.add('visually-hidden');
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
}

module.exports = mouseCustom;