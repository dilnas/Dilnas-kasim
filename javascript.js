// Typing effect
const textElement = document.getElementById("typing-text");
const phrases = ["Electrical Technician", "Calibration Specialist", "SCADA Programmer"];
let i = 0, j = 0;

function type() {
    if (i < phrases.length) {
        if (j < phrases[i].length) {
            textElement.innerHTML += phrases[i].charAt(j);
            j++;
            setTimeout(type, 100);
        } else {
            setTimeout(erase, 2000);
        }
    }
}

function erase() {
    if (j > 0) {
        textElement.innerHTML = phrases[i].substring(0, j - 1);
        j--;
        setTimeout(erase, 50);
    } else {
        i = (i + 1) % phrases.length;
        setTimeout(type, 500);
    }
}

document.addEventListener("DOMContentLoaded", type);
