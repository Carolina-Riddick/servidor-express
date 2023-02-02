const express = require("express");
const { infoCursos } = require("../data/cursos.js");
const {programacion} = require("../data/cursos.js").infoCursos;

// Router programacion
const routerProgramacion = express.Router();

// Middleware. Nos va a permitir procesar el cuerpo de la solicitud req.body en formato JSON y poder trabajar con ella 
// routerProgramacion.use(express.json);

routerProgramacion.get("/",(req,res) => {
    res.send(JSON.stringify(programacion));
})


// Filtramos con parametros URL en cursos de programacion
routerProgramacion.get("/:lenguaje", (req, res) => {
    const lenguaje = req.params.lenguaje;
    const resultado = programacion.filter(infoCursos => infoCursos.lenguaje === lenguaje)

    if(resultado.length === 0){
        return res.status(404).send(`Lo siento, no hay cursos con el nombre del lenguaje ${lenguaje} :(`)
    }

    if(req.query.ordenar === "vistas"){
        return res.send(JSON.stringify(resultado.sort((a,b) => b.vistas - a.vistas)));
    }

    res.json(resultado);
});


// Queremos filtrar por nombre de curso y por nivel. Usaremos 2 parametros:
routerProgramacion.get("/:lenguaje/:nivel", (req, res) => {
    const nivel = req.params.nivel;
    const lenguaje = req.params.lenguaje;
    resultado = programacion.filter(infoCursos => infoCursos.lenguaje === lenguaje && infoCursos.nivel === nivel);
    
    if(resultado.length === 0){
        return res.status(204).send(`Lo siento, no hemos encontrado busquedas con lenguaje ${lenguaje} con nivel ${nivel}`)
        //return res.status(404).end();
    } else {
        res.send(JSON.stringify(resultado));
    }
})


// METODO POST
routerProgramacion.post("/", (req,res)=>{
    let cursoNuevo = req.body;
    programacion.push(cursoNuevo);
    res.json(programacion);
});

// METODO PUT 
routerProgramacion.put("/:id", (req, res) => {
    const cursoActualizado = req.body;
    const id = req.params.id; 

    const indice = programacion.findIndex(infoCursos => infoCursos.id == id)
    if(indice >= 0){
        programacion[indice] = cursoActualizado;
    } else {
        res.status(204).send(`No se ha podido encontrar el numero de indice ${indice} que solicito`)
    }
    res.send(JSON.stringify(programacion)); 
});



// METODO PATCH
routerProgramacion.patch("/:id", (req,res) => {
    const agregarModificaciones = req.body;
    const id = req.params.id;
    
    const indice = programacion.findIndex(curso => curso.id == id); 
    if(indice >= 0){
        const cursoAModificar = programacion[indice];
        Object.assign(cursoAModificar, agregarModificaciones);
    } else {
        res.status(204).status(`No se han econtrado modificaciones a realizar`)
    }
     
    res.send(JSON.stringify(programacion));
});


//METODO DELETE
routerProgramacion.delete("/:id", (req,res) => {
    const id = req.params.id;
    const indice = programacion.findIndex(curso => curso.id == id);
    if(indice >= 0){
        programacion.splice(indice, 1);
    } else {
        res.status(204).send(`No se ha encontrado el id con numero ${id} que ha elegido`)
    }

    res.send(programacion)
});

module.exports = routerProgramacion;