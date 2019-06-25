function popUpShot () {
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
};

module.exports = popUpShot;