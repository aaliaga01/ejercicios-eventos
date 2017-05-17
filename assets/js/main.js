//mensaje al cargar la página
window.onload = function(){
	alert('En línea');
}

//mensaje al pulsar el boton
function demoBoton(){
	var demo = document.getElementById("demo");
	demo.addEventListener('click', function(){
		alert("Hola mundo");
	});

}
demoBoton();

//mensaje al estar sobre caja de texto
function ratonIn(){
		alert("Estas sobre mí");
}
document.getElementById("raton").onmouseover = ratonIn;

//mensaje al estar fuera de la caja de texto
function ratonOut(){
		alert("No estas sobre mí");
}
document.getElementById("raton").onmouseout = ratonOut;

