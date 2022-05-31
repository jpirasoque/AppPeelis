// Imports de librerias
const express = require('express');
const morgan = require('morgan');
const exphbs = requere('express-handlebars'); 

const path = require('path');
// Inicializacion de la app
const app = express();

// Configuracion de Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//variables globales

//routes
app.use(require('./src/routes'))
app.use(require('./src/routes/authentication'));
app.use('/links',require('./src/routes/links'));

//public
app.use(express.static(path.join(__dirname, 'public')));

// Inicializacion del Servidor

app.listen(3000,()=>{console.log('Server on =>',3000)});

//settings
app.set('views', path.join(__dirname,'views'));
app.engine('.hbs', exphbs({
    defaultlayout: 'main',

    layoutDir: path.join(app.get('views'),'layouts'),
    partialDir: path.join(app.get('views'),'partials'),
    extname: '.hbs',
    helpers: require('./lib/handlebars')

}));
app.set('view engine', '.hbs');
