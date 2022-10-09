let yodas = 0
let yodasMum = 1.0
let base = 1

let upgradeCost = 150

let snd = new Audio("YodaSound.mp3");

const yodanumbertext = document.querySelector(".yodanumbertext")
const clickerbutton = document.querySelector(".clicker-button")
const upgradebutton = document.querySelector(".upgrade-button")

clickerbutton.addEventListener("mousedown", () => {
    console.log("Yodasdown")
    clickerbutton.style.width = "58%";
    snd.currentTime = 0;
    snd.play();
})
clickerbutton.addEventListener("mouseup", () => {
    console.log("Yodasup");
    clickerbutton.style.width = "";
    yodas++
    console.log(yodas)
    yodanumbertext.textContent = yodas
})
upgradebutton.addEventListener("mousedown", () => {
    console.log("YodasMumDown")
})
upgradebutton.addEventListener("mouseup", () => {
    console.log("YodasMumUp")
    if (yodas < upgradeCost) {
        upgradeCost = upgradeCost * 2
        upgradeCostx2text.textContent = upgradeCost
    }
})



console.log("Yodas")

