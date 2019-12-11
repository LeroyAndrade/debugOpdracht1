/* Copyright [2019] [Andrade Leroy]

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License. */ /* Bron origineel document: https://developers.google.com/web/tools/chrome-devtools/javascript/ */

//declareer variabelen

//pakt ieder input en zet het in een array, tellend vanaf 0
let inputs = document.querySelectorAll('input');

//pakt ieder paragraph en zet het in een array, tellend vanaf 0
let label = document.querySelector('p');

//pakt ieder button en zet het in een array, tellend vanaf 0
let button = document.querySelector('button');

//verteld dat wanneer er op 'een' button wordt gedrukt, de onClick functie wordt opgeroepen
button.addEventListener('click', onClick);

//wanneer de inputvelden leeg zijn dan vertel je gast de volgende error:
function onClick() {
  if (inputsAreEmpty()) {
    //error tekst:
    label.textContent = 'Error: one or both inputs are empty.';
    return;
  }
  //ga naar functie updateLabel
  updateLabel();
}

function inputsAreEmpty() {
  if (getNumber1() === '' || getNumber2() === '') {
    return true;
  } else return false;
}

//declareer waarde van input 0 en input1 en koppel ze aan de functie.
//de functie is waar de waarde in komt te staan van de input form

//Verder zal de updateLabel de totale som uitrekenen tot de tweede decimaal
function updateLabel() {
  let addend1=getNumber1();
  let addend2=getNumber2();
//  let sum = addend1.toFixed(2) + parseInt(addend2).toFixed(2);//var sum = addend1 + addend2;

//tel beide variabelen bij elkaar op
let nCount = (addend1+addend2);

//vertel dat de uitkomst van het zojuist berekende getal, twee decimalen laat zien. toFixed(3) laat tot de honderdste de berekening zien.
let sumTotaal = nCount.toFixed(2);

//Laat de rekensom zien op het scherm van de gast
label.textContent=sumTotaal;

//Plaats resultaat van de som in de console
console.log(sumTotaal);
}

//via ParseFloat worden alle cijfers na de komma, meegenomen. in UpdateLabel trim je dit naar twee
function getNumber1() {
//er zijn twee input velden en de eerste begint bij 0, dus vertel je:
//neem de hele getal en verwijder niets, dan doe je ook bij getNumber2
//om het vervolgens in UpdateLabel te trimmen naar xy.z2
 return parseFloat(inputs[0].value);
}
function getNumber2() {
  return parseFloat(inputs[1].value);
}
