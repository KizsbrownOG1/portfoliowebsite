
function showsidebar()
{
  const sidebar = document.getElementById('sidebar');
  if(sidebar.classList.contains('active'))
  {
    sidebar.classList.remove('active');
  }else{
    sidebar.classList.add('active');
  }
  //  const sidebar = document.querySelector('.sidebar')
  //  if(sidebar.style.display === "none")
  //  {
  //   sidebar.style.display = "block"
  //  }
  //  else
  //  {
  //   sidebar.style.display = "none";
  //  }
  window.onclick = function(event){
    const sidebar = document.getElementById('sidebar');
    const menu = document.getElementById('menu');

    if(!sidebar.contains(event.target) && !menu.contains(event.target))
    {
      sidebar.classList.remove('active')
    }
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


















 const translations = {
            en: {
                topic: "FULLSTACK DEVELOPER",

                porfolio: "PORFOLIO",
                aboutme: "ABOUT-ME",
                project: "PROJECTS",
                service: "SERVICES",
                
                porfolios: "PORFOLIO",
                aboutmes: "ABOUT-ME",
                projects: "PROJECTS",
                services: "SERVICES",

                s: "Hello, I`m  Okafor Goodluck Chibuike",
                h: "Software developer with a passion of creating",
                o: "interactive and user-friendly Website/Application,",
                r: "to bring your design to life and making them functional",
                t: "and make solutions to your problems.",

                abtme: "About Me"
                
            },

            fr: {
                topic: "DEVELOPPEUR FULLSTACK",

                porfolio: "PORFOLIO",
                aboutme: "A PROPOS DE MOI",
                project: "PROJETS",
                service: "SERVICES",

                porfolios: "PORFOLIO",
                aboutmes: "A PROPOS DE MOI",
                projects: "PROJETS",
                services: "SERVICES",

                s: "Salut, je suis Okafor Chibuike Goodluck",
                h: "Developpeur logiciel passionne par creation",
                o: "Site Web/Application interactif(ve) et facile a utiliser,",
                r: "Donner vie a vos designs et les rendre fonctionnels",
                t: "Et creer des solutions a vos problemes",

                abtme: "A propos de me"
                
            }
        };



        let currentLanguage = "en";


        function setLanguage(lang){
            currentLanguage = lang;

            document.getElementById("h2").textContent = translations[lang].topic;

            document.getElementById("porfolio").textContent = translations[lang].porfolio;
            document.getElementById("about-me").textContent = translations[lang].aboutme;
            document.getElementById("project").textContent = translations[lang].project;
            document.getElementById("service").textContent = translations[lang].service;

            document.getElementById("porfolios").textContent = translations[lang].porfolios;
            document.getElementById("about-mes").textContent = translations[lang].aboutmes;
            document.getElementById("projects").textContent = translations[lang].projects;
            document.getElementById("services").textContent = translations[lang].services;

            document.getElementById("s").textContent = translations[lang].s;
            document.getElementById("h").textContent = translations[lang].h;
            document.getElementById("o").textContent = translations[lang].o;
            document.getElementById("r").textContent = translations[lang].r;
            document.getElementById("t").textContent = translations[lang].t;

            document.getElementById("abtme").textContent = translations[lang].abtme;
            
            
            
            
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