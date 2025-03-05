var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// Agregar el código para que la aplicación escuche en el puerto
var port = process.env.PORT || 3000;  // Usar el puerto proporcionado por el entorno o 3000
app.listen(port, function () {
  console.log(`Servidor escuchando en el puerto ${port}`);
});

module.exports = app;
