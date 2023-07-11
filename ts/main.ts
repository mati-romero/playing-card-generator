const inputName = document.getElementById('Name') as HTMLInputElement;
const inputDesc = document.getElementById('Desc') as HTMLInputElement;
const inputAtta = document.getElementById('Attack') as HTMLInputElement;
const inputDef = document.getElementById('Defense') as HTMLInputElement;
const opc = document.getElementById('Element') as any;

const cardName = document.getElementById('CardName') as HTMLElement;
const cardDesc = document.getElementById('CardDesc') as HTMLElement;
const cardAttack = document.getElementById('CardAttack') as HTMLElement;
const cardDefense = document.getElementById('CardDefense') as HTMLElement;

class Card {

    constructor(
        private _name: string, 
        private _description: string, 
        private _elem: string, 
        private _attack: number | string, 
        private _defense: number | string, 
        private _imgPath: string) {
    }

    get name(): string {
        return this._name;
    }

    set name(newName: string) {
        this._name = newName;
    }

    get description(): string {
        return this._description;
    }

    set description(newDescription: string) {
        this._description = newDescription;
    }

    get elem(): string {
        return this._elem;
    }

    set elem(newElem: string) {
        this._elem = newElem;
    }

    get attack(): string | number {
        return this._attack;
    }

    set attack(newAttack: string | number) {
        this._attack = newAttack;
    }

    get defense(): string | number {
        return this._defense;
    }

    set defense(newDefense: string | number) {
        this._defense = newDefense;
    }

    get imgPath(): string {
        return this._imgPath;
    }

    set imgPath(newImgPath: string) {
        this._imgPath = newImgPath;
    }
}

const lista: Card[] = [];

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

    const card = document.getElementById('CardEdit') as any;
    card.className = 'card-edit mt-5 ' + cardClass;

    const cardTip = document.getElementById('CardTip') as any;

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
    const image = document.getElementById('image-preview') as HTMLInputElement;
    const cardImage = document.getElementById('CardImage') as HTMLInputElement;

    if (image.src != "") {
        cardImage.src = image.src;
    }
}


function saveCard() {
    const image = document.getElementById('image-preview') as HTMLInputElement;
    let card = new Card(inputName.value, inputDesc.value, opc.value, inputAtta.value, inputDef.value, (image!=null?image.src : ''));
    lista.push(card);

    console.log(lista);
    cleanCard();
}