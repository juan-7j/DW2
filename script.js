// Declaración de variables con let
let edad = 25;
let nombre = "Carlos";
let altura = 1.75;
let peso = 70;
let temperatura = 36.6;
let dinero = 100;
let dia = "Lunes";
let hora = 8;
let esMayorDeEdad = true;
let nacionalidad = "Colombiana";

// Declaración de variables con const
const PI = 3.1416;
const pais = "Colombia";
const numeroMaximo = 100;
const velocidadLuz = 299792458; 
const gravedad = 9.8; 

// Operaciones con las variables
let indiceMasaCorporal = peso / (altura * altura); // Cálculo del IMC
let esMayorEdad = edad >= 18 ? "Mayor de edad" : "Menor de edad"; // Operador ternario
let mensaje = dinero >= 50 ? "Tienes suficiente dinero" : "No tienes suficiente dinero"; // Operador ternario
let areaCirculo = PI * (altura / 2) ** 2; // Cálculo del área de un círculo

// Resultados
console.log("IMC:", indiceMasaCorporal);
console.log(esMayorEdad);
console.log(mensaje);
console.log("Área del círculo:", areaCirculo);


