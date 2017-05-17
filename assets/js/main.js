
function demoBoton(){

	var demo = document.getElementById("demo");
	demo.addEventListener('click', function(){ // digo a menu. agrego un evento ('tipo de evento', funcion).
		alert("Holamundo");
	});

}
demoBoton();
