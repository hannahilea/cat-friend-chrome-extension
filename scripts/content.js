const body = document.querySelector("body");

if (body) {
    console.log("inserting image??")
    const tailImg = document.createElement("IMG");
    tailImg.src = chrome.runtime.getURL('images/tail1.png');

    tailImg.style.position = "fixed";
    tailImg.style.bottom = "-3px";
    tailImg.style.right = "-3px";
    tailImg.style.pointerEvents = "none";
    tailImg.style.height = "75vh";

    body.insertAdjacentElement("beforeend", tailImg);
    console.log(tailImg);

    let pauseTime = [250, 500, 500, 500, 750];
    let imageIndex = 0;
    const paths = ["images/tail1.png", "images/tail2.png",
                   "images/tail3.png", "images/tail2.png", 
                   "images/tail1.png", "images/tail4.png"]
    function loop() {
        tailImg.setAttribute("src", chrome.runtime.getURL(paths[imageIndex++]))
        if (imageIndex >= paths.length) imageIndex = 0;
        setTimeout(loop, pauseTime[Math.floor(Math.random() * pauseTime.length)]); // Time in milliseconds, longer = slower
    }
    loop() // Begin
}
