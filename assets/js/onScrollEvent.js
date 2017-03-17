window.addEventListener("scroll", changeOnWheelBG, false);

function changeOnWheelBG() {
    var element = document.getElementById("navChangeBG");
    var logo = document.getElementById("logoDominos");
    var shlushalka = document.getElementById("slushalka");
    var p = document.getElementById("petNav");
    var hSpan = document.getElementById("hoverSpan");
    var anchor1 = document.getElementById("petNav1");
    var anchor2 = document.getElementById("petNav2");
    var anchor3 = document.getElementById("petNav3");
    var anchor4 = document.getElementById("petNav4");
    var burger = document.getElementById("burger1");
    var logo1 = document.getElementById("logoDominos1");
    var basket = document.getElementById("basket1");
    if (document.body.scrollTop > 0) {
        element.style.background = "white";
        element.style.boxShadow = "2px 2px 1px #555555";
        logo.src = "assets/images/DominosLogoBlue.png"
        slushalka.src = "assets/images/callGrey.png"
        p.style.color = "#808080";
        hSpan.style.color = "#ffffff";
        anchor1.style.color = "#808080";
        anchor2.style.color = "#808080";
        anchor3.style.color = "#808080";
        anchor4.style.color = "#808080";
        burger.src = "assets/images/menuBtnGrey.png";
        basket.src = "assets/images/basketGrey.png";
        logo1.src = "assets/images/DominosLogoBlue.png";
    }
    if (document.body.scrollTop == 0) {
        logo.src = "assets/images/DominosLogo.png"
        slushalka.src = "assets/images/call.png"
        p.style.color = "#ffffff";
        anchor1.style.color = "#ffffff";
        anchor2.style.color = "#ffffff";
        anchor3.style.color = "#ffffff";
        anchor4.style.color = "#ffffff";
        burger.src = "assets/images/menuBtn.png";
        basket.src = "assets/images/basket.png";
        logo1.src = "assets/images/DominosLogo.png";
        element.style.background = "linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.75) 24%, rgba(0, 0, 0, 0.35) 65%, rgba(0, 0, 0, 0.15) 85%, rgba(0, 0, 0, 0.05) 100%)";
        element.style.boxShadow = "none";
    }
}