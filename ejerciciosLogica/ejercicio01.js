// Ejercicio_1: En este desafío, se te pide que crees una función llamada "next_pal()"
// quereciba como parámetro un número entero positivo, tu objetivo es que 
// lafunción retorné el siguiente número palíndromo a partir del recibido porparámetro.

function next_pal(numero){
    if(numero > 0 && numero/numero === 1){
        while(true){
            numero++
            let strNumero = numero.toString();
            let reverStrNumero = strNumero.split('').reverse().join('');
    
            if (strNumero === reverStrNumero){
                console.log(strNumero);
                break;
            }
        }
    }else{
        console.log("Ingresa numeros enteros positivos")
    }
    
}

next_pal(11);
next_pal(188);
next_pal(191);
next_pal(2541);