(function () {

    // ...................Starter Manupulations..................
    var openBtn = document.getElementsByClassName("openBtn");
    var loginMenu = document.getElementById("loginMenu");
    openBtn[1].addEventListener('click', function (event) {
        loginMenu.style.display = "block";
    })
    // .................Register form..................
    var regMenu = document.getElementById("regMenu");
    var openBtnReg = document.querySelector("#loginMenu>div button:nth-child(7)");
    var regButton = document.querySelector("#regMenu>div button:nth-child(7)");
    var inputsReg = document.querySelectorAll("#regMenu div input");

    regButton.addEventListener('click', function (event) {
        event = event || window.event;
        var name = inputsReg[0].value.trim();
        var surname = inputsReg[1].value.trim();
        var emailReg = inputsReg[2].value.trim();
        var passwordEntry = inputsReg[3].value.trim();
        var passwordEntryConf = inputsReg[4].value.trim();
        inputsReg[2].addEventListener('blur', function (event) {
            if (userManager.isUserExists(emailReg)) {
                inputsReg[4].style.border = "1px solid red";
                inputsReg[4].placeholder = "Existed user!";
            }
        }, false)
        inputsReg[2].addEventListener('focus', function (event) {
            if (userManager.isUserExists(emailReg)) {
                inputsReg[4].style.border = "1px solid #dfdfdf";
                inputsReg[4].placeholder = "Email";
            }
        }, false)
        inputsReg[3].addEventListener('blur', function (event) {
            if (!userManager.isPasswordValid(passwordEntry)) {
                inputsReg[3].style.border = "1px solid red";
                inputsReg[3].placeholder = "Too short password";
            }
        }, false)
        inputsReg[3].addEventListener('focus', function (event) {
                inputsReg[3].style.border = "1px solid #dfdfdf";
                inputsReg[3].placeholder = "Password";
        }, false)
        inputsReg[4].addEventListener('blur', function (event) {
            if (passwordEntry !== passwordEntryConf) {
                inputsReg[4].style.border = "1px solid red";
                inputsReg[4].placeholder = "please enter same password";
            }
        }, false)
        inputsReg[4].addEventListener('focus', function (event) {
                inputsReg[4].style.border = "1px solid #dfdfdf";
                inputsReg[4].placeholder = "Password repeat";
        }, false)
        if (!userManager.isUserExists(emailReg) &&
            userManager.isPasswordValid(passwordEntry) &&
            surname && name && (passwordEntry === passwordEntryConf)) {
            userManager.addUser(new User(name, surname, emailReg, passwordEntry));
            console.log(users);
        }

        regMenu.style.display = "none";
    })
    openBtnReg.addEventListener("click", function (event) {
        loginMenu.style.display = "none";
        regMenu.style.display = "block";
    }, false);


    // ............Login form..................
    var login = document.querySelector("#loginMenu>div>button:nth-child(4)");
    var inputs = document.querySelectorAll("#loginMenu form input");
    var email = inputs[0].value.trim();
    var password = inputs[1].value.trim();
    inputs[0].addEventListener('blur', function (event) {
        var email = inputs[0].value.trim();
        if (userManager.isUserExists(email) === false) {
            inputs[0].style.border = "1px red solid";
            inputs[0].style.color = "grey";
            inputs[0].value = "";
            inputs[0].placeholder = "Do you have registration?";
        }
        if (userManager.isUserExists(email) === true) {
            inputs[0].style.border = "1px solid #dfdfdf";
        }
    }, false);
    inputs[1].addEventListener("blur", function (event) {
        var password = inputs[1].value.trim();
        if (userManager.isCorrectPassword(password) === false) {
            inputs[1].style.border = "1px red solid";
            inputs[1].value = "";
            inputs[1].placeholder = "Incorrect password!";
        }
        if (userManager.isCorrectPassword(password) === true) {
            inputs[1].style.border = "1px solid #dfdfdf";
        }
    }, false);
    login.addEventListener('click', function (event) {
        event = event || window.event;
        var email = inputs[0].value.trim();
        var password = inputs[1].value.trim();
        if (userManager.loginUser(email, password)) {
            console.log("bravo");
            loginMenu.style.display = "none";
        }
        event.preventDefault()
    }, false)
})();