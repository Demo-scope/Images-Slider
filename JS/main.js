// بسم الله الرحمن الرحيم 
// Start Project


let sliderImage = Array.from(document.querySelectorAll(".slider1 .slidesContaner img"))
let slidesCount = sliderImage.length

let hedearSlideNumber = document.querySelector(".slider1 .slidesContaner .slideNumber")
let prev = document.querySelector(".slider1 .slidesControls .prev")
let footerSlideNumber =document.querySelector(".slider1 .slidesControls .indecators")
let next = document.querySelector(".slider1 .slidesControls .next")

let currentSlide = 1

setInterval(function(){
    currentSlide++
    if (currentSlide > slidesCount) {
        currentSlide = 1
    }
    checker()
}, 4000)

// handel with footer ul
let ul = document.createElement("ul")
ul.setAttribute("id", "footerUl")
for (let i = 1; i <= slidesCount; i++) {
    let li = document.createElement("li")
    li.setAttribute("data-slide", `${i}`)
    li.innerHTML = `${i}`
    ul.appendChild(li)
}
footerSlideNumber.appendChild(ul)
let footerUl = document.getElementById("footerUl")
let footerLi = document.querySelectorAll("#footerUl li")


// handel with Previous and next buttons
checker()
next.onclick = nextSlide;
prev.onclick = prevSlide;


function nextSlide() {
    if (next.classList.contains("disabled")) {
        return false
    } else {
        currentSlide++
        checker()
    }
}
function prevSlide() {
    if (prev.classList.contains("disabled")) {
        return false
    } else {
        currentSlide--
        checker()
    }
}


// handel with polits
for(let i = 0; i < footerLi.length; i++) {
    footerLi[i].onclick = function() {
        currentSlide = parseInt(footerLi[i].getAttribute("data-slide"))
        checker()
    }
}





function checker() {
    // set slide Number
    hedearSlideNumber.textContent = `Slide #${currentSlide} of ${slidesCount}`
    // remove all active class from images and polits 
    resetClass()
    // set active class on first image and polit
    sliderImage[currentSlide - 1].classList.add("active")
    footerUl.children[currentSlide - 1].classList.add("active")
    // check if current slide is the first one or last one
    if (currentSlide === 1) {
        prev.classList.add("disabled")
    } else if (currentSlide === slidesCount) {
        next.classList.add("disabled")
    } else {
        prev.classList.remove("disabled")
        next.classList.remove("disabled")
    }
}



function resetClass() {
    for (let i = 0; i < slidesCount; i++) {
        sliderImage[i].classList.remove("active")
        footerUl.children[i].classList.remove("active")
    }
}