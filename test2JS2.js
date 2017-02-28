function Page() {
    this.heading = "";
    this.text = "";
}

Page.prototype.addText = function (text) {
    if (!(typeof text == "string")) {
        console.log("Please put a string into the function.");
        return;
    }
    this.text += text;
}

Page.prototype.deleteText = function () {
    this.text = "";
}

Page.prototype.viewPage = function () {
    return this.heading + "\n" + this.text;
}

Page.prototype.searchWord = function (word) {
    if (!(typeof word == "string")) {
        console.log("Please put a string into the function.");
        return;
    }
    if (this.text.indexOf(word) !== -1) return true;
    return false;
}

Page.prototype.searchNumber = function () {
    var arrayText = this.text.split("");
    var flag = false;
    for (var index = 0; index < arrayText.length; index++) {
        if (!isNaN(arrayText[index])) {
            flag = true;
            break;
        }
    }
    return flag;
}

function SimpleNotepad(numberOfPages) {
    this.numberOfPages = numberOfPages;
    this.pages = new Array(numberOfPages);
}

SimpleNotepad.prototype.addTextOnPage = function (pageNumber, text) {
    if (!(typeof pageNumber == "number") || pageNumber < 0 || pageNumber > this.pages.length + 1) {
        console.log("The page you are searching for does not exist.");
    }
    return;
    this.pages[pageNumber - 1].addText(text);
}

SimpleNotepad.prototype.deleteTextOnPage = function (pageNumber) {
    if (!(typeof pageNumber == "number") || pageNumber < 0 || pageNumber > this.pages.length + 1) {
        console.log("The page you are searching for does not exist.");
        return;
    }
    this.pages[pageNumber - 1].deleteText();
}

SimpleNotepad.prototype.replaceTextOnPage = function (pageNumber, text) {
    if (!(typeof pageNumber == "number") || pageNumber < 0 || pageNumber > this.pages.length + 1) {
        console.log("The page you are searching for does not exist.");
        return;
    }
    this.pages[pageNumber - 1].deleteText();
    this.pages[pageNumber - 1].addText(text);
}

SimpleNotepad.prototype.viewAllPages = function () {
    for (var index = 0; index < this.pages.length; index++) {
        console.log(this.pages[index].viewPage());
    }
}

SimpleNotepad.prototype.searchWord = function (word) {
    if (!(typeof word == "string")) {
        console.log("Please put a string into the function.");
        return;
    }
    var flagiftrue = false;
    for (var index = 0; index < this.pages.length; index++) {
        if (this.pages[index].searchWord(word)) {
            flagiftrue = true;
            break;
        }
    }
    console.log(flagiftrue);
}

SimpleNotepad.prototype.printAllPagesWithDigits = function () {
    for (var index = 0; index < this.pages.length; index++) {
        if (this.pages[index].searchNumber())
            console.log(this.pages[index].viewPage());
    }
}

function SecuredNotepad(numberOfPages, password) {
    if (!(typeof password == "string")) {
        console.log("Password needs to be a string.");
        return;
    }
    var flagUppercase = false;
    var flagLowercase = false;
    var flagNumber = false;
    var arrayPassword = password.split("");
    for (var index = 0; index < arrayPassword.length; index++) {
        if (!flagUppercase && arrayPassword[index] == arrayPassword[index].toUpperCase()) {
            flagUppercase = true;
            continue;
        }
        if (!flagLowercase && arrayPassword[index] == arrayPassword[index].toLowerCase()) {
            flagLowercase = true;
            continue;
        }
        if (!flagNumber && !(isNaN(arrayPassword[index]))) {
            flagNumber = true;
            continue;
        }
    }
    if (!flagUppercase || !flagLowercase || !flagNumber || password.length < 5) {
        console.log("Password needs to be atlest 5 characters long with an uppercase letter, lowercase letter and a number.");
        return;
    }
    this.password = password;
    SimpleNotepad.call(this, numberOfPages);
}

SecuredNotepad.prototype.addTextOnPage = function (password, pageNumber, text) {
    if (password == this.password) {
        SimpleNotepad.prototype.addTextOnPage.call(this, pageNumber, text)
    } else {
        console.log("Incorect password");
    }
}

SecuredNotepad.prototype.deleteTextOnPage = function (password, pageNumber) {
    if (password == this.password) {
        SimpleNotepad.prototype.deleteTextOnPage.call(this, pageNumber);
    } else {
        console.log("Incorect password");
    }
}

