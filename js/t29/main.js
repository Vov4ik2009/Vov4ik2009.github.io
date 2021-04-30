const slides = document.querySelector('.slides')
const slideNum = document.querySelectorAll('.slide').length;

const maxMargin = (slideNum-1)*600;

function slideRight(){
    let prev = getMargin();
    if(prev > -maxMargin){
    slides.style.marginLeft = `${prev-600}px`;
  }else{
      direction = 'left'
  }
}

function slideLeft(){
    let prev = getMargin();
    if(prev < 0){
    slides.style.marginLeft = `${600+prev}px`;
  }else{
    direction = 'right'
}
}

function getMargin() {
    let prev = Number(slides.style.marginLeft.replace('px', '') ) || 0;
    return prev
}

let direction = 'right';

setInterval(function(){
   if(direction == 'right'){
    slideRight();
   } 
   if(direction == 'left'){
    slideLeft();
   } 
}, 4000)