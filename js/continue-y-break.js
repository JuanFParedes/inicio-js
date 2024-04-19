// Iteracion con continue

let cuentraAtras = 10

while (cuentraAtras > 0){
    cuentraAtras = cuentraAtras -1

    // si la cuenta atras es un numero par...
    if (cuentraAtras % 2 === 0){
        continue //<----- saltamos a la siguiente iteracion
    }

    console.log(cuentraAtras)
}