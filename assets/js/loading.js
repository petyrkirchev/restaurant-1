 document.addEventListener("DOMContentLoaded", function (event) {
      console.log("DOM fully loaded and parsed");
      var allElements = document.getElementById("allF");
      var zagruska = document.getElementById("zagruska");
      setTimeout(function () {
        zagruska.style.display = "none";
        allElements.style.display = "block";
      }, 2500);
    });
