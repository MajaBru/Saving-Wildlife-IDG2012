const nameInput = document.querySelector('.name-field')
const nameErr = document.querySelector('.error-name');
const emailInput = document.querySelector('.email-field')
const emailErr = document.querySelector('.error-email');
const textInput = document.querySelector('textarea')
const textfieldErr = document.querySelector('.error-textfield');
const submitBtn = document.querySelector('.submit-btn');


  submitBtn.addEventListener('click', () => {
    // using validity.valid. In the lab we had about forms, there was an example which was using this.
    if(nameInput.validity.valid) { 
        nameErr.style.display = "none";
        nameInput.removeAttribute("aria-describedby", "fname-error");
    } else {
        nameErr.style.display = "block";
        nameInput.setAttribute("aria-describedby", "fname-error"); // will only say error in SR if the error is present
        nameInput.focus();
    }

    if(emailInput.validity.valid) {
        emailErr.style.display = "none";
        emailInput.removeAttribute("aria-describedby", "email-error");
    } else {
        emailErr.style.display = "block";
        emailInput.setAttribute("aria-describedby", "email-error");
        emailInput.focus();
    }
    
    if(textInput.validity.valid) {
        textfieldErr.style.display = "none";
        textInput.removeAttribute("aria-describedby", "text-error");
    } else {
        textfieldErr.style.display = "block";
        textInput.setAttribute("aria-describedby", "text-error");
        textInput.focus();
    }
});