var btnState = false;
var body = document.querySelector('body');
var toggleBtn = document.querySelector('#btn');
var menuWrapper = document.querySelector('#menu-wrapper');
var logo1 = document.querySelector('#page-logo');
var logo2 = document.querySelector('#page-logo2');

function toggle() {
  toggleBtn.addEventListener('click', () => {
    const initialText = 'menu';

    if (
      toggleBtn.textContent.toLowerCase().includes(initialText.toLowerCase())
    ) {
      const close = 'Close';
      toggleBtn.textContent = close;
      toggleBtn.classList.add('white');
      logo1.classList.add('block')
         logo2.classList.add('none');
      menuWrapper.style.display = 'block';
      body.style.overflowY = 'hidden';
    } else {
      toggleBtn.textContent = initialText;
      toggleBtn.classList.remove('white');
      logo1.classList.remove('block');
         logo2.classList.add('none');
      menuWrapper.style.display = 'none';
      body.style.overflowY = 'auto';
    }
  });
}

toggle();
// window.onscroll = function () {
//   if (window.pageYOffset > 100) {
//     toggleBtn.classList.add('.black');
//   } else {
//     toggleBtn.classList.remove('black');
//   }
// };
// window.addEventListener('scroll', () => {
//   console.log('scrollling');
//   if (window.pageYOffset > 100) {
//     toggleBtn.classList.add('.black');
//   } else {
//     toggleBtn.classList.remove('black');
//   }
// });
