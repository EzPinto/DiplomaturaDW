var num1 = parseInt(prompt("Ingrese un numero"));
var num2 = parseInt(prompt("Ingrese otro numero"));
var num3 = parseInt(prompt("Ingrese otro numero"));
var num4 = parseInt(prompt("Ingrese otro numero"));
var num5 = parseInt(prompt("Ingrese otro numero"));
var num6 = parseInt(prompt("Ingrese otro numero"));
var numMax = 0;
var numeros = [num1, num2, num3, num4, num5, num6];

for (i=0; i < numeros.length; i++) {
   if (numeros[i] > numMax)  {
       numMax = numeros[i];
   }
}
document.write(numMax);
