let imagenenbase64 = "";
$("#imagen").change(function(){
readURL(this);
 });
    
function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
    imagenenbase64=e.target.result;   
  }

  reader.readAsDataURL(input.files[0]);
  }
}
//fin de la función para guardar la imagen como texto

function guardardoctor(){ 
let docactual = new _doc(
	'0',
    document.getElementById("email").value,
    document.getElementById("clave").value,
  	document.getElementById("nombre").value,
    document.getElementById("cedula").value,
    document.getElementById("fechanac").value,
    document.getElementById("genero").value,
    document.getElementById("numero").value,
    document.getElementById("domicilio").value,
    imagenenbase64,
    document.getElementById("estudios").value,
    document.getElementById("area").value
);
  	docactual.Guardar(docactual).then(function(response) {
  	console.log("Success!", response);
  	alert("Guardado con exito");

},function(error) {
  	console.error("Failed!", error);
  	alert("Error " + error);
    location.href="Calendario.html";
});
}

function Login(){

docactual = new _doc(
  '0',
  document.getElementById("nomlog").value,
  document.getElementById("clavelog").value,
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  ""
);
  docactual.Login(docactual).then(function(response) {
  console.log("Success!", response);
	alert("Log In con éxito");
  	localStorage.getItem('Usuariologeado',JSON.stringify(response));
  	location.href="Calendario.html";
          
}, function(error) {
  	console.log("Failed!", error);
  	alert("Error " + error);
});
}