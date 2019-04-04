function agregaimgdepeliculaaldiv(imagenenbase64, iddeldiv, _id){
		document.getElementById(iddeldiv).innerHTML += "<img src='"+imagenenbase64+"' height='60' width='40' id='"+_id+"' onclick='cargataquilla(\""+_id+"\")'>"
}
function cargarpeliculasdelmessyanno(){
	let clasepeliculainstanciada = new _Pelicula();
	clasepeliculainstanciada.peliculapormesyanno(document.getElementById("mesactual").innerHTML,document.getElementById('annoactual').innerHTML).then
	(function(response){
		for(var elemento in response){
			var fecha = new Date(response[elemento].FECHA);
			agregaimgdepeliculaaldiv(response[elemento].IMAGEN,fecha.getDate()+1,response[elemento]._id);
		}
	}, 
	function(error){
		console.log(error);
	});
}

function cargataquilla(_id){
    let clasepeliculainstanciada = new _Pelicula(_id);
    clasepeliculainstanciada.Seleccionarporid().then(function(response) {
	localStorage.setItem("peliculaseleccionada",JSON.stringify(response));
    location.href="Butacas.html"
}, 
function(error) {
console.log(error);
});

}