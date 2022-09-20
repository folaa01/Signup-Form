const form = document.getElementById("form");
const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname")
const password = document.getElementById("password")
const Email = document.getElementById("email")

// show input error message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const Small = formControl.querySelector("small")
    Small.innerText = message;
}

// show success outline
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}


// Check email is valid

function isValidEmail(Email) {
    const re  = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(Email).toLocaleLowerCase());
}


// Event listeners
form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (firstName.value === '') {
        showError(firstName, 'First Name cannot be empty');
    } else {
        showSuccess(firstName);
    }

    if (lastName.value === '') {
        showError(lastName, 'Last Name cannot be empty');
    } else {
        showSuccess(lastName);
    }

    if (Email.value === '') {
        showError(Email, 'Looks like this is not an email');
        Email.value = "email@example/com";
        Email.style.color = "var(--error-color)";
    } else if (!isValidEmail(Email.value)) {
        showError(Email, 'Looks like this is not an email');
    }
    else {
        showSuccess(Email);
    }

    if (password.value === '') {
        showError(password, 'Password cannot be empty');
    } else {
        showSuccess(password);
    }
});


