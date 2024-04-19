/*
Estructura basica de el ciclo while
    while (condición){
        //condigo a ejecutar mientras se cumpla la condición    
    }
*/
let cuentaAtras = 10

while (cuentaAtras > 10){
    console.log(cuentaAtras)
    cuentaAtras = cuentaAtras - 1


    // si la cuentra atras es 5, salimos del bucle
    if (cuentaAtras === 5){
        break // <---- asi salimos del bucle
    }
}