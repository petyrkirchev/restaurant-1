// (function () {
var menuDishes = document.getElementsByClassName("navMenu");
for (var index = 0; index < menuDishes.length; index++) {
    menuDishes[index].addEventListener("click", function (event) {
        // for (var index2 = 0; index2 < menuDishes.length; index2++) {
        //     menuDishes[index2].style.cssText = "border: 3px rgba(0,0,0,0) solid;";
        // };
        // menuDishes[index2].style.cssText = "border: 3px white solid;";
        var activeMenu = document.getElementById("activeMenu")
        activeMenu.innerHTML = "";
        var dishArray = menu.getDishes(event.target.textContent);
        for (var dish = 0; dish < dishArray.length; dish++) {
            var div = document.createElement("div");
            var img = document.createElement("img");
            var name = document.createElement("p")
            var desc = document.createElement("desc")
            activeMenu.appendChild(div);
            div.appendChild(img);
            div.appendChild(name);
            div.appendChild(desc);
            div.style.cssText = "float: left; boxSizing: border-box; width: 18%; border-radius: 10px; background-color: white; margin: 1em";
            img.src = dishArray[dish].img;
            img.style.cssText = "display: block; width: 100%; height: auto; border-top-left-radius: 10px; border-top-right-radius: 10px";
            name.textContent = dishArray[dish].name;
            desc.textContent = dishArray[dish].desc;
        }
    }, false)
}
// })();