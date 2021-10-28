function preloadImage(url) {
    const img = new Image();
    img.src = url;
    return img
}

function blurMonitor() {
    document.querySelector(".monitor").style.filter = "blur(5px)";
    console.log("Monitor has been blurred")
}

function unBlurMonitor() {
    document.querySelector(".monitor").style.filter = "blur(0px)";
    console.log("Monitor has been unblured")
}

async function rotateSlot(images) {
    blurMonitor()

    setTimeout(unBlurMonitor(), 1000)

    // var slotsWrappers = document.querySelectorAll(".slot-photo-wrapper")
    // var slots = []
    // slotsWrappers.forEach(slotWrapper => slots.push(slotWrapper.children[0]))
    // console.log(slots)
    // slots.forEach(slot => {
    //     slot.src = images[Math.floor(Math.random() * images.length)].src.slice(22)
    // })

    // unBlurMonitor()
}

let cherry = preloadImage("/src/img/cherry-section.png")
let coin = preloadImage("/src/img/coin-section.png")
let seven = preloadImage("/src/img/seven-section.png")

let spinButton = document.querySelector(".spin-button")
spinButton.onclick = (e) => { rotateSlot([cherry, coin, seven]) }