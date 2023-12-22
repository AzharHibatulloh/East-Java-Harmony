let images = Array.from(document.getElementsByClassName("mini"))
let mainPhoto = document.getElementById("mainPhoto")
let mainTitle = mainPhoto.getAttribute("name")
let mainDesc = mainPhoto.getAttribute("desc")
updateCaption(mainTitle)
updateDesc(mainDesc)

images.forEach(function(image){
    image.addEventListener("click", updateImage)
});

function updateImage(event){
    let image = event.target
    let name = image.getAttribute("name")
    let desc = image.getAttribute("desc")

    mainPhoto.src = image.src
    updateCaption(name)
    updateDesc(desc)
}

function updateCaption(event){
    let subTitle = document.getElementById("subtitle")
    subTitle.innerHTML = event
}
function updateDesc(event){
    let Desc = document.getElementById("desc")
    Desc.innerHTML = event
}

let images2 = Array.from(document.getElementsByClassName("mini2"))
let mainPhoto2 = document.getElementById("mainPhoto2")
let mainTitle2 = mainPhoto2.getAttribute("names")
let mainDesc2 = mainPhoto2.getAttribute("descs")
updateCaption2(mainTitle2)
updateDesc2(mainDesc2)

images2.forEach(function(image2){
    image2.addEventListener("click", updateImage2)
});

function updateImage2(event){
    let image = event.target
    let name = image.getAttribute("names")
    let desc = image.getAttribute("descs")

    mainPhoto2.src = image.src
    updateCaption2(name)
    updateDesc2(desc)
}

function updateCaption2(event){
    let subTitle = document.getElementById("subtitle2")
    subTitle.innerHTML = event
}
function updateDesc2(event){
    let Desc = document.getElementById("desc2")
    Desc.innerHTML = event
}