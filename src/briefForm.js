function briefForm () {
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
}

module.exports = briefForm;