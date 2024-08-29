const express = require("express");
const routerApi = require("./routes/index");

//Configuración del servidor
const app = express();
const port = 3000;

//middelware
app.use(express.json());

routerApi(app);

//listen
app.listen(port, () => {
  console.log("Servidor corriendo en el puerto: " + port);
});
