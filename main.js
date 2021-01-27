//CONVERTS TEMPS FROM FAHRENHEIT//

function fromFahrenheit() {
    if ((document.getElementById("farValue").value).length == 0) {
     document.getElementById("celValue").value = "CELSIUS";
     document.getElementById("kelValue").value = "KELVIN";
    }
    else {
     document.getElementById("celValue").value = Math.round((document.getElementById("farValue").value - 32) / 1.8 * 100) / 100;
     document.getElementById("kelValue").value = Math.round(((document.getElementById("farValue").value - 32) / 1.8 + 273.15) * 100) / 100;
     }
 }
 //CONVERTS TEMPS FROM CELSIUS//
 function fromCelsius() {
     if ((document.getElementById("celValue").value).length == 0) {
         document.getElementById("farValue").value = "FAHRENHEIT";
         document.getElementById("kelValue").value = "KELVIN";
     }
     else {
         document.getElementById("farValue").value = Math.round((document.getElementById("celValue").value * 1.8 + 32) * 100) / 100;
         document.getElementById("kelValue").value = Math.round(((document.getElementById("celValue").value * 1) + 273.15) * 100) / 100;
     }
 }
  
 //CONVERTS TEMPS FROM KELVIN//
 function fromKelvin() {
     if ((document.getElementById("kelValue").value).length == 0) {
         document.getElementById("farValue").value = "FAHRENHEIT";
         document.getElementById("celValue").value = "CELSIUS";
     }
     else {
         document.getElementById("farValue").value = Math.round(((document.getElementById("kelValue").value - 273.15) * 1.8 + 32) * 100) / 100;
         document.getElementById("celValue").value = Math.round(document.getElementById("kelValue").value - 273.15 * 100) / 100;
     }
 }
 