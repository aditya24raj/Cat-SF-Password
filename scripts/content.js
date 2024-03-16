const showPasswordCheckbox = document.createElement("input");
showPasswordCheckbox.type = "checkbox";
showPasswordCheckbox.id = "show-password-checkbox";
showPasswordCheckbox.addEventListener("click", (event) => {
    const passwordElement = document.querySelector("form[id='login_form'] input[id='password']");
    if (event.currentTarget.checked) {
        passwordElement.setAttribute("type", "text");
    }
    else {
        passwordElement.setAttribute("type", "password");
    }
});

const showPasswordLabel = document.createElement("label");
showPasswordLabel.setAttribute("for", "show-password-checkbox");
showPasswordLabel.append("Show password");
showPasswordLabel.style.marginLeft = "3px";

const showPasswordContainer = document.createElement("div");
showPasswordContainer.append(showPasswordCheckbox);
showPasswordContainer.append(showPasswordLabel);
showPasswordContainer.style.marginBottom = "35px";
showPasswordContainer.style.display = "flex";
showPasswordContainer.style.alignItems = "center";


const passwordElement = document.querySelector("form[id='login_form'] input[id='password']");
passwordElement.parentNode.insertBefore(showPasswordContainer, passwordElement.nextSibling);
