var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#outputdiv")

var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(text){
    return serverURL + "?text="+ text;
}

function errorHandler(error){
    console.log("error occured", error);
    alert("Something wrong with server! try again later")
}

function clickHandler() {
 
   var inputText= txtInput.value;
   var URL= getTranslationURL(inputText);
   fetch(URL)
     .then(response => response.json())
     .then(json => outputDiv.innerText=json.contents.translated)
     .catch(errorHandler)
}

btnTranslate.addEventListener("click", clickHandler)


