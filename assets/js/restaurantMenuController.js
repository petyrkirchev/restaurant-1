(function () {
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
            };
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
                    var imaLiGo = false;
                    for (var index = 0; index < ordered.length; index++) {
                        if (ordered[index].name == item.name) {
                            imaLiGo = true;
                            break;
                        }
                    }
                    if (!imaLiGo) {
                        ordered.push(item)
                    };
                    var counterVis = document.getElementById("orderCounter2");
                    counter.textContent = ordered.length;
                    if (ordered.length > 0) counterVis.style.visibility = "visible";
                };
                but.addEventListener("click", btnFunctionality, false);
            }
        }, false);
    }
    //
    var ordered = [];
    var uniqueId = 0;
    var basket = document.getElementById("basket2");
    basket.addEventListener("click", function () {
        var currentPrice = 0;
        for (var index = 0; index < ordered.length; index++) {
            currentPrice += ordered[index].price;
        };
        var activeMenu = document.getElementById("activeMenu");
        activeMenu.innerHTML = "";
        var div = document.createElement("div");
        activeMenu.appendChild(div);
        div.id = "basketDiv";
        if (ordered.length != 0) {
            var priceP = document.createElement("p");
            div.appendChild(priceP);
            priceP.id = "priceP";
            priceP.textContent = "Цена до момента: " + currentPrice + " лв.";
        };
        div.style.cssText = "box-sizing: border-box; width: 100%; border-radius: 10px; background-color: white; margin: 1em";
        div.style.height = 209 * ordered.length + "px";
        for (var meal = 0; meal < ordered.length; meal++) {
            uniqueId = uniqueId + 1;
            var divbe = document.createElement("div");
            div.appendChild(divbe);
            var itemImg = document.createElement("img");
            divbe.appendChild(itemImg);
            divbe.id = "div" + uniqueId;
            itemImg.src = ordered[meal].img;
            itemImg.style.cssText = "float: left; clear: left; display: block; width: 198.89px; height: 209px; border-radius: 20px; padding: 0.8em";
            var itemText = document.createElement("div");
            itemText.style.cssText = "float: left; width:45%; height: 209px;";
            divbe.appendChild(itemText);
            var itemName = document.createElement("p");
            itemText.appendChild(itemName);
            itemName.className = "imena2";
            var itemNameLegit = document.createElement("p");
            itemName.appendChild(itemNameLegit);
            itemNameLegit.textContent = ordered[meal].name;
            itemNameLegit.id = "ime" + uniqueId;
            var itemDesc = document.createElement("p");
            itemName.appendChild(itemDesc);
            itemDesc.textContent = ordered[meal].desc;
            itemDesc.className = "desc2";
            // Quantity button with creation and functionality.
            var itemPrice = document.createElement("p");
            itemName.appendChild(itemPrice);
            itemPrice.textContent = "Цена за 1 бр. : " + ordered[meal].price + " лв. Тегло : " + ordered[meal].weight + " гр.";
            var itemTriangleUp = document.createElement("p");
            var itemQuantity = document.createElement("p");
            var itemTriangleDown = document.createElement("p");
            var itemCurrentPrice = document.createElement("p");
            itemTriangleUp.addEventListener("click", triangleUP, false);
            itemTriangleDown.addEventListener("click", triangleDown, false);
            itemName.appendChild(itemTriangleUp);
            itemName.appendChild(itemQuantity);
            itemName.appendChild(itemTriangleDown);
            itemName.appendChild(itemCurrentPrice);
            itemQuantity.id = "col" + uniqueId;
            itemCurrentPrice.id = "price" + uniqueId;
            itemTriangleUp.id = "triangleUp" + uniqueId;
            itemTriangleDown.id = "triangleDown" + uniqueId;
            itemCurrentPrice.textContent = ordered[meal].price + " лв.";
            itemCurrentPrice.className = "itemCurrentPrice";
            itemTriangleUp.textContent = "\u25B2";
            itemTriangleDown.textContent = "\u25BC";
            itemQuantity.textContent = "" + 1;
            itemTriangleUp.className = "quantity";
            itemTriangleDown.className = "quantity";
            itemQuantity.className = "itemQuantity";
            function triangleUP(event) {
                var currentItemId = event.target.id.slice(10, event.target.id.length);
                var itemQuantity = document.getElementById("col" + currentItemId);
                var itemCurrentPrice = document.getElementById("price" + currentItemId);
                var price = Number(itemCurrentPrice.textContent.slice(0, (itemCurrentPrice.textContent.length - 4))) / Number(itemQuantity.textContent);
                itemQuantity.textContent = "" + (Number(itemQuantity.textContent) + 1);
                itemCurrentPrice.textContent = "" + price * (Number(itemQuantity.textContent)) + " лв.";
                var allItemsInBasket = document.getElementsByClassName("itemCurrentPrice");
                var changedPrice = 0;
                for (var index = 0; index < allItemsInBasket.length; index++) {
                    changedPrice += Number(allItemsInBasket[index].textContent.slice(0, (allItemsInBasket[index].textContent.length - 4)));
                };
                var priceP = document.getElementById("priceP");
                priceP.textContent = "Цена до момента: " + changedPrice + " лв.";
            };
            function triangleDown() {
                var currentItemId2 = event.target.id.slice(12, event.target.id.length);
                var itemQuantity = document.getElementById("col" + currentItemId2);
                var itemCurrentPrice = document.getElementById("price" + currentItemId2);
                var price = Number(itemCurrentPrice.textContent.slice(0, (itemCurrentPrice.textContent.length - 4))) / Number(itemQuantity.textContent);
                if ((Number(itemQuantity.textContent)) != 1) {
                    itemQuantity.textContent = "" + (Number(itemQuantity.textContent) - 1);
                    itemCurrentPrice.textContent = "" + price * (Number(itemQuantity.textContent)) + " лв.";
                    var allItemsInBasket = document.getElementsByClassName("itemCurrentPrice");
                    var changedPrice = 0;
                    for (var index = 0; index < allItemsInBasket.length; index++) {
                        changedPrice += Number(allItemsInBasket[index].textContent.slice(0, (allItemsInBasket[index].textContent.length - 4)));
                    };
                    var priceP = document.getElementById("priceP");
                    priceP.textContent = "Цена до момента: " + changedPrice + " лв.";
                };
            };
            // Remove button with creation and functionality.
            var removeBut = document.createElement("button");
            itemText.appendChild(removeBut);
            removeBut.textContent = "ПРЕМАХНИ";
            removeBut.id = "but" + uniqueId;
            removeBut.className = "btn btn-success btn-md font-bold removeBut";
            removeBut.addEventListener("click", function (event) {
                var currentItemId3 = event.target.id.slice(3, event.target.id.length);
                var divbe = document.getElementById("div" + currentItemId3);
                var ime = document.getElementById("ime" + currentItemId3);
                var basketDiv = document.getElementById("basketDiv");
                basketDiv.style.height = (209 * (ordered.length - 1)) + "px";
                divbe.parentNode.removeChild(divbe);
                for (var index = 0; index < ordered.length; index++) {
                    if (ordered[index].name == ime.textContent) {
                        break;
                    }
                }
                ordered.splice(index, 1);
                var counter = document.getElementById("counterbe");
                var counterVis = document.getElementById("orderCounter2");
                counter.textContent = ordered.length;
                var changedPrice = 0;
                var allItemsInBasket = document.getElementsByClassName("itemCurrentPrice");
                for (var index = 0; index < allItemsInBasket.length; index++) {
                    changedPrice += Number(allItemsInBasket[index].textContent.slice(0, (allItemsInBasket[index].textContent.length - 4)));
                };
                var priceP = document.getElementById("priceP");
                priceP.textContent = "Цена до момента: " + changedPrice + " лв.";
                if (ordered.length > 0) {
                    counterVis.style.visibility = "visible";
                } else {
                    counterVis.style.visibility = "hidden";
                    priceP.style.display = "none";
                };
            }, false);
        };
    }, false);
})();