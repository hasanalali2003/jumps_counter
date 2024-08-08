let count = 0;
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

function inc() {
    count++;
    countEl.textContent = count;
}

function save() {
    saveEl.textContent += countEl.textContent + " - ";
    countEl.textContent = count = 0;
}
