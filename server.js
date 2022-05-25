// Imports de librerias
const express = require('express');
const morgan = require('morgan');

// Inicializacion de la app
const app = express();

// Configuracion de Middlewares
app.use(morgan('dev'));


// Inicializacion del Servidor

app.listen(3000,()=>{console.log('Server on =>',3000)});

