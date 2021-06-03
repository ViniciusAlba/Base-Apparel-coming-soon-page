const email = document.getElementById("email");
const submit = document.getElementById("submit");
const error = document.getElementById("error");
const messageError = document.getElementById("messageError");


//When the button is clicked and the input is empty we have some warning
//The same happens when the button is clicked and isn't a email.
submit.addEventListener("click", (e) => {

    if (email.validity.typeMismatch || email.value == '') {

        event.preventDefault();
        error.style.opacity = "1";
        messageError.style.opacity = "1";
        email.style.border = "1px solid red";

    } else {

        error.style.opacity = "0";
        messageError.style.opacity = "0";
        email.style.border = "1px solid #CCC";

    }

});
