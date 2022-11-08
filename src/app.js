const express = require("express");
const initModels = require("./models/initModels");
// importamos la instancia db de database.js
const db = require("./utils/database");
//importar las rutas
const userRoutes = require('./routes/users.route');
const TaskRoutes = require('./routes/task.ruote');
require('dotenv').config();

const app = express();
//Colocar para que la app me devuelva en json.
app.use(express.json());

app.use(express.urlencoded({extended: true}));

const PORT = process.env.PORT || 8000; //Cuando no existe aparece undefinded

db.authenticate() // devuelve una promesa
  .then(() => console.log("Autenticación exitosa"))
  .catch((error) => console.log(error));

db.sync({ force: false }) // devuelve una promesa
  .then(() => console.log("Base sincronizada"))
  .catch((error) => console.log(error));

initModels();

app.get("/", (req, res) => {
  res.status(200).json("Todo bien");
});

app.use('/api/v1', userRoutes);

app.use('/api/v1', TaskRoutes);

//api/v1/users por la ruta users

app.listen(PORT, () => console.log(`Servidor corriendo ${PORT}`));
