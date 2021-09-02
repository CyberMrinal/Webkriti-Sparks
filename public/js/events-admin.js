function openNav(){
        if(window.matchMedia("(max-device-width: 450px)").matches)
                document.getElementById("sidenav").style.width = "50%";
        else
                document.getElementById("sidenav").style.width = "250px";
}
function closeNav(){
        document.getElementById("sidenav").style.width = "0";
}


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
      showSlides(slideIndex += n);
}

function currentSlide(n) {
      showSlides(slideIndex = n);
}

function showSlides(n) {
       var i;
       var slides = document.getElementsByClassName("events");
      var dots = document.getElementsByClassName("dot");

      if (n > slides.length)
              slideIndex = 1;
       if (n < 1)
               slideIndex = slides.length;

       for (i = 0; i < slides.length; i++) 
              slides[i].style.display = "none";

      for (i = 0; i < dots.length; i++)
               dots[i].className = dots[i].className.replace(" active", "");

      slides[slideIndex-1].style.display = "flex";
      dots[slideIndex-1].className += " active";
}


const container = document.querySelector(".container");

let eventData = [];

const createEvents = (array) => {
	container.innerHTML = "";
      
	array.forEach((eventObj) => {
		const {image, title, text } = eventObj;
		const id = eventObj.eventId;
	
		const event = document.createElement("div");
		event.classList.add("event");
		event.id = id;
	
		const insideHtml = `<div class="event"><div class="images"><img class="image" src=${image}></div><div class="description"><div class="title">${title}</div><p class="text">${text}</p><button class="button">Register Now</button></div></div>`;
	
		event.innerHTML = insideHtml;
	
		container.appendChild(event);
	});
};