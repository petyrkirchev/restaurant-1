var menu = (function () {
    function Dish(name, img, desc, price, weight) {
        this.name = name;
        this.img = img;
        this.desc = desc;
        this.price = price;
        this.weight = weight;
    }

    var menuItems2 = {};
    var menuDishes = document.getElementsByClassName("navMenu");
    for (var index = 0; index < menuDishes.length; index++) {
        menuItems2[menuDishes[index].textContent] = [];
    }
    return {
        addDish: function (name, img, desc, price, weight, type) {
            var newDish = new Dish(name, img, desc, price, weight);
            if (typeof menuItems2[type] != "undefined") {
                menuItems2[type].push(newDish);
            } else {
                console.log("Wrong type");
            }

        },
        removeDish: function () {

        },
        getDishByButId: function (butId) {
            var keys = Object.keys(menuItems2);
            for (var index = 0; index < keys.length; index++) {
                var value = menuItems2[keys[index]];
                for (var index2 = 0; index2 < value.length; index2++) {
                    if (value[index2].name == butId) {
                        return value[index2];
                    };
                }
            }
        },
        getDishes: function (string) {
            if (typeof menuItems2[string] != "undefined") {
                return menuItems2[string];
            } else {
                console.log("Wrong type");
            }
        }
    }
})();

// DEALS
menu.addDish("ВСЯКА ВТОРА ПИЦА НА ПОЛОВИН ЦЕНА", "../images/deal1.png", "моцарела, доматен сос, пресни домати, зелени чушки, краве сирене, маслини", 100, 100, "DEALS");
menu.addDish("СЕМЕЙНО КОМБО", "../images/deal2.png", "2 големи пици + Чоко пай + Кока-Кола 1.25л – само за 23.70лв.*Не важи за тесто с Philadelphia и категория „За ценители”", 100, 100, "DEALS");

