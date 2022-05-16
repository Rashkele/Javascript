/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */

window.onload = function () {
    let clickCount = document.getElementById("btn__element");
    clickCount.onclick = incrementClick;
}
let counterValue= 0;
incrementClick = function() {
    updateDisplay(++counterValue);
}
function updateDisplay(val) {
    document.getElementById("btn__state").innerHTML = val;
}