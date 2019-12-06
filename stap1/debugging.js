let button = document.querySelector('button');
button.addEventListener('click', onClick);
let label = document.querySelector('p');

let teller = 0;
let message = "";

function onClick() {

    for (let count = 0; count < 10; count++) {
        forloopCheck(count);
    }

    while (teller < 10) {
        teller = whileloopCheck(teller);

        message = message + "Loop teller is: " + teller + "<br />" ;
        console.log("Loop teller is: " + teller);

    }
    message = message + "Ik verlaat de loop"
    label.innerHTML = message;

}

function forloopCheck(count) {

    if (count = 10) {
        message = message + "Ik verlaat de loop" + "<br /><br />" ;
        console.log("Ik verlaat de loop");
    } else {
        message = message + "Loop teller is: " + count + "<br />" ;
        console.log("Loop teller is: " + count);
    }
}

function whileloopCheck(count) {
    count++;
    return count;
}





