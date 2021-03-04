const nav = document.querySelector(".navbar");
const goUp = document.querySelector("#go-up");

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

    if (scroll > 0){
        goUp.style.display="block";
    }
    else{
        goUp.style.display="none";
    }

});

const profileImage = document.querySelector("#about-profile-image");

profileImage.addEventListener("mouseenter", function () {
    if (profileImage.src.indexOf('profile2.png')!=-1) {
        profileImage.src  = "images/profile.png";
    }
});

profileImage.addEventListener("mouseleave", function () {
    if (profileImage.src.indexOf('profile.png')!=-1) {
        profileImage.src  = "images/profile2.png";
    }
});




