(function () {
    // ...................Starter Manupulations..................
    var openBtn = document.getElementsByClassName("openBtn");
    var loginMenu = document.getElementById("loginMenu");
    openBtn[0].style.backgroundColor= "#0f74a8";
    openBtn[0].addEventListener('click', function (event) {
        loginMenu.style.display = "block";
    })
    // .................Register form..................
    var regMenu = document.getElementById("regMenu");
    var regMenuDiv = document.querySelector("#regMenu>div");
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
        if (!userManager.isUserExists(emailReg) &&
            userManager.isPasswordValid(passwordEntry) &&
            surname && name && (passwordEntry === passwordEntryConf)) {
            userManager.addUser(new User(name, surname, emailReg, passwordEntry));
            clearInputs(inputsReg);
            regMenu.style.display = "none";
            loginMenu.style.display = "block";
        } else {
            regMenu.children[0].children[0].children[1].innerHTML = "Невалидни или вече заети данни";
        }
    })
    openBtnReg.addEventListener("click", function (event) {
        loginMenu.style.display = "none";
        regMenu.style.display = "block";
    }, false);


    // ............Login form..................
    var remCheck = document.getElementById("remmemberMe");
    var login = document.querySelector("#loginMenu>div>button:nth-child(4)");
    var loginMenuDiv = document.querySelector("#loginMenu>div");
    var inputs = document.querySelectorAll("#loginMenu form input");
    var email = inputs[0].value.trim();
    var password = inputs[1].value.trim();
    var loginIcon = document.getElementById("login");
    if (localStorage.remmemberMe) {
        var jsonValue = localStorage.remmemberMe;
        var user = JSON.parse(jsonValue);
        inputs[0].setAttribute("value", user.email);
        inputs[1].setAttribute("value", user.password);
    }
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
            remmemberMe(email, password, remCheck.checked);
            findUserAccount(email);
            console.log(remCheck.checked);
            openBtn[0].style.display = "none";
            loginIcon.style.display = "block";
            loginMenu.style.display = "none";
        }
        event.preventDefault()
    }, false);
    var accMenu = document.getElementById("accMenu");
    accMenu.children[3].addEventListener("click", function () {
        accMenu.style.display = "none";
    }, false);
    accMenu.children[2].addEventListener("click", function () {
        location.reload(true);
    }, false)
    loginIcon.style.cursor = "pointer";
    loginIcon.addEventListener("click", function () {
        accMenu.style.display = "block";
    }, false)

    function findUserAccount(email) {
        var x = JSON.parse(localStorage['users']);
        x.some(function (u) {
            var loginAcc = document.createElement("span");
            if (email === u.email) {
                var user = x[x.indexOf(u)];
                loginMenuCreate(user);
            }
        })
    }

    function remmemberMe(email, password, boolean) {
        if (boolean) {
            var obj = {
                "email": email,
                "password": password
            };
            localStorage.setItem("remmemberMe", JSON.stringify(obj));
        }
    }

    function loginMenuCreate(user) {
        accMenu.children[0].innerText = " " + user.name + " " + user.surname;
        var loginAcc = document.createElement("span");
        var text = new Text(user.email);
        accMenu.children[1].innerHTML = " " + user.email;
        loginAcc.appendChild(text);
        loginAcc.style.lineHeight = "0.5em";
        loginAcc.style.height = "2em";
        loginAcc.style.paddingTop = "0.7em";
        loginAcc.style.paddingLeft = "0.5em";
        loginAcc.style.paddingRight = "0.5em";
        loginAcc.style.backgroundColor = "white";
        loginAcc.style.border = "1px solid #1f84b8";
        loginAcc.style.borderRadius = "0.5em";
        loginAcc.style.color = "#00a2e1";
        loginAcc.style.position = "relative";
        loginAcc.style.bottom = "5px";
        loginAcc.style.left = "35px";
        openBtn[0].parentNode.parentNode.appendChild(loginAcc);
    }

    // ........................Escape Manupulations.....................

    function escapeManup(formInput) {
        formInput.parentNode.addEventListener('click', function (event) {
            event = event || window.event;
            formInput.parentNode.style.display = "none";
        }, false);
        formInput.addEventListener("click", function (event) {
            event.stopPropagation();
        }, false);
    }
    escapeManup(loginMenuDiv);
    escapeManup(regMenuDiv);

    var ex = document.getElementById("exit");
    var ex1 = document.getElementById("exit1");
    ex.onclick = function () {
        loginMenu.style.display = "none";
    }
    ex1.onclick = function () {
        regMenu.style.display = "none";
        clearInputs(inputsReg);
    }
    loginIcon.addEventListener("click", function () {
        var loginInfo = document.createElement("div");

    }, false);
    var appearMenu = document.getElementById("appearMenu");
    escapeManup(appearMenu.children[0]);
    // ...................... Other Operations .........................

    function clearInputs(a) {
        for (var index = 0; index < a.length; index++) {
            var element = a[index];
            element.value = "";
            element.style.backgroundColor = "#efefef";
        }
    }
})();