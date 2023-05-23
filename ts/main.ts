enum element { grass, water, fire, metal, electricity };

const inputName = document.getElementById('Name') as HTMLInputElement;
const inputDesc = document.getElementById('Desc') as HTMLInputElement;
const inputAtta = document.getElementById('Attack') as HTMLInputElement;
const inputDef = document.getElementById('Defense') as HTMLInputElement;

const cardName = document.getElementById('CardName') as HTMLElement;
const cardDesc = document.getElementById('CardDesc') as HTMLElement;
const cardAttack = document.getElementById('CardAttack') as HTMLElement;
const cardDefense = document.getElementById('CardDefense') as HTMLElement;

class card {
    constructor(_name: string, _description: string, _elem: element, _attack: number, _defense: number) {

    }

    get name(): string {
        return this.name;
    }

    set name(newName: string) {
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
    const opc = document.getElementById('Element') as any;
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
