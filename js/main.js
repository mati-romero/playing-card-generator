"use strict";
var element;
(function (element) {
    element[element["grass"] = 0] = "grass";
    element[element["water"] = 1] = "water";
    element[element["fire"] = 2] = "fire";
    element[element["metal"] = 3] = "metal";
    element[element["electricity"] = 4] = "electricity";
})(element || (element = {}));
;
const inputName = document.getElementById('Name');
const inputDesc = document.getElementById('Desc');
const inputAtta = document.getElementById('Attack');
const inputDef = document.getElementById('Defense');
const cardName = document.getElementById('CardName');
const cardDesc = document.getElementById('CardDesc');
const cardAttack = document.getElementById('CardAttack');
const cardDefense = document.getElementById('CardDefense');
class card {
    constructor(_name, _description, _elem, _attack, _defense) {
    }
    get name() {
        return this.name;
    }
    set name(newName) {
        this.name = newName;
    }
}
function createCard() {
    cardName.innerHTML = inputName.value != '' ? inputName.value : 'Card Generator';
    cardDesc.innerHTML = inputDesc.value != '' ? inputDesc.value : '...';
    cardAttack.innerHTML = inputAtta.value != '' ? 'Attack: ' + inputAtta.value : 'Attack: xxxx';
    cardDefense.innerHTML = inputDef.value != '' ? 'Defense: ' + inputDef.value : 'Defense: xxxx';
}
function cleanCard() {
    inputName.value = '';
    inputDesc.value = '';
    inputAtta.value = '';
    inputDef.value = '';
    console.log('Aca paso algo');
}
function changeElement() {
    const opc = document.getElementById('Element');
    const cardClass = opc.value;
    const card = document.getElementById('CardEdit');
    card.className = 'card-edit mt-5 ' + cardClass;
    const cardTip = document.getElementById('CardTip');
    switch (cardClass) {
        case "grass": {
            cardTip.innerHTML = '<i class="fas fa-seedling"></i> Grass type';
            break;
        }
        case "water": {
            cardTip.innerHTML = '<i class="fas fa-tint"></i> Water type';
            break;
        }
        case "fire": {
            cardTip.innerHTML = '<i class="fas fa-fire-alt"></i> Fire type';
            break;
        }
        case "metal": {
            cardTip.innerHTML = '<i class="fas fa-cog"></i> Metal type';
            break;
        }
        case "electricity": {
            cardTip.innerHTML = '<i class="fas fa-bolt"></i> Electricity type';
            break;
        }
        default: {
            cardTip.innerHTML = '<i class="fas fa-seedling"></i> Grass type';
            break;
        }
    }
}
function saveImage() {
    const image = document.getElementById('image-preview');
    const cardImage = document.getElementById('CardImage');
    if (image.src != "") {
        cardImage.src = image.src;
    }
}
