// Ejercicio #4
// FizzBuzz
// Tu tarea es escribir un programa que recorra los números del 1 al n. Para cada número:
// Si el número es divisible por 3, debes imprimir "Fizz".
// Si el número es divisible por 5, debes imprimir "Buzz".
// Si el número es divisible tanto por 3 como por 5, debes imprimir "FizzBuzz".
// Si el número no es divisible ni por 3 ni por 5, debes imprimir el número tal cual.
// Para lograrlo debes implementar una función llamada fizzBuzz(n), que tome como
// parámetro un número entero n y ejecute el juego FizzBuzz.


function FizzBuzz (n){

    let arreglo = [];
    
        for(let i=1; i <=n; i ++){
    
        if(i % 3 == 0 && i % 5 == 0){
            arreglo.push("FizzBuzz")
            }else if( i % 5==0){
                arreglo.push("Buzz")
            }else if(i % 3==0){
                arreglo.push("Fizz")
            }else{
                arreglo.push(i)
            }      
        } 
        
        return arreglo
    }
    console.log(FizzBuzz(15));