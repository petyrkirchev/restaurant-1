function callUs() {
    var element1 = document.getElementById("hoverSpan");
    element1.style.visibility = "visible";
    var element2 = document.getElementById("hoverSpanAfter");
    element2.style.visibility = "visible";


}

function callUsRemove() {
    var element1 = document.getElementById("hoverSpan");
    element1.style.visibility = "hidden";
    var element2 = document.getElementById("hoverSpanAfter");
    element2.style.visibility = "hidden";
}
document.getElementById("containerTest").addEventListener("wheel", changeOnWheelBG);

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
    if (event.wheelDelta <= -120) {
        element.style.background = "white";
        logo.src = "assets/images/DominosLogoBlue.png"
        slushalka.src = "assets/images/callGrey.png"
        p.style.color = "#808080";
        hSpan.style.color = "#ffffff";
        anchor1.style.color = "#808080";
        anchor2.style.color = "#808080";
        anchor3.style.color = "#808080";
        anchor4.style.color = "#808080";
    }
    if (document.body.scrollTop == 0) {
        logo.src = "assets/images/DominosLogo.png"
        slushalka.src = "assets/images/call.png"
        p.style.color = "#ffffff";
        anchor1.style.color = "#ffffff";
        anchor2.style.color = "#ffffff";
        anchor3.style.color = "#ffffff";
        anchor4.style.color = "#ffffff";
        element.style.background = "linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.75) 24%, rgba(0, 0, 0, 0.35) 65%, rgba(0, 0, 0, 0.15) 85%, rgba(0, 0, 0, 0.05) 100%)";
    }
}