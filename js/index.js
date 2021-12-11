// header 

let overlay = document.createElement("div");

$('.nav .container .btn').click(function(){

	$(".links").css("left","0");

	let overlay = document.createElement("div");

	overlay.className = "overlay";

	document.body.appendChild(overlay);
});
$('.links .close i').click(function(){

	$(".links").css("left","-220px");

	$(".overlay").remove();

});
// header


// Create links According To The Number OF Sections

let Parent = document.querySelector(" body ");

let sections = Array.from(Parent.children);

let secNumber = sections.length;

let link = sections[0].getAttribute("class");

const links =document.querySelector(".links");


for (let i = 1 ;i < secNumber - 4 ; i++){
	
	let li = document.createElement("li");

	let a = document.createElement("a");

	a.innerHTML = sections[i].getAttribute("class");

	a.setAttribute("href","#" + sections[i].getAttribute("class"));

	sections[i].setAttribute("id",sections[i].getAttribute("class"));

	

	li.appendChild(a);

	links.appendChild(li);

		
}

$(".links li a").click(function(){

	$(".links").css("left","-220px");

	$(".overlay").remove();

});


/*window.onload  = function(){

	let fixed = document.createElement("div");

	fixed.className = "fixed";


	let h1 = document.createElement("h1");

	h1.textContent = "Hello , My Name Is Mohammed ";

	let p = document.createElement("p");

	p.textContent="& Welcome In My Website .";



	fixed.appendChild(h1,p);
	fixed.appendChild(p);



	document.body.appendChild(fixed);

	setTimeout( ()=>{


		$(".fixed").fadeOut(3000);
		

	},17000);


}
*/
// arrow to Up 

let arrowUp = document.createElement("div");

	arrowUp.className = "arrowUp";

let i = document.createElement("i");

	i.className = "fas fa-arrow-circle-up";

	arrowUp.appendChild(i);

	document.body.appendChild(arrowUp);

window.addEventListener("scroll",()=>{


	


	if(window.pageYOffset > 100){

		arrowUp.classList.add("active");
	}
	else{
		arrowUp.classList.remove("active");
	}
});


arrowUp.onclick = function(){
	window.scrollTo({

		top:0
	}); 
}