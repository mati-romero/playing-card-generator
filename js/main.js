"use strict";
const inputName = document.getElementById('Name');
const inputDesc = document.getElementById('Desc');
const inputAtta = document.getElementById('Attack');
const inputDef = document.getElementById('Defense');
const opc = document.getElementById('Element');
const cardName = document.getElementById('CardName');
const cardDesc = document.getElementById('CardDesc');
const cardAttack = document.getElementById('CardAttack');
const cardDefense = document.getElementById('CardDefense');
class Card {
    constructor(_name, _description, _elem, _attack, _defense, _imgPath) {
        this._name = _name;
        this._description = _description;
        this._elem = _elem;
        this._attack = _attack;
        this._defense = _defense;
        this._imgPath = _imgPath;
    }
    get name() {
        return this._name;
    }
    set name(newName) {
        this._name = newName;
    }
    get description() {
        return this._description;
    }
    set description(newDescription) {
        this._description = newDescription;
    }
    get elem() {
        return this._elem;
    }
    set elem(newElem) {
        this._elem = newElem;
    }
    get attack() {
        return this._attack;
    }
    set attack(newAttack) {
        this._attack = newAttack;
    }
    get defense() {
        return this._defense;
    }
    set defense(newDefense) {
        this._defense = newDefense;
    }
    get imgPath() {
        return this._imgPath;
    }
    set imgPath(newImgPath) {
        this._imgPath = newImgPath;
    }
}
const lista = [];
function createCard() {
    cardName.innerHTML = inputName.value != '' ? inputName.value : 'Name';
    cardDesc.innerHTML = inputDesc.value != '' ? inputDesc.value : '...';
    cardAttack.innerHTML = inputAtta.value != '' ? 'Attack: ' + inputAtta.value : 'Attack: xxxx';
    cardDefense.innerHTML = inputDef.value != '' ? 'Defense: ' + inputDef.value : 'Defense: xxxx';
    changeElement();
}
function cleanCard() {
    inputName.value = '';
    inputDesc.value = '';
    inputAtta.value = '';
    inputDef.value = '';
}
function changeElement() {
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
function saveCard() {
    const image = document.getElementById('image-preview');
    let card = new Card(inputName.value, inputDesc.value, opc.value, inputAtta.value, inputDef.value, (image != null ? image.src : ''));
    lista.push(card);
    console.log(lista);
    cleanCard();
}
