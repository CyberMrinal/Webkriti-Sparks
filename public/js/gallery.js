function openNav(){
	if(window.matchMedia("(max-device-width: 450px)").matches)
		document.getElementById("sidenav").style.width = "50%";
	else
		document.getElementById("sidenav").style.width = "250px";
}
function closeNav(){
	document.getElementById("sidenav").style.width = "0";
}



var modal = document.getElementById("modal01");
var img = document.getElementById("image01");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption01");

img.onclick = function(){
	modal.style.display = "block";
	modalImg.src = this.src;
	captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
 	modal.style.display = "none";
}
