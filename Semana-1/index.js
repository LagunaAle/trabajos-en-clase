/* Los estudiantes deberán crear una estructura de decisión, 
específicamente el "Switch" para que utilice una variable 
dentro del programa que permita determinar la letra de una 
nota dependiendo de cuanto haya sacado en números el estudiante.*/

console.log("\n--- DETERMINAR LA NOTA DE UN ESTUDIANTE ---");

let nota = 100;
let calificacion;

switch (Math.floor(nota / 10)) {
    case 10: 
        calificacion = "A";
        break;

    case 9: 
        calificacion = "A";
        break;

    case 8:
        calificacion = "B";
        break;

    case 7:
        calificacion = "C";
        break;

    case 6:
        calificacion = "D";
        break;

    default:
        calificacion = "F";
        break;
}


console.log("La nota del estudiante es de: " + nota);
console.log("Su calificación es de: " + calificacion);