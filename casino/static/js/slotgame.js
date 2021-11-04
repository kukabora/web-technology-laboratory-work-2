function preloadImage(url) {
    const img = new Image();
    img.src = url;
    return img
}

function blurMonitor() {
    document.querySelector(".monitor").style.filter = "blur(5px)";
}

function unBlurMonitor() {
    document.querySelector(".monitor").style.filter = "blur(0px)";
}

async function rotateSlot(images) {
    blurMonitor()

    await setTimeout(unBlurMonitor, 5000)
    let currentTime = new Date().getTime()
    var slotsWrappers = document.querySelectorAll(".slot-photo-wrapper")
    var slots = []

    setInterval(() => {
        if (new Date().getTime() - currentTime >= 5000)
            return
        slotsWrappers.forEach(slotWrapper => slots.push(slotWrapper.children[0]))
        slots.forEach(slot => {
            slot.src = images[Math.floor(Math.random() * images.length)].src.slice(22)
        })
    }, 50)

}

let cherry = preloadImage("/static/img/cherry-section.png")
let coin = preloadImage("/static/img/coin-section.png")
let seven = preloadImage("/static/img/seven-section.png")

let spinButton = document.querySelector(".spin-button")
spinButton.onclick = (e) => { rotateSlot([cherry, coin, seven]) }