const footballImage = document.querySelector('.img-wrapper');
const popupWrapper = document.querySelector('.popupWrapper');

const displayText = textAlert => {
  footballImage.addEventListener('mousehover', () => {
    textAlert();
    console.log('image clicked');
  });
};

const popUp = () => {
  popupWrapper.classList.toggle('popup-controller');
};

displayText(popUp);
