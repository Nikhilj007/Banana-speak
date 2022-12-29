var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#outputdiv")

function clickHandler() {
   outputDiv.innerText = "result "+txtInput.value;
}

btnTranslate.addEventListener("click", clickHandler)


