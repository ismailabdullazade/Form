/* const myPassword = document.querySelector('#password');
const myRepeatPassword = document.querySelector('#passwordRepeat');
const mySubmit = document.querySelector('.sign-up');

mySubmit.addEventListener('submit', myCheck);

function myCheck(e) {

    if (myPassword.value === myRepeatPassword.value) {
        e.preventDefault();
        mySubmit.removeAttribute(disabled);
        console.log("right");
    } else {
        mySubmit.setAttribute(disabled);
        console.log('false');
    }
} */

//Selectors

const mySubmit = document.querySelector(".sign-up");
const myPassword = document.querySelector('#password');
const myPasswordRepeat = document.querySelector('#passwordRepeat');
const myForm = document.querySelector('.myForm');
const myError = document.querySelector('.my-error');
const pswdError = document.querySelector('.pswderror');


//Events

myForm.addEventListener('submit', checkPassword);
myPassword.addEventListener('keyup', checkPower);

//Functions

function checkPower(e) {
    e.preventDefault(e);
    // let p = myPassword.value.length;
    /* switch (p) {
        case 6:
            pswdError.innerHTML = "Weak password"

            break;
        case 9:
            pswdError.innerHTML = "Strong password"
            break;
        case 12:
            pswdError.innerHTML = "Very Strong password"
            break;
        default:
            break;
    }
 */


    let p = myPassword.value.length;

    if (p < "6") {
        pswdError.innerHTML = "Weak password";
    } else if (p > "5" && p < "10") {
        pswdError.innerHTML = "Strong password";
    } else {
        pswdError.innerHTML = "Very Strong password"
    }

}


function checkPassword(e) {
    e.preventDefault();
    if (myPassword.value === myPasswordRepeat.value) {
        myError.innerHTML = "all right";
    } else {
        myError.innerHTML = "false"
    }
}