// console.log('hola a todos');
let objetoLiteral = {
    nombre: "eluney",
    edad: 20,
    curso: 'Fullstack',
}
console.log(objetoLiteral.nombre);

let alumnos = [{
    nombre: "Eluney",
    edad: 20,
    curso: 'Fullstack',
    saludo: function(){
        return "hola como les va";
    }
},
{
    nombre: "Jerónimo",
    edad: 20,
    curso: 'Fullstack',
    saludo: function(){
        return "hola como les va";
    }
},{
    nombre: "Iza",
    edad: 20,
    curso: 'Fullstack',
    saludo: function(){
        return "hola como les va";
    }
}
];

for (let i=0; i<alumnos.length;i++){
    if(alumnos[i].nombre ==='Eluney'){
        console.log(alumnos[i]);
    }
}