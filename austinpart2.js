let iconStyle = document.getElementById("icon-style");
let contentContainer = document.getElementById("contentContainer");
let containerSm = document.getElementById("containerSm")
let portfolio = document.getElementById("portfolio");
let babyShoot = document.getElementById("babyShoot");
let preWeddingShoot = document.getElementById("preWeddingShoot");
let weddingShoot = document.getElementById("weddingShoot");

let lastEdit = portfolio;
iconStyle.addEventListener("click", function(event) {
    contentContainer.classList.toggle("content-container");
    containerSm.classList.toggle("blocking-content")


})

function colorChange(element, lastEdit) {
    lastEdit.classList.toggle("nav-style");
    element.classList.toggle("nav-style");
}
babyShoot.addEventListener("click", function(event) {

    currentEl = event.target;
    colorChange(currentEl, lastEdit);
    lastEdit = currentEl;
});
portfolio.addEventListener("click", function(event) {

    currentEl = event.target;
    colorChange(currentEl, lastEdit);
    lastEdit = currentEl;
});
preWeddingShoot.addEventListener("click", function(event) {

    currentEl = event.target;
    colorChange(currentEl, lastEdit);
    lastEdit = currentEl;
});
weddingShoot.addEventListener("click", function(event) {

    currentEl = event.target;
    colorChange(currentEl, lastEdit);
    lastEdit = currentEl;
});