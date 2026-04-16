const slideshowElements = document.
  querySelectorAll(".slideshow-element");

setInterval(() => {
   let currentElement = document.querySelector(".current");
   currentElement.classList.remove("current");

   let nextElement = currentElement.nextElementSibling;
   if (nextElement) {
     nextElement.classList.add("current");
   } else {
     slideshowElements[0].classList.add("current");
   }
}, 2000);