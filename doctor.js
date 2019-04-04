var mongoose = require('mongoose');
var crypto = require('crypto'); 
var Schema = mongoose.Schema;
var doc = new Schema({
  EMAIL:String,
  CLAVE: String,
  SALT:String,
  NOMBRE: String,
  CEDULA: Number,
  FECHANAC: Date,
  GENERO: String,
  NUMERO: Number,
  DOMICILIO: String,
  IMAGEN: String,
  ESTUDIOS: String,
  AREA: String  
});

doc.methods.setPassword = function(password){ 
  console.log(password);

  var salt = crypto.randomBytes(16).toString('hex'); 
  
  console.log(password);
  var claveysalt =[]

  claveysalt.push(crypto.pbkdf2Sync(password, salt,1000, 64, 'sha512').toString('hex'));
  claveysalt.push(salt);
    
  return claveysalt; 
}; 

doc.methods.validPassword = function(password,clavebuena,salt) { 
  console.log(this.CLAVE);
  console.log(password);
  console.log(clavebuena);
  
  var hash = crypto.pbkdf2Sync(password,salt, 1000, 64, 'sha512').toString('hex');
  return clavebuena === hash;
};
module.exports = mongoose.model('doctor',doc);