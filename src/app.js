const express = require("express");
const initModels = require("./models/initModels");
// importamos la instancia db de database.js
const db = require("./utils/database");
//importar las rutas
const userRoutes = require('./routes/users.route');
const morgan = require('morgan');
const TaskRoutes = require('./routes/task.ruote');
require('dotenv').config();
const logs = require('./middleware/requestLogs');
const app = express();
const handleError = require('./middleware/error');
//Colocar para que la app me devuelva en json.
app.use(express.json());

// app.use((req, res, next)=>{
//   console.log('antes de atender una peticion');
//   next();
// })  //punto de montaje osea en que ruta trabajara, trabaja en cualquir lugar

app.use(logs);
app.use(morgan('dev'));

app.use(express.urlencoded({extended: true}));

const PORT = process.env.PORT || 8000; //Cuando no existe aparece undefinded

db.authenticate() // devuelve una promesa
  .then(() => console.log("Autenticación exitosa"))
  .catch((error) => console.log(error));

db.sync({ force: false }) // devuelve una promesa
  .then(() => console.log("Base sincronizada"))
  .catch((error) => console.log(error));

initModels();

app.get("/", (req, res, next) => {
  console.log('antes de responder');
  next();
}, (req, res) => {
  res.status(200).json("Todo bien");
});

app.use('/api/v1', userRoutes);

app.use('/api/v1', TaskRoutes);

//api/v1/users por la ruta users

app.use(handleError);

app.listen(PORT, () => console.log(`Servidor corriendo ${PORT}`));


//ciclo de peticion respuesta es
//request-response - circle

///middleware de aplicacion
//son app.use, app.get, app.post, app.put, app.delete etc..
//app.use  --> atiende la peticion de cualquire metodo osea get, post, put, delete
//app.get --> peticion del tipo get

//pila de middlewares --> (req, res, next)