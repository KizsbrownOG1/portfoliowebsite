
function showslidebar()
{
   const slidebar = document.querySelector('.slidebar')
   if(slidebar.style.display === "none")
   {
    slidebar.style.display = "block"
   }
   else
   {
    slidebar.style.display = "none";
   }
}


let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  // Change image every 6 seconds
  setTimeout(showSlides, 6000); 
}



var a = document.getElementById("bottup");
function scrotop()
{
    
    window.scroll({
            top: 10,
             left: 1,
            behavior: 'smooth'
            });
    
}


function scrolll()
{
   var left = document.querySelector("#scroll-images");
   left.scrollBy(330,0)
}
function scrollr()
{
   var right = document.querySelector("#scroll-images");
   right.scrollBy(-330,0)
}


function scrollll()
{
   var left = document.querySelector("#scroll-images2");
   left.scrollBy(330,0)
}
function scrollrr()
{
   var right = document.querySelector("#scroll-images2");
   right.scrollBy(-330,0)
}



function hiddenDiv()
{
  var hidden = document.querySelector(".hidden");
     hidden.style.display = "block";
 
}





































































































































































/*
const body6 = document.querySelector(".carouse")
const arrowBtn =document.querySelectorAll(".body6 i")
const firstCardWidth = carouse.querySelector(".card")
const consoleChildrens = [...carouse.children];


let isDragging = false , startX , startScollLeft;

let cardPerview = Math.round(carouse.offsetWidth / firstCardWidth);

consoleChildrens.slice(-cardPerview).reverse().forEach(card =>{
  carouse.insertAdjacentElement("afterbegin", card.outerHTML);
})


consoleChildrens.slice(0, cardPerview).forEach(card =>{
  carouse.insertAdjacentElement("beforeend", card.outerHTML);
})

const dragStart = () => {
  isDragging = true;
  carouse.classList.add("dragging");
  startX. e.pageX;
  startScollLeft = carouse.scrollLeft;
}
const dragging = (e) => {
  if(!isDragging) return;
  console.scrollLeft = startScollLeft - (e.pageX - startX) ;
}

const dragStop = () => {
  isDragging = false;
  carouse.classList.remove("dragging");
}

const autoPlay = () => {
  if(window.innerWidth < 800) return;

  timeoutId = setTimeout(() => carouse.scrollLeft += firstCardWidth ,2500);
}

autoPlay();

arrowBtn.forEach(btn => {
  btn.addEventListener("click", () => {
    carouse.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
  });
});

const InfiniteScroll =  () => {
  if(carouse.scrollLeft === 0)
  {
    carouse.classList.add("no-transition");
    carouse.scrollLeft = carouse.scrollWidth - (2 * carouse.offsetWidth);
    carouse.classList.remove("no-transition");
  }
  else
  if(Math.ceil(carouse.scrollLeft) === carouse.scrollWidth - carouse.offsetWidth)
  {
    carouse.classList.add("no-transition");
    carouse.scrollLeft = carouse.offsetWidth;
    carouse.classList.remove("no-transition");
  }
}

clearTimeout(timeoutId)
if(!body6.matches(":hover")) autoPlay();

carouse.addEventListener("mousedown", dragStart);
carouse.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carouse.addEventListener("scroll", InfiniteScroll);
body6.addEventListener("mouseenter", () => clearTimeout(timeoutId));
body6.addEventListener("mouseleave", autoPlay);

*/