SecuredNotepad.prototype.replaceTextOnPage = function (password, pageNumber, text) {
    if (password == this.password) {
        SimpleNotepad.prototype.replaceTextOnPage.call(this, pageNumber, text);
    } else {
        console.log("Incorect password");
    }
}

SecuredNotepad.prototype.viewAllPages = function (password) {
    if (password == this.password) {
        SimpleNotepad.prototype.viewAllPages.call(this);
    } else {
        console.log("Incorect password");
    }
}

SecuredNotepad.prototype.searchWord = function (password, word) {
    if (password == this.password) {
        SimpleNotepad.prototype.searchWord.call(this, word);
    } else {
        console.log("Incorect password");
    }
}

SecuredNotepad.prototype.searchWord = function (password) {
    if (password == this.password) {
        SimpleNotepad.prototype.printAllPagesWithDigits.call(this);
    } else {
        console.log("Incorect password");
    }
}


function ElectronicDevice() {
    this.isOn = false;
};

ElectronicDevice.prototype.start = function () {
    if (this.isOn) {
        console.log("The device is already turned on.");
        return;
    } else {
        this.isOn = true;
    }
}

ElectronicDevice.prototype.stop = function () {
    if (this.isOn) {
        this.isOn = false;
    } else {
        console.log("The device is already turned off.");
    }
}

ElectronicDevice.prototype.isStarted = function () {
    if (this.isOn) {
        return true;
    } else {
        return false;
    }
}

function ElectronicSecuredNotepad(numberOfPages, password) {
    SecuredNotepad.call(this, numberOfPages, password);
    this.isOn = false;
}

ElectronicSecuredNotepad.prototype = Object.create(ElectronicDevice.prototype);
ElectronicSecuredNotepad.prototype.constructor = ElectronicSecuredNotepad;

ElectronicSecuredNotepad.prototype.addTextOnPage = function (password, pageNumber, text) {
    if (!this.isOn) {
        console.log("Please turn me on.");
        return;
    }
    if (password == this.password) {
        SimpleNotepad.prototype.addTextOnPage.call(this, pageNumber, text)
    } else {
        console.log("Incorect password");
    }
}

ElectronicSecuredNotepad.prototype.deleteTextOnPage = function (password, pageNumber) {
    if (!this.isOn) {
        console.log("Please turn me on.");
        return;
    }
    if (password == this.password) {
        SimpleNotepad.prototype.deleteTextOnPage.call(this, pageNumber);
    } else {
        console.log("Incorect password");
    }
}

ElectronicSecuredNotepad.prototype.replaceTextOnPage = function (password, pageNumber, text) {
    if (!this.isOn) {
        console.log("Please turn me on.");
        return;
    }
    if (password == this.password) {
        SimpleNotepad.prototype.replaceTextOnPage.call(this, pageNumber, text);
    } else {
        console.log("Incorect password");
    }
}

ElectronicSecuredNotepad.prototype.viewAllPages = function (password) {
    if (!this.isStarted) {
        console.log("Please turn me on.");
        return;
    }
    if (password == this.password) {
        SimpleNotepad.prototype.viewAllPages.call(this);
    } else {
        console.log("Incorect password");
    }
}

ElectronicSecuredNotepad.prototype.searchWord = function (password, word) {
    if (!this.isStarted) {
        console.log("Please turn me on.");
        return;
    }
    if (password == this.password) {
        SimpleNotepad.prototype.searchWord.call(this, word);
    } else {
        console.log("Incorect password");
    }
}

ElectronicSecuredNotepad.prototype.printAllPagesWithDigits = function (password) {
    if (!this.isStarted) {
        console.log("Please turn me on.");
        return;
    }
    if (password == this.password) {
        SimpleNotepad.prototype.printAllPagesWithDigits.call(this);
    } else {
        console.log("Incorect password");
    }
}

var elNotepad = new ElectronicSecuredNotepad(2, "Rado 1");
var page1 = new Page();
var page2 = new Page();
page1.heading = "wtf";
page2.heading = "da be da";

elNotepad.pages[0] = page1;
elNotepad.pages[1] = page2;
elNotepad.start();
elNotepad.addTextOnPage("Rado 1", 1, "Baba mi");
elNotepad.addTextOnPage("Rado 1", 2, "Baba 8");
elNotepad.replaceTextOnPage("Rado 1", 1, "Baba 7");
elNotepad.searchWord("Rado 1", "ffff");
elNotepad.printAllPagesWithDigits("Rado 1");
elNotepad.deleteTextOnPage("Rado 1", 2);
elNotepad.viewAllPages("Rado 1");
console.log(elNotepad);