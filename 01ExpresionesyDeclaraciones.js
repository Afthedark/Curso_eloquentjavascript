

// ------------------------VARIABLES
/*
let ten = 10
console.log(ten * ten)
*/


/*
let mood = "light"
console.log(mood)
//Primero ejecuta el primer variable, despues el segundo
mood = "dark"
console.log(mood)
*/


/*
let luigisDebt = 140 //Saldo actual luigis
luigisDebt = luigisDebt - 35 //Descontar del saldo actual que te debe Luisguis los 35$
console.log(luigisDebt)
*/


/*
//Una sola instrucción let puede definir múltiples enlaces. Las definiciones deben estar separadas por comas.
let one = 1, two = 2
console.log(one + two)


let Name = 'Luis'
let lastname = ' garey'
console.log(Name + lastname)
*/

/*
let x = 30;
console.log("El valor de x es:", x);
// → el valor de x es 3
*/


// -----------------------FUNCIONES
//prompt("Enter passcode");


/*
console.log(Math.max(2, 8))
console.log(Math.min(2, 4) + 100)
*/



// ----------------Control de flujo
/*
let elNumero = Number(prompt("Elige un numero"))
console.log("La raiz cuadrada del numero que elegiste es: ", elNumero * elNumero)
*/


/*
let elNumero = Number(prompt("Elige un numero"))
if (!Number.isNaN(elNumero)){ // !Number.isNaN = Si es diferente ! a Numero(Number) entonces es is NaN(No definido)
console.log("La raiz cuadrada del numero que elegiste es: ", elNumero * elNumero)
}
*/

/*
if (1+1 == 2) console.log("Es verdad")
*/


/*
let elNumero = Number(prompt("Elige un numero"))
if (!Number.isNaN(elNumero)){
    console.log("La raiz cuadrada del numero que elegiste es: ", elNumero * elNumero)
}
else{
    console.log("Oye por que no me diste un numero ?")
}
*/


/*
let num = Number(prompt("Elige un numero"))

if (num < 10){
    console.log("Es pequeño")
} 
else if(num < 100){
    console.log("Es mediano")
}
else{
    console.log("Es grande")
}
*/



// ----------------------- BUCLES WHILE Y DO

/*
let numero = 0
while (numero <= 12){
    console.log(numero) //En este caso, mientras numero sea menor o igual a 12, seguirá ejecutando el bloque de código.
    numero = numero + 2 //Esto aumenta el valor de numero en 2 cada vez que se ejecuta el bucle.
}
*/

/*
let result = 1
let counter = 0 
while (counter < 10){
    result = result * 2  // Esto lo que se ejecutara dentro del bucle while
    counter = counter + 1
}

console.log(result)
*/



// --------------- Sangrado de Código
/*
if (false != true){
    console.log("Tiene sentido")
    if (1 < 2){
        console.log("No hay sorpresas ahi")
    }
}
*/


// ---------------------- BUCLES FOR

/*
for (let numero = 0; numero <= 12; numero = numero +2){ // contara desde 0,2,4 hasta 12
    console.log(numero)
}
*/


/*
let resultado = 1
for (let contador = 0; contador < 10; contador = contador + 1){
    resultado = resultado * 2
}

console.log(resultado)
*/



// --------------- SALIENDO DE UN BUCLE
/*
for (let actual = 20; ; actual = actual + 1){
    if(actual % 7 == 0){
        console.log(actual)
        break
    }
}
*/

// -------------  Actualización concisa de enlaces


for (let number = 0; number <= 12; number += 2){
    console.log(number) // contara desde 0,2,4 hasta 12
}



/*
Continuar aqui:

Despachar un valor con switch
https://www.eloquentjavascript.es/02_program_structure.html
*/

