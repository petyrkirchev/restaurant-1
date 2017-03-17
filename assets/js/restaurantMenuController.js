(function () {
    var ordered = [];
    function blackOnOut(event) {
        event.target.style.cssText = "border: 3px rgba(0,0,0,0) solid;";
    }
    // On click draw menu and white box over clicked. Add to ordered button.
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
                activeMenu.appendChild(div);
                div.appendChild(img);
                div.appendChild(name);
                div.appendChild(line);
                div.appendChild(desc);
                div.appendChild(line2);
                div.style.height = "auto";
                div.appendChild(but);
                div.style.cssText = "float: left; box-sizing: border-box; width: 17%; height: 420px; border-radius: 10px; background-color: white; margin: 1em";
                img.src = dishArray[dish].img;
                img.style.cssText = "display: block; width: 100%; height: 180px; border-top-left-radius: 10px; border-top-right-radius: 10px";
                name.textContent = dishArray[dish].name;
                name.className = "imena";
                desc.textContent = dishArray[dish].desc;
                desc.className = "desc";
                but.textContent = "ИЗБЕРЕТЕ";
                but.id = dishArray[dish].name;
                but.className = "btn btn-success btn-md font-bold customBtn";
                function btnFunctionality(event) {
                    var counter = document.getElementById("counterbe");
                    var item = menu.getDishByButId(event.target.id);
                    ordered.push(item);
                    var counterVis = document.getElementById("orderCounter2");
                    counter.textContent = ordered.length;
                    if (ordered.length > 0) counterVis.style.visibility = "visible";
                }
                but.addEventListener("click", btnFunctionality, false);
            }
        }, false);
    }
    var basket = document.getElementById("basket2");
    basket.addEventListener("click", function () {
        var activeMenu = document.getElementById("activeMenu");
        activeMenu.innerHTML = "";
        var div = document.createElement("div");
        activeMenu.appendChild(div);
        div.style.cssText = "box-sizing: border-box; width: 100%; border-radius: 10px; background-color: white; margin: 1em";
        div.style.height = 180 * ordered.length + "px";
        for (var index = 0; index < ordered.length; index++) {
            var itemImg = document.createElement("img");
            div.appendChild(itemImg);
            itemImg.src = ordered[index].img;
            itemImg.style.cssText = "float: left; clear: left; display: block; width: auto; height: 180px; border-radius: 20px; padding: 0.8em";
            var ItemText = document.createElement("div");
            div.appendChild(ItemText);
            var itemName = document.createElement("p");
            ItemText.appendChild(itemName);
            itemName.textContent = ordered[index].name;
            itemName.className = "imena2";
            var itemDesc = document.createElement("p");
            ItemText.appendChild(itemDesc);
            itemDesc.textContent = ordered[index].desc;
            itemDesc.className = "desc2";
        }
    }, false);
})();