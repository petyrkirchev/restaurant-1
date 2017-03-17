var allElements = document.getElementById("all");
var zagruska = document.getElementById("zagruska");
document.body.addEventListener("load", function (event) {
    allElements.style.display = "none";

    setTimeout(function () {
        zagruska.style.display="none";
        allElements.style.display = "block";
    }, 2500);
}, true);