const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');

const app = express();

// Configuración del motor de plantillas Handlebars
app.engine('hbs', exphbs({
  defaultLayout: 'main',
  layoutsDir: path.join(__dirname, 'views/layouts'),
  partialsDir: path.join(__dirname, 'views/partials'),
  extname: 'hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// Ruta para manejar solicitudes GET en la ruta raíz ("/")
app.get('/', (req, res) => {
  res.render('index', { title: 'Página de inicio' });
});

// Ruta para manejar solicitudes GET en la ruta "/signin"
app.get('/signin', (req, res) => {
  res.render('signin', { title: 'Iniciar sesión' });
});

// Iniciar el servidor en el puerto 3000
const PORT = process.env.PORT || 3000;
