let btn = document.getElementById("btn");


btn.addEventListener("click", function () {
    let bodyStyle = document.body.style;
    if (bodyStyle.backgroundImage.match("off.png")) {
        bodyStyle.backgroundImage = "url(onn.png)";
        btn.innerText = "Turn Off This Bulb";
    } else {
        bodyStyle.backgroundImage = "url(off.png)";
        btn.innerText = "Turn On This Bulb";
    }
});
