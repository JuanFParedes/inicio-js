// La recursividad es un concepto que se refiere  a l capacidad de una funcion para llamarse a si misma.

function cuentaAtras(numero){
    // Condicion base: Si el numero que recibe es menor  a 0 entonces  salimosde la funcion
    if (numero < 0){return}
    // Si el numero era mayor o igual a 0,  lo mostramos
    console.log(numero)
    // Y llamamos a la funcion con el numero anterior
    cuentaAtras(nume - 1)
}