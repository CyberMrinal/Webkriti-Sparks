var x = document.getElementById("about1Details");
var y = document.getElementById("rules1Details");
var z = document.getElementById("register1Details");

var a = document.getElementById("about1");
var b = document.getElementById("rules1");
var c = document.getElementById("register1");

function openNav(){
		document.getElementById("sidenav").style.width = "250px";
}
function closeNav(){
		document.getElementById("sidenav").style.width = "0";
}
function openAbout1() {
	x.style.display = "block";
	y.style.display = "none";
	z.style.display = "none";

	a.style.color = "white";
	a.style.background = "rgba(0, 0, 0, 0.8";
	b.style.color = "black";
	b.style.background = "rgba(255, 255, 255, 0.8";
	c.style.color = "black";
	c.style.background = "rgba(255, 255, 255, 0.8";
}
function openRules1() {
	x.style.display = "none";
	y.style.display = "block";
	z.style.display = "none";

	a.style.color = "black";
	a.style.background = "rgba(255, 255, 255, 0.8";
	b.style.color = "white";
	b.style.background = "rgba(0, 0, 0, 0.8";
	c.style.color = "black";
	c.style.background = "rgba(255, 255, 255, 0.8";
}
function openRegister1() {
	x.style.display = "none";
	y.style.display = "none";
	z.style.display = "block";

	a.style.color = "black";
	a.style.background = "rgba(255, 255, 255, 0.8";
	b.style.color = "black";
	b.style.background = "rgba(255, 255, 255, 0.8";
	c.style.color = "white";
	c.style.background = "rgba(0, 0, 0, 0.8";
}