console.log('server en marcha');

const express = require('express');
const app = express();
const path = require('path');

//ajustes
app.set('puerto', 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

//rutas
app.use(require('./routes/index'));

//archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));

//servidor escuchando
app.listen(app.get('puerto'), () => {
  console.log('Servidor en el puerto', app.get('puerto'));
});
