const tareas = require('./tareas');
let action = process.argv[2];
let opcion = process.argv[3];


// console.log(tareas);

switch(action){
    case ('listar'):
        console.log('Lista de Tareas');
        tareas.listar();
        break;
   
    case('verUna'):
        tareas.verUna(opcion);
        // ver como contener el error del usuario cuando pasa un num> a la cant de tareas en el array hint: usar elseif
        break;

    case('nueva'):
        let tarea = {
            titulo: process.argv[3] ,
            estado: 'Pendiente' ,
        }
        tareas.crear(tarea);
    break;

    case('cambiar'):
    let indice = process.argv[3];
    let nuevoEstado = process.argv[4];
    tareas.cambiarEstado(indice,nuevoEstado);
    break;

    case('borrar'): 
        let tareaABorrar = process.argv[3];
        tareas.borrar(tareaABorrar);
        break;

    case(undefined):
        console.log("Por favor,elija una acción");
        break;

    default: console.log('La acción solicitada no existe. Por favor, elija otra accion');
        break; 
}