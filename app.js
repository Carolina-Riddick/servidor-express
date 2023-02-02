const express = require("express");
const app = express();
const {infoCursos} = require("./data/cursos.js");

// Importamos 
const routerMatematicas = require("./routers/matematicas.js")
const routerProgramacion = require("./routers/programacion.js")

// Routers
app.use("/api/cursos/programacion", routerProgramacion);
app.use("/api/cursos/matematicas", routerMatematicas);


// Creamos puerto 
const PUERTO = process.env.PORT || 3000;
app.listen(PUERTO,() => {
   console.log(`Servidor escuchando en el puerto numero : ${PUERTO} ....`) 
});


// Routing. -> Direccionamiento o enrutamiento
app.get("/", (req, res) => {
    res.send("Mi primer servidor con Express.")
});

app.get("/api/cursos", (req, res) => {
    res.json(infoCursos)
})