function cargardoctores(){
	var doctor = JSON.parse(localStorage.getItem('doctorseleccionado'));
	document.getElementById("datosdeldoc").innerHTML += "<div id='infopelicula'>" +doctor[0].NOMBRE + "<br>Tanda: "+doctor[0].GENERO+ "<br> Inicia: "+doctor[0].AREA +":"+doctor[0].IMAGEN+"</div>";
	
}