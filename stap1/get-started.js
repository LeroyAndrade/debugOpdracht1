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

function onClick() {
  if (inputsAreEmpty()) {
    label.textContent = 'Error: one or both inputs are empty.';
    return;
  }
  updateLabel();
}
function inputsAreEmpty() {
  if (getNumber1() === '' || getNumber2() === '') {
    return true;
  } else return false;

}
function updateLabel() {
  let addend1=getNumber1();
  let addend2=getNumber2();
//  let sum = addend1.toFixed(2) + parseInt(addend2).toFixed(2);//var sum = addend1 + addend2;

let nCount = (addend1+addend2);
let sumTotaal = nCount.toFixed(2);

//  label.textContent = "addend1" + ' + ' + "addend2" + ' = ' + sum.toFixed(2);

console.log(sumTotaal);
}
function getNumber1() {
 return parseFloat(inputs[0].value);
}
function getNumber2() {
  return parseFloat(inputs[1].value);
}
let inputs = document.querySelectorAll('input');
let label = document.querySelector('p');
let button = document.querySelector('button');
button.addEventListener('click', onClick);
