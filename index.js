const nav = document.querySelector(".navbar");

const aboutPart = document.querySelector("#about-part");
const langPart = document.querySelector("#language-part");

window.addEventListener("scroll", function () {
    console.dir(aboutPart);
    let scroll = this.scrollY;

    if (((aboutPart.offsetTop) <= (scroll + 3*(nav.offsetHeight/2) - 24))) {
        nav.style.backgroundColor = "#1b1b1b";
    }
    else {
        nav.style.backgroundColor = "";
    }

});





