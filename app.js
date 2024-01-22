// ejercicio 01
/* let numero = parseFloat(prompt("Ingrese un número:"));


if (numero > 0) {
    console.log("El número es positivo.");
} else (numero < 0) {
    console.log("El número es negativo.");
} */ 




//ejercicio 02

/* let numero1 = parseFloat(prompt("Ingrese el primer número:"));
let numero2 = parseFloat(prompt("Ingrese el segundo número:"));


if (numero1 < numero2) {
    console.log(numero1 , "es menor:");
} else {
    console.log(numero2 , "es menor:");
} */



// ejercicio 3

/* let numero = parseFloat(prompt("Ingrese un número:"));

if (numero % 2 === 0) {
    console.log(`${numero} es divisible entre 2.`);
} else {
    console.log(`${numero} no es divisible entre 2.`);
} */



// Ejercicio 04

/*  let numero = parseInt(prompt("Ingrese un número para calcular su factorial:"));

if (isNaN(numero) || numero < 0) {
    console.log("Por favor, ingrese un entero positivo.");
} else {
    // Calcular el factorial del número
    let factorial = 1;
    for (let i = 2; i <= numero; i++) {
        factorial *= i;
    }

    console.log(`El factorial de ${numero} es: ${factorial}`);
} */ 

//Ejercicio 05

/* for (let i = 1; i <= 15; i++) {
    
    if (i % 2 === 0) {
        console.log(`${i} es un número par.`);
    } else {
        console.log(`${i} es un número impar.`);
    }
} 


//ejrcicio06

/*  let primerNumero = parseInt(prompt("Ingrese el primer número entre 1 y 50:"));
let segundoNumero = parseInt(prompt("Ingrese el segundo número entre 1 y 50:"));


if (isNaN(primerNumero) || isNaN(segundoNumero) || primerNumero < 1 || primerNumero > 50 || segundoNumero < 1 || segundoNumero > 50) {
    console.log("Por favor, ingrese dos números válidos entre 1 y 50.");
} else {
    
    for (let i = 1; i <= 50; i++) {
        if (i === primerNumero || i === segundoNumero) {
            console.log(`${i} ¡Lotería!`);
        } else {
            console.log(i);
        }
    }
} */ 

//ejercicio 07

/* for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
} */

//Ejercicio 08
 
/* let calificacion = parseFloat(prompt("Ingrese una calificación entre 1 y 10:"));

if (isNaN(calificacion) || calificacion < 1 || calificacion > 10) {
    console.log("Error: Ingrese una calificación válida entre 1 y 10.");
} else {
    
    if (calificacion < 6) {
        console.log("Reprobado");
    } else if (calificacion >= 6 && calificacion <= 8) {
        console.log("Regular");
    } else if (calificacion === 9) {
        console.log("Bien");
    } else {
        console.log("Excelente");
    }
} */

//Ejercicio 09

/* let topping = prompt("Seleccione un topping: oreo, KitKat, brownie (o ingrese 'ninguno' para helado sin topping):");
let precioBase = 50;


switch (topping.toLowerCase()) {
    case 'oreo':
        precioBase += 10;
        break;
    case 'kitkat':
        precioBase += 15;
        break;
    case 'brownie':
        precioBase += 20;
        break;
    case 'ninguno':
        
        break;
    default:
        console.log("No tenemos este topping, lo sentimos.");

        console.log(`Precio del helado sin topping: ${precioBase} MXN`);
        process.exit();
}

console.log(`Precio total del helado: ${precioBase} MXN`); */ 