// ПИЦА
menu.addDish("МЕДИТЕРАНЕО", "../images/RestaurantMenu/Pizza/mediteraneo.png", "моцарела, доматен сос, пресни домати, зелени чушки, краве сирене, маслини", 100, 100, "ПИЦА");
menu.addDish("АЛФРЕДО", "../images/RestaurantMenu/Pizza/alfredo.png", "сметана, моцарела, пилешко филе, бейби спанак", 100, 100, "ПИЦА");
menu.addDish("ВИТА", "../images/RestaurantMenu/Pizza/vita.png", "доматен сос, моцарела, бейби спанак, краве сирене, пресни домати", 100, 100, "ПИЦА");
menu.addDish("МАРГАРИТА", "../images/RestaurantMenu/Pizza/margarita.png", "доматен сос, моцарела, допълнително моцарела", 100, 100, "ПИЦА");
menu.addDish("ЧИКЕНИТА", "../images/RestaurantMenu/Pizza/chikenita.png", "доматен сос, моцарела, пилешко филе, пеперони, домати, ементал", 100, 100, "ПИЦА");
menu.addDish("ДОМИНОС СПЕЦИАЛНА", "../images/RestaurantMenu/Pizza/dominosSpecial.png", "доматен сос, моцарела, шунка, бекон, зелени чушки, лук, гъби", 100, 100, "ПИЦА");
menu.addDish("ЧИК -ЧИ -РИК", "../images/RestaurantMenu/Pizza/chichirik.png", "доматен сос, моцарела, крехко пиле, топено сирене, царевица", 100, 100, "ПИЦА");
// ПРЕДЯСТИЯ
menu.addDish("МОЦАРЕЛЕНО ХЛЕБЧЕ", "../images/RestaurantMenu/Predqstiq/mocarelenohlebche.png", "доматен сос, моцарела, крехко пиле, топено сирене, царевица", 100, 100, "ПРЕДЯСТИЯ");
// ПИЛЕ
menu.addDish("ПИЛЕ СТРИПЕРС", "../images/RestaurantMenu/Pile/pilestripes.png", "Сочни филенца, от пилешки гърди, с хрупкава обвивка, изпечени на фурна, придружени със сладко лютив сос", 100, 100, "ПИЛЕ");
menu.addDish("ПИЛЕ КИКЕРС", "../images/RestaurantMenu/Pile/pilekikers.png", "Късчета от сочни пикантни пилешки гърди, с хрупкава обвивка, изпечени на фурна придружени със сос Барбекю", 100, 100, "ПИЛЕ");
menu.addDish("КРИЛЦА BUFFALO", "../images/RestaurantMenu/Pile/krlicabuffalo.png", "8 прясно изпечени пилешки крилца със сос Барбекю", 100, 100, "ПИЛЕ");
menu.addDish("КРИЛЦА BUFFALO ЛЮТИ", "../images/RestaurantMenu/Pile/krlicabuffaloluti.png", "8 прясно изпечени пилешки крилца в лют сос Franks", 100, 100, "ПИЛЕ");
// ПАСТА
menu.addDish("ПАСТА КАРБОНАРА", "../images/RestaurantMenu/Pasta/pastacarbonara.png", "паста, сметана, гъби, бекон, пармезан", 100, 100, "ПАСТА");
menu.addDish("НАПОЛИТАНА", "../images/RestaurantMenu/Pasta/napolitana.png", "паста, доматен сос, песто, пaрмезан", 100, 100, "ПАСТА");
menu.addDish("ПАСТА ПЕПЕРОНИ", "../images/RestaurantMenu/Pasta/pastapeperoni.png", "паста, доматен сос, сметана, пеперони, пармезан", 100, 100, "ПАСТА");
// САЛАТИ
menu.addDish("САЛАТА ЦЕЗАР БЕКОН", "../images/RestaurantMenu/Salati/cesarsbekon.png", "Айсберг, бекон, царевица, крутони, пармезан, млечен сос", 100, 100, "САЛАТИ");
menu.addDish("САЛАТА РОКА", "../images/RestaurantMenu/Salati/salataroka.png", "Айсберг,рукола,пресни домати,пармезан,зехтин", 100, 100, "САЛАТИ");
menu.addDish("САЛАТА ТРИКОЛОРЕ", "../images/RestaurantMenu/Salati/salatatrikolore.png", "Домати, сирене фета, песто и зехтин", 100, 100, "САЛАТИ");
menu.addDish("САЛАТА ЦЕЗАР С ПИЛЕ", "../images/RestaurantMenu/Salati/cesarspile.png", "Айсберг, пиле, царевица, крутони, пармезан,млечен сос", 100, 100, "САЛАТИ");
menu.addDish("САЛАТА РИБА ТОН", "../images/RestaurantMenu/Salati/salataribaton.png", "айсберг, риба тон, царевица, маслини, лимон и зехтин", 100, 100, "САЛАТИ");
// САНДВИЧИ
menu.addDish("САНДВИЧИ ПЕПЕРОНИ", "../images/RestaurantMenu/Sandvitch/peperoni.png", " дом. сос, ементал, сирене Филаделфия, пеперони", 100, 100, "САНДВИЧИ");
menu.addDish("САНДВИЧ МЕДИТЕРАНЕО ", "../images/RestaurantMenu/Sandvitch/mediteraneo.png", "ранч сос, ементал, бяло сирене, домати, маслини, зелени чушки", 100, 100, "САНДВИЧИ");
menu.addDish("САНДВИЧ БАРБЕКЮ ПИЛЕ  ПЕПЕРОНИ", "../images/RestaurantMenu/Sandvitch/barbekqpile.png", "сос барбекю, ементал, пилешко филе, бекон", 100, 100, "САНДВИЧИ");
// СОС
menu.addDish("ДОМАТЕН СОС", "../images/RestaurantMenu/Sos/domatensos.png", "", 100, 100, "СОС");
menu.addDish("МЛЕЧЕН СОС", "../images/RestaurantMenu/Sos/mlechensos.png", "", 100, 100, "СОС");
menu.addDish("РАНЧ СОС", "../images/RestaurantMenu/Sos/ranchsos.png", "", 100, 100, "СОС");
// ДЕСЕРТИ
menu.addDish("NIRVANA COOKIES & CREAM", "../images/RestaurantMenu/Deserti/1335ipar.png", "Сладолед с аромат на ванилия и парченца какаови бисквитки", 100, 100, "ДЕСЕРТИ");
menu.addDish("NIRVANA PRALINES & CREAM", "../images/RestaurantMenu/Deserti/nirvanapralines.png", "Сладолед с карамелов сироп и карамелизирани ядки ", 100, 100, "ДЕСЕРТИ");
menu.addDish("NIRVANA CHOCOLATE NOCCIOLA ", "../images/RestaurantMenu/Deserti/nirvanachokolet.png", "сладолед с вкус на шоколад, с какаов и лешников сироп и карамелизирани бадеми", 100, 100, "ДЕСЕРТИ");
// НАПИТКИ
menu.addDish("ЗАГОРКА", "../images/RestaurantMenu/Napitki/zagorka.png", "", 100, 100, "НАПИТКИ");
menu.addDish("COCA-COLA", "../images/RestaurantMenu/Napitki/cocacola.png", "", 100, 100, "НАПИТКИ");
menu.addDish("FANTA", "../images/RestaurantMenu/Napitki/fanta.png", "", 100, 100, "НАПИТКИ");
menu.addDish("SPRITE", "../images/RestaurantMenu/Napitki/sprite.png", "", 100, 100, "НАПИТКИ");