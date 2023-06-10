const slider = document.querySelector('.slider');
const imgs = document.querySelectorAll(".slider img");
const leftArrow = document.querySelector(".arrow-left");
const rightArrow = document.querySelector(".arrow-right");

let currentIndex = 0;
let time = 3000; //Tempo padrão para apresentação de slides automática

let cores = [
  'rgb(196,26,26)',
  'black',
  'black',
  'black',
  'rgb(196,26,26)',
  'rgb(196,26,26)',
  'url("img/fundo_1.png")',
  'url("img/fundo_2.png")',
  'rgb(106,176,165)',
  'rgb(196,26,26)'
]

const defClass = (startPos, index) => {
  for (let i = startPos; i < imgs.length; i++) {
    imgs[i].style.display = "none";
  }
  slider.style.background = cores[index];
  imgs[index].style.display = "block";
};

defClass(0, 0);

leftArrow.addEventListener("click", function(){
  currentIndex <= 0 ? currentIndex = imgs.length-1 : currentIndex--;
  defClass(0, currentIndex);
});

rightArrow.addEventListener("click", function(){
  currentIndex >= imgs.length-1 ? currentIndex = 0 : currentIndex++;
  defClass(0, currentIndex);
});

const startAutoSlide = () => {
  setInterval(() => {
    currentIndex >= imgs.length-1 ? currentIndex = 0 : currentIndex++;
    defClass(0, currentIndex);
  }, time);
};

startAutoSlide(); //Inicia o slideshow