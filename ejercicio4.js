"use strict";

let promedioEdadGeneral, promedioEdadMujeres, promedioEdadHombres;
let encuestados = 0, edadGeneral = 0;
let mujeresEncuestadas = 0, edadMujeres = 0;
let hombresEncuestados = 0, edadHombres = 0;
let porcentajeMujeresMenores = 0, porcentajeHombresMayores = 0;
let mayorEdadMujeres = Number.NEGATIVE_INFINITY, menorEdadHombres = Number.POSITIVE_INFINITY;

do {
    /*do {
        var ciudad = prompt(`Ingresa su ciudad`);
    
        var flagCiudad;
        if (isNaN(ciudad)){
            flagCiudad = true;
        } else {
            flagCiudad = false;
            alert(`Qué ingreses una ciudad!!! -_-`);
        }
    } while (!flagCiudad);*/
    
    do {
        var sexo = prompt(`Ingresa tu sexo (H: Hombre y M: Mujer)`).toUpperCase();
    
        var flagSexo;
        if (sexo == "H" || sexo == "M"){
            flagSexo = true;
        } else {
            flagSexo = false;
            alert(`Qué ingreses H para hombre y M para mujer!!! -_-`);
        }
    } while (!flagSexo);

    
    do {
        var edad = parseInt(prompt(`Ingresa tu edad`));
    
        var flagEdad;
        if (edad >= 0 && edad <= 110){
            flagEdad = true;
        } else {
            flagEdad = false;
            alert(`Qué ingreses un número!!! -_- Uno entre 0 y 110`);
        }
    } while (!flagEdad);

    encuestados ++;
    edadGeneral += edad;

    if (sexo == "M"){
        mujeresEncuestadas ++;
        edadMujeres += edad;

        if (edad < 21){
            porcentajeMujeresMenores ++;
        }

        if (edad > mayorEdadMujeres){
            mayorEdadMujeres = edad;
        }
    } else if (sexo == "H"){
        hombresEncuestados ++;
        edadHombres += edad;

        if (edad > 21){
            porcentajeHombresMayores ++;
        }

        if (edad < menorEdadHombres){
            menorEdadHombres = edad;
        }
    }
} while(confirm(`¿Quieres encuestar otra persona?`));

alert(`El promedio de edad general de los encuestados es: ${promedioEdadGeneral = edadGeneral / encuestados} años`);

alert(`El promedio de edad de las mujeres encuestadas es: ${promedioEdadMujeres = edadMujeres / mujeresEncuestadas} años`);

alert(`El promedio de edad de los hombres encuestados es: ${promedioEdadHombres = edadHombres / hombresEncuestados} años`);

alert(`El porcentaje de las mujeres menores a 21 años es: ${porcentajeMujeresMenores / mujeresEncuestadas}%`);

alert(`El porcentaje de los hombres mayores a 21 años es: ${porcentajeHombresMayores / hombresEncuestados}%`);

alert(`La mayor edad ingresada de las mujeres encuestadas es: ${mayorEdadMujeres}`);

alert(`La menor edad ingresada de los hombres encuestados es: ${menorEdadHombres}`);

/*
G: 39.9

M: 11 - 42 - 23 - 74 - 95 = 49 / 0.2%

H: 15 - 32 - 18 - 24 - 65 = 30.8 / 0.6%

95

15
*/