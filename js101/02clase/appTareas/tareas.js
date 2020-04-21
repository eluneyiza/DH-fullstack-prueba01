// definir que va a pasar cuando el usuario pida listar tareas
// let listaDeTareas = [
//     {
//         titulo: 'Repaso JS',
//         estado: 'Terminada',
//     },
//     {
//         titulo: 'Armar 1ra parte app tareas',
//         estado: 'En curso',
//     },{
//         titulo: 'Terminar app tareas',
//         estado: 'Pendiente',
//     }
// ]

// pasada la variable a formato JSON necesitamos poder traer los datos para operarlos

const fs = require('fs');



let tareas = {
      // crear una función que lea el archivo JSON
      escribirJson: function(datos){
        let data = JSON.stringify(datos, null, ' ');
        fs.writeFileSync('data.json',data);
          
      },
      leerJson:
      function(){
        if(fs.existsSync('data.json')){
          let listaDeTareas = fs.readFileSync('./data.json','utf8');
        listaDeTareas= JSON.parse(listaDeTareas);
        return listaDeTareas;
        }else{
          return[];
        }
      }
      /* function(){
        let listaDeTareas = fs.readFileSync('./data.json','utf8');
        listaDeTareas= JSON.parse(listaDeTareas);
        return listaDeTareas;
    } */,
     listar: function(){
      
       
      let listaDeTareas= this.leerJson();
      listaDeTareas.forEach(function(valor,i){
        console.log(i+' '+ 'Titulo: ' +listaDeTareas[i].titulo+' | Estado: '
        +listaDeTareas[i].estado+'\n');
       }); 
       /* (let i=0;i<listaDeTareas.length;i++){
                console.log(i+' '+ 'Titulo: ' +listaDeTareas[i].titulo+' | Estado: '
                 +listaDeTareas[i].estado+'\n');
         } */
     },
    verUna: function(opcion){
    //toDo: listar una sola tarea, tip: hay que usar el indice del Array.
    let listaDeTareas= this.leerJson();
    if (opcion !== undefined){
      console.log(opcion + ' '+ "Tarea: "+ listaDeTareas[opcion].titulo + " | Estado: "+ listaDeTareas[opcion].estado +"\n");
    }else{
      console.log("Por favor, elija una tarea para ver.");
    }
      
    },
    crear: function(unaNuevaTarea){
      let listaDeTareas= this.leerJson();
      listaDeTareas.push(unaNuevaTarea);
      this.escribirJson(listaDeTareas);
      console.log('La tarea se agregó con éxito.');
    } ,
    cambiarEstado: function(indice,nuevoEstado){
      let listaDeTareas= this.leerJson();
      if(listaDeTareas[indice]){
        listaDeTareas[indice].estado = nuevoEstado;
        this.escribirJson(listaDeTareas);
        console.log('Estado modificado con éxito');
      } else{
        console.log('La tarea indicada no existe');
      }
      
    },
    borrar: function(num){
      let listaDeTareas= this.leerJson();
      listaDeTareas.splice(num,1)
      this.escribirJson(listaDeTareas);
      console.log('La tarea fue eliminada con éxito');
    },
}


module.exports = tareas;
