const express = require("express");
const { infoCursos } = require("../data/cursos.js");
const {matematicas} = require("../data/cursos.js").infoCursos;

// Router matematicas
const routerMatematicas = express.Router();
// routerMatematicas.use(express.json);


routerMatematicas.get("/", (req,res) => {
    res.send(JSON.stringify(matematicas))
})

routerMatematicas.get("/:tema", (req,res) => {
    const tema = req.params.tema;
    const resultado = matematicas.filter(infoCursos => infoCursos.tema === tema);

    if(resultado.length === 0) {
        res.status(404).send(`Lo siento, no hemos encontramo el tema con nombre ${tema} en la busqueda`)
    }
    res.send(JSON.stringify(resultado));
})


// METODO POST
routerMatematicas.post("/", (req,res)=>{
    const nuevoCurso = req.body;

    matematicas.push(nuevoCurso);
    res.json(matematicas);
});


//METODO PUT    
routerMatematicas.put("/:id", (req,res) => {
    const id = req.params.id;
    const actualizacionesCurso = req.body;

    const indice = matematicas.findIndex(infoCursos => infoCursos.id == id);
    if(indice >= 0) {
        matematicas[indice] = actualizacionesCurso;
    } else {
        res.status(204).end();
    }
    res.json(matematicas);
});


//METODO PATCH
routerMatematicas.patch("/:id", (req,res) => {
    const id = req.params.id;
    const agregarInformacion = req.body;
    
    const cursoAActualizar = matematicas[indice];

    const indice = matematicas.findIndex(infoCursos => infoCursos.id == id);
    if(indice >= 0){
        Object.assign(cursoAActualizar,agregarInformacion)
    } else{
        res.status(204).end();
    }
    res.json(matematicas);
})


//METODO DELETE
routerMatematicas.delete("/:id", (req,res) => {
    const id = req.params.id;
    const indice = matematicas.findIndex(infoCursos => infoCursos.id == id);
    if(indice >= 0) {
        matematicas.splice(indice, 1);
    } else {
        res.status(204).end();
    }
    res.json(matematicas)
})

module.exports = routerMatematicas;