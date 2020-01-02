const footballImage = document.querySelector('.img-wrapper');
const popupWrapper = document.querySelector('.popupWrapper');

const displayText = textAlert => {
  footballImage.addEventListener('click', () => {
    textAlert();
    console.log('image clicked');
  });
};

const popUp = () => {
  popupWrapper.classList.toggle('popup-controller');
};

displayText(popUp);
