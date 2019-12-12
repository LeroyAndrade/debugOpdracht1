//selecteer eerst gedifineerde button [0]
let button = document.querySelector('button');

//selecteer eerst gedifineerde paragraph [0]
let label = document.querySelector('p');

//wanneer 'klik' wordt doorgegeven aan DOM dan roep je onClick aan
button.addEventListener('click', onClick);

//defineer teller met de waarde nul
let teller = 0;

//defineer teller met de waarde NULL, '' in plaats van NULL zodat er niet direct een error verschrijnt, omdat de waarde nog moet worden opphehaald
let message = "";

//zolang count kleiner is dan 10, tel je +=1 in count
function onClick()
{
  for (let count = 0; count < 10; count++)
  {
  //herhaal alles in forloopCheck uit zolang count kleiner 10
      forloopCheck(count);
  }
  //zolang teller kleiner is dan 10 dan:
  while (teller < 10)
  {
  // tel voer je whileloopCheck uit
      teller = whileloopCheck(teller); //deze functie herhaalt zichzelf

  //bericht heeft waarde null, daar voeg je het volgende bericht aan toe:
      message += "Loop teller is: " + teller + "<br />" ;

  //log resultaat in de console
      console.log("Loop teller is: " + teller);
  }
  //bericht heeft waarde null, daar voeg je het volgende bericht aan toe:
  message += "Ik verlaat de loop";
  label.innerHTML = message;
}

function forloopCheck(count)
{
  if (count == 10) {
    message += "Ik verlaat de loop" + "<br/>"+"<br/>";
    console.log("Ik verlaat de loop");
  } else {
    message += "Loop teller is: " + count + "<br />" ;
    console.log("Loop teller is: " + count);
  }
}

function whileloopCheck(count) {
    count++;
    return count;
}
