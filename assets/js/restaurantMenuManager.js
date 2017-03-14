function Dish(name, img, desc) {
    this.name = name;
    this.img = img;
    this.desc = desc;
}



var menu = (function () {
    var DEALS = [];
    var ПИЦА = [];
    var ПРЕДЯСТИЯ = [];
    var ПИЛЕ = [];
    var ПАСТА = [];
    var САЛАТИ = [];
    var САНДВИЧИ = [];
    var СОС = [];
    var ДЕСЕРТИ = [];
    var НАПИТКИ = [];
    var arrayMenu = [DEALS, ПИЦА, ПРЕДЯСТИЯ, ПИЛЕ, ПАСТА, САЛАТИ, САНДВИЧИ, СОС, ДЕСЕРТИ, НАПИТКИ];
    return {
        addDish: function (name, img, desc, type) {
            var newDish = new Dish(name, img, desc);
            if (arrayMenu.indexOf(eval(type)) != -1) {
                arrayMenu[arrayMenu.indexOf(eval(type))].push(newDish)
            } else {
                console.log("Wrong type");
            }

        },
        removeDish: function () {

        },
        getDishes: function (string) {
            if (arrayMenu.indexOf(eval(string)) != -1) {
                return arrayMenu[arrayMenu.indexOf(eval(string))];
            } else {
                console.log("Wrong string");
            }
        }
    }
})();

menu.addDish("МЕДИТЕРАНЕО", "../images/mediteraneo.png", "моцарела, доматен сос, пресни домати, зелени чушки, краве сирене, маслини", "ПИЦА");
menu.addDish("ВСЯКА ВТОРА ПИЦА НА ПОЛОВИН ЦЕНА", "../images/offer1.png", "моцарела, доматен сос, пресни домати, зелени чушки, краве сирене, маслини", "DEALS");