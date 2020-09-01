let next = document.getElementById("next-nav");
let prev = document.getElementById("prev-nav");
let slide1 = document.getElementById("slide-1");
let slide2 = document.getElementById("slide-2");
let slide3 = document.getElementById("slide-3");

var round = 1;

 prev.addEventListener("click", function(){
     
        slide1.classList.remove('slide-1');
        slide1.classList.add('slide-3');
        slide2.classList.remove('slide-2');
        slide2.classList.add('slide-1');
        slide3.classList.remove('slide-3');
        slide3.classList.add('slide-2');
        
 })