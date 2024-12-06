let generateBtn = document.getElementById("generate-btn");
let copyBtn = document.getElementById("copy-btn");
let paraDisplay = document.getElementById("para");
let options = {
    method: "GET",
    headers: {"X-api-Key": apiKey },    
}

let url = "https://api.api-ninjas.com/v1/loremipsum?paragraphs=";

let generateParas = () => {
    let noOfPara = document.getElementById("no-of-para").value;
    let finalURL = url + noOfPara;
    fetch(finalURL,options)
        .then((res) => res.json())
        .then((data) => {
            paraDisplay.innerText = data.text;
        })
    
}

//Implement function to copy
copyBtn.addEventListener("click", () =>{
    navigator.clipboard.writeText(paraDisplay.innerText);
    alert("text copied to clipboard")
})

generateBtn.addEventListener("click", generateParas);
window.addEventListener("load",generateParas)