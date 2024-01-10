var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
    body.style.background = "linear-gradient(to right, " 
    + color1.value 
    + ", " 
    + color2.value + ")";

    css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

function copyToClipboard() {
    var copyText = document.getElementById("contentToCopy").innerText;
    var textArea = document.createElement("textarea");

    textArea.value = copyText;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("Copy");
    document.body.removeChild(textArea);

    // Show the copied message
    var copyMessage = document.getElementById("copyMessage");
    copyMessage.style.display = "inline";

    // Hide the message after 2 seconds (you can adjust the time)
    setTimeout(function() {
        copyMessage.style.display = "none";
    }, 2000);
}