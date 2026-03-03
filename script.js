const textLines = [
"> initializing love protocol...",
"> connecting two hearts...",
"> compiling memories...",
"> no errors found.",
"> launching forever.exe"
];

let lineIndex = 0;
let charIndex = 0;
const speed = 40;
const terminal = document.getElementById("terminal-text");

function typeLine() {
    if (lineIndex < textLines.length) {
        if (charIndex < textLines[lineIndex].length) {
            terminal.innerHTML += textLines[lineIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeLine, speed);
        } else {
            terminal.innerHTML += "<br>";
            charIndex = 0;
            lineIndex++;
            setTimeout(typeLine, 600);
        }
    } else {
        setTimeout(() => {
            document.getElementById("loader").style.opacity = "0";
            document.getElementById("loader").style.transition = "1s";
            setTimeout(() => {
                document.getElementById("loader").style.display = "none";
            }, 1000);
        }, 1000);
    }
}

window.onload = typeLine;
