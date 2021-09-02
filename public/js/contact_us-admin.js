function openNav(){
        if(window.matchMedia("(max-device-width: 450px)").matches)
                document.getElementById("sidenav").style.width = "50%";
        else
                document.getElementById("sidenav").style.width = "250px";
}
function closeNav(){
        document.getElementById("sidenav").style.width = "0";
}


const container = document.querySelector(".person");

let eventData = [];

const createEvents = (array) => {
	container.innerHTML = "";
      
	array.forEach((personObj) => {
		const {image, tag, name, phone, email} = personObj;
		const id = personObj.personId;
	
		const person = document.createElement("div");
		person.classList.add("event");
		person.id = id;
	
		const insideHtml = `<div class="person"><img src=${image}><h3 class="tag">${tag}</h3><div class="name">${name}</div><div class="details">${phone}<br>${email}</div><br><button class="button">Edit Contact Card</button></div>`;
	
		person.innerHTML = insideHtml;
	
		container.appendChild(person);
	});
};