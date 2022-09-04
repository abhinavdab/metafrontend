var settingsmenu = document.querySelector(".settings");
var darkmode = document.getElementById("dark-btn");

function settingsMenuToggle() {
    settingsmenu.classList.toggle("settings-menu-height");

}
darkmode.onclick = function() {
    darkmode.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");
}

console.log("working");