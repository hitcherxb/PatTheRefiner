console.log("test")

document.querySelector(".imgLink").onclick = function (e) {
    window.location.href = "About\ Me/aboutMe.html"
}


let projectImg = document.querySelectorAll('.projectlink')

for (img of projectImg) {
    img.onclick = function (e) {
        window.location.href = "Case\ Study/casestudy.html"
    }
}

