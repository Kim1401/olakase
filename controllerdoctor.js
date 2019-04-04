var Item = require('./doctor');
let docinstanciado = new Item();
module.exports = class _Doctor {
  constructor( ) {}
  
Guardar(req,res) {
  var claveysaltlocal = docinstanciado.setPassword(req.body._CLAVE);
  console.log(claveysaltlocal[0]);
  console.log(req.body._CLAVE);
  Item.create({
    EMAIL:  req.body._EMAIL,
    CLAVE:  claveysaltlocal[0],
    SALT:   claveysaltlocal[1],
    NOMBRE: req.body._NOMBRE,
    CEDULA: req.body._CEDULA,
    FECHANAC: req.body._FECHANAC,
    GENERO: req.body._GENERO,
    NUMERO: req.body._NUMERO,
    DOMICILIO: req.body._DOMICILIO,
    IMAGEN: req.body._IMAGEN,
    ESTUDIOS: req.body._ESTUDIOS,
    AREA: req.body._AREA
  }, 
  
    function(err, item) {
      if (err){
        res.send(err);}
      else{    
        Item.find(function(err, item){
          if (err)
            res.send(err)
            res.json(item);
        });
      }
    });
}   

Login(req,res) {
  console.log("email desde el fe: " + req.body._EMAIL)
    console.log("clave desde el fe: " +req.body._CLAVE)
  Item.find({EMAIL:req.body._EMAIL}, function(err, item){
  if (err){
    res.send(err)}
  else{
     console.log(item)
    if(item.length ==0){
      res.status(400).send({ 
        message : "Datos incorrectos"
      }); 
    }
    else{
      console.log("clave desde el be: " +item[0].CLAVE);
        if(docinstanciado.validPassword(req.body._CLAVE,item[0].CLAVE,item[0].SALT)){
            item[0].SALT="NO F..ING WAY";
            res.json(item); // devuelve todas las Personas en JSON  
        }
        else{
          res.status(400).send({ 
            message : "Datos incorrectos"
          }); 
        }
    }
  }
        
  });
}

}