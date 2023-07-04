// Escribe una función que acepte un array con 10 números enteros positivos
// (entre 0 y 9) y devuelva una cadena de texto con esos números en forma de
// número de teléfono.
// Ejemplo:
// *createPhoneNumber([5, 5, 5, 1, 3, 4, 7, 8, 9, 0]) => devuelve "(555) 134-
// 7890"
// *createPhoneNumber([3, 0, 5, 1, 2, 7, 7, 2, 4, 9]) => devuelve "(305) 127-
// 7249"
// El formato del número de teléfono devuelto debe ser correcto para completar
// este desafío. ¡No olvides el espacio después del paréntesis de cierre!

function createPhoneNumer(numero){

    if (numero.length === 10){
        numero.splice(0,0, "(");
        numero.splice(4,0, ")");
        numero.splice(5,0, " ");
        numero.splice(9,0, "-");
        let strnum = numero.join("");
        console.log(strnum)
    }else{
        console.log("Su numero no tiene 10 enteros positivos")
    }
}
createPhoneNumer([1,2,3,4,5,6,7,8,9,1])
