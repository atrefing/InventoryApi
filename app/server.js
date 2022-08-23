// se debe instalar varios modulos tales como 
// npm install mssql express morgan cors dotenv
// @babel/cli @babel/core @babel/preset-env @babel/node nodemon -D
//mssql para poder conectarnos a la base de datos de mssql
// express para administrar las rutas de peticion de datos de nuestro Api
// morgan 
// cors
// dotenv para accesder a las variables de entorno del sistema operativo una forma de mantener 
// segura la información sencible
// @babel/cli  uso de babel en la consola 
//@babel/core  uso de babel en el codigo 
//@babel/preset-env configurado solo para el desarrollo de la app
//@babel/node nodemon -D reinicio de nuestro servicio con los cambios que a este se le realicen 
//por medio de nodemon
const express = require('express'); //llamamos a Express
const bodyParser= require('body-parser');
const cors=require('cors');
const fs=require('fs');
const path=require('path');
const morgan=require('morgan');
const router= require('./routes/routes.js');

const app = express();
app.use(cors());
const swaggerUi=require('swagger-ui-express')
let swaggerDocument=require('./')
const port = process.env.PORT || 8080  // establecemos nuestro puerto






// app.get('/', function(req, res) {
//   res.json({ mensaje: '¡Hola Mundo!' })   
// })

// app.get('/cervezas', function(req, res) {
//   res.json({ mensaje: '¡A beber cerveza!' })  
// })

// app.post('/', function(req, res) {
//   res.json({ mensaje: 'Método post' })   
// })

// app.del('/', function(req, res) {
//   res.json({ mensaje: 'Método delete' })  
// })

// // iniciamos nuestro servidor
app.listen(port)
console.log('API escuchando en el puerto ' + port)