 document.addEventListener("DOMContentLoaded", function (event) {
      var allElements = document.getElementById("allF");
      var zagruska = document.getElementById("zagruska");
    //    allElements.style.display= "none";
    //    zagruska.style.display = "block";
      setTimeout(function () {
        zagruska.style.display = "none";
        allElements.style.display = "block";
      }, 1000);
    },false);
