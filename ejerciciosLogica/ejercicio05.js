// Ejercicio #5
// Dibujando una X con asteriscos

// Tu tarea es escribir un programa que dibuje una X utilizando asteriscos (*). La
// X debe tener un tamaño variable según el número ingresado.
// Debes implementar una función llamada drawX(tamano), donde el parámetro
// tamano es un número entero y dibuje la X correspondiente.


function drawX(tamano) {
    if (tamano < 2 || tamano % 2 === 0) {
        console.log("El tamaño debe ser un número impar mayor o igual a 3.");
        return;
    }

    var linea = Array(tamano + 1).join("*");

    for (var i = 0; i < tamano; i++) {
    var x = "";
    for (var j = 0; j < tamano; j++) {
        if (j === i || j === tamano - i - 1) {
            x += "*";
    } else {
        x += " ";
        }
    }
    console.log(x);
    }
}
drawX(7);
