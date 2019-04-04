module.exports = function(app){
var controllerDoctor = require('./controllerdoctor.js');      
var clasedoc = new controllerDoctor();

    app.post('/api/nuevodoc',  clasedoc.Guardar);
    app.post('/api/logindoc',  clasedoc.Login);
};