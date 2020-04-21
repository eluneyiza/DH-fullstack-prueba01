let doble = num1 => num1*2;
let triple = num1 => num1*3;
let apply = (num1,operacion) => operacion(num1);
console.log(apply(5,doble));