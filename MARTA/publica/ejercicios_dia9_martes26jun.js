/* EJERCICIO 1 -
   Diseña un algoritmo que cuente las veces que aparece una determinada letra en una frase.
*/

//Me devuelve el texto desde la posicion 0 a la posicion 5
var mitexto = "Lorem ipsum dolor sit amet"
console.log("(0,5): "    + mitexto.substr(0,5));

// Me da la posicion de la letra a
"Lorem ipsum dolor sit amet, consectetur adipiscing elit.".indexOf("a") //22

//entonces el ejercicio seria
var mitexto = "Lorem ipsum dolor sit amet"
var coincidencias = 0

for (var i = 0; i < mitexto.length; i++) {
  //con esto me dice el numero de caracteres que tiene mi texto
  console.log (i)
  //con charAt le digo que letra hay en cada posicion
  console.log("El carácter (posición) '" + mitexto.charAt(i) + "'")
  //voy a crear una variable con el valor del caracter
  var caracter = mitexto.charAt(i)
  if (caracter === "a"){
    console.log ("mi caracater si es a");
    coincidencias = coincidencias+1;
  }else {
    console.log ("mi caracater no es a");
  }
}
console.log ("mis coincidencias seran: ", coincidencias);