//Get Element by id
const registrationForm = document.getElementById("registrationForm");
const inputUsername = document.getElementById("username");
const inputEmail = document.getElementById("email");
const inputPassword = document.getElementById("password");
const inputConfirmPassword = document.getElementById("confirmPassword");
const addSubmitButton = document.getElementById("submit");
const errorMessages = document.querySelectorAll(".error-message");




//localStorage
function display() {
    const input = document.getElementById("username");
    localStorage.setItem("inputUsername", input.value);

}


//adding real time validation


//
registrationForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const messages = []
    errorMessages.forEach((message) => (message.innerText = ""))

    const elements = [inputUsername,
        inputEmail, 
         inputPassword, 
         inputConfirmPassword];

    elements.forEach((element, index) => {
        switch (element.name) {
            case "username":
                if (!element.value || element.value === "") {
                    messages.push("Enter Username");
                    errorMessages[index].innerText = "Enter Username"
                }
                break;


            case "email":
                if (!element.checkValidity()) {
                    messages.push("Enter Email");
                    errorMessages[index].innerText = "Enter a valid email"

                }
                break;

                case "password":
                if (!element.value.length < 8) {
                    messages.push("Enter valid Password");
                    errorMessages[index].innerText = "Enter a valid 8 character password that meet requirements"
                }
                break;


            case "confirmPassword":
                if (element.value !== inputPassword.value) {
                    messages.push("Passwords do not match");
                    errorMessages[index].innerText = "Passwords do not match! Passwords must match!"
                }
                break;

        }
    });

   

})