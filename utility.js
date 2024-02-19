function setValueById(id, value){
    const element = document.getElementById(id);
    element.innerText = value;
}

function getValueById(id){
    const elementText = document.getElementById(id).innerText;
    const elementValue = parseInt(elementText);
    return elementValue;
}