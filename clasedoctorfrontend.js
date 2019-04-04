class _doc {
   constructor(
    _ID,
    _EMAIL,
    _CLAVE,
    _NOMBRE,
    _CEDULA,
    _FECHANAC,
    _GENERO,
    _NUMERO,
    _DOMICILIO,
    _IMAGEN,
    _ESTUDIOS,
    _AREA){
    this._ID = _ID;
    this._EMAIL=_EMAIL;
    this._CLAVE=_CLAVE;
    this._NOMBRE=_NOMBRE;
    this._CEDULA=_CEDULA;
    this._FECHANAC=_FECHANAC;
    this._GENERO=_GENERO;
    this._NUMERO=_NUMERO;
    this._DOMICILIO=_DOMICILIO;
    this._IMAGEN = _IMAGEN;
    this._ESTUDIOS=_ESTUDIOS;
    this._AREA=_AREA;
}
Guardar() {
  var objetoaenviar = this;
  return new Promise(function(resolve, reject) {
  try {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:8080/api/nuevodoc');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function() {
      if (xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText));
      }
      else{
        reject(xhr);
      }
};
xhr.send(JSON.stringify(objetoaenviar));
}
catch(err) {
     reject(err.message);
}
});
}


Login() {
  var objetoaenviar = this;
  return new Promise(function(resolve, reject) {
  try {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:8080/api/logindoc');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function() {
      if (xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText));
    }
    else{
      reject(xhr);
    }
};
xhr.send(JSON.stringify(objetoaenviar));
}
catch(err) {
     reject(err.message);
}
});
}

}