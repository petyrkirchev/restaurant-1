(function () {
    var ordered = [];
    function blackOnOut(event) {
        event.target.style.cssText = "border: 3px rgba(0,0,0,0) solid;";
    }
    var menuDishes = document.getElementsByClassName("navMenu");
    for (var index = 0; index < menuDishes.length; index++) {
        menuDishes[index].addEventListener("mouseover", function whiteOnOver(event) {
            event.target.style.cssText = "border: 3px white solid;";
        }, false);
        menuDishes[index].addEventListener("mouseout", blackOnOut, false);
        menuDishes[index].addEventListener("click", function menuOnClick(event) {
            for (var index2 = 0; index2 < menuDishes.length; index2++) {
                menuDishes[index2].addEventListener("mouseout", blackOnOut, false);
                menuDishes[index2].style.cssText = "border: 3px rgba(0,0,0,0) solid;";
            }
            event.target.removeEventListener("mouseout", blackOnOut, false);
            event.target.style.cssText = "border: 3px white solid;";
            var activeMenu = document.getElementById("activeMenu");
            activeMenu.innerHTML = "";
            var dishArray = menu.getDishes(event.target.textContent);
            for (var dish = 0; dish < dishArray.length; dish++) {
                var div = document.createElement("div");
                var img = document.createElement("img");
                var name = document.createElement("p");
                var desc = document.createElement("p");
                var line = document.createElement("hr");
                var line2 = document.createElement("hr");
                var but = document.createElement("button");
                // var div2 = document.createElement("div");
                activeMenu.appendChild(div);
                div.appendChild(img);
                div.appendChild(name);
                div.appendChild(line);
                div.appendChild(desc);
                div.appendChild(line2);
                // div.appendChild(div2);
                div.style.height = "auto";
                div.appendChild(but);
                // div2.style.width = "17%";
                // div2.style.height= "300px";
                div.style.cssText = "float: left; boxSizing: border-box; width: 17%; height: 420px; border-radius: 10px; background-color: white; margin: 1em";
                img.src = dishArray[dish].img;
                img.style.cssText = "display: block; width: 100%; height: 180px; border-top-left-radius: 10px; border-top-right-radius: 10px";
                name.textContent = dishArray[dish].name;
                name.className = "imena";
                desc.textContent = dishArray[dish].desc;
                desc.className = "desc";
                but.textContent = "ИЗБЕРЕТЕ";
                but.className = "btn btn-success btn-md font-bold customBtn";
                but.addEventListener("click", function () {
                    var counter = document.getElementById("counterbe");
                    counter.textContent = ordered.length;
                    if (ordered.length > 1) counter.style.visibility = "visible";
                }, false);
            }
        }, false);
    }
})();