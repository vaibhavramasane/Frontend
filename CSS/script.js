const hamburger = document.getElementById("hamburger"); // it's fix value 
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click",()=> {
    navLinks.classList.toggle("active");


});