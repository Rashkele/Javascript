/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
function converteris() {
     lb= document.getElementById("search").value * 2.2046;
    g = document.getElementById("search").value  / 0.0010000;
    oz= document.getElementById("search").value * 35.274;
    str= 'lb= '+ lb+ '<br>g= '+ g+ '<br>oz= '+ oz;
     document.getElementById("output").innerHTML =str; 
   }