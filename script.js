const form = document.forms[0];
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = form[0].value;
    const errorMsg = document.getElementById("error-message");
    if(errorMsg){
        errorMsg.remove();
    }
    if (! email.includes("@")) {
        form.innerHTML += 
        `<p id="error-message">Oops! Please check your email</p>`
    }
    
})
