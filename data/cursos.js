let infoCursos = {
    programacion :[
        {
            id: 1,
            titulo: "aprende Python",
            lenguaje: "python",
            vistas: 1501,
            nivel : "basico"
        },
        {
            id: 3,
            titulo: "Python Experto",
            lenguaje: "python",
            vistas: 150063,
            nivel : "experto"
        },
        {
            id: 2,
            titulo: "Aprende Python Intermedio",
            lenguaje: "python",
            vistas: 1500,
            nivel : "intermedio"
        },
        {
            id:4,
            titulo:"Aprende C#",
            lenguaje: "C#",
            vistas: 897456,
            nivel: "basico"
        },
        {
            id: 5,
            titulo: "aprende javascript",
            lenguaje: "javascript",
            vistas : 456123,
            nivel : "basico"
        }
    ],
    matematicas : [
        {
            id:1,
            titulo:"Aprende matematicas I",
            tema :"matematicas",
            vistas: 897456,
            nivel: "basico"
        },
        {
            id:2,
            titulo:"Aprende Algebra",
            tema: "algebra",
            vistas: 897456,
            nivel: "intermedio"
        }
    ]
}

module.exports.infoCursos = infoCursos;

/* ----------------------Como podemos navegar dentro de mi arreglo de objetos?
Algunos ejemplos por si quieres practicar:

console.log(infoCursos.programacion[1].titulo)

console.log(typeof(infoCursos))

console.log(infoCursos.matematicas[0].titulo)
*/