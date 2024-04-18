// console.log('Hola JS');
// console.error('Esto es un error');
// console.info('Mensaje informatico');
// console.warn('Mensaje de advertencia');
/* let numero = 10;
let numero2 = Number;
numero2 = 'hola';
console.log(typeof(numero2)); */
let edad = 17;
// if ( edad >= 18){
//     console.log('Es mayor de edad');
// } else{
//     console.log('Es menor de edad')
// }
if (( edad >= 1) && (edad < 11)){
    //Las expresiones
} else if ((edad >= 11) && (edad < 18)){
    //Las otras expresiones
} else if ((edad >= 18)&& (edad < 51)){
    //otras expresiones
} else{
    //Aqui termina
}

let dia = new Date.getDay();
switch (dia){
    case 1:
        console.log('Hoy es lunes :) ')
        break;
    case 2:
        console.log('Hoy es martes :) ')
        break;
    case 3:
        console.log('Hoy es miercoles :) ')
        break;
    case 4:
        console.log('Hoy es juernes :) ')
        break;
    case 5:
        console.log('Hoy es viernes :) ')
        break;
    case 6:
        console.log('Hoy es sabado :) ')
        break;
}
console.log(dia);

