
//instantiation
const fixItGame = new Game();

let isProcessing=false;

window.addEventListener('load', () => {
    const startButton = document.querySelector('.start-btn')

    //const fixItGame = new Game();

    startButton.addEventListener('click', () => {
        fixItGame.startGame()
    })







})
/*
function loadProblem(element){

    const eachProblem=document.createElement('h3')
    element.forEach((el) => {
    eachProblem.innerHTML= '${myQuestions[i].problem}'
    
    this.problemDisplayed.appendChild(eachProblem);
        
    });

 }

 function loadAllAnswers(element){

    const eachPart=document.createElement('div')
    element.forEach((el) => {
    eachProblem.innerHTML= '${myQuestions[i].problem}'
    
    this.problemDisplayed.appendChild(eachProblem);
        
    });

 }
*/

//to check if the player has clicked 2 card


//defining clicking of answers
























/*
const spareParts=[
    { name: 'battery', img: 'battery.jpg' },
    { name: 'camera-board', img: 'camera-board.jpg' },
    { name: 'camera-cable', img: 'camera-cable.jpg' },
    { name: 'charger', img: 'charger.jpg' },
    { name: 'fan', img: 'fan.jpg' },
    { name: 'hard-disk-drive', img: 'hard-disk-drive.jpg' },
    { name: 'hinges', img: 'hinges.jpg' },
    { name: 'keyboard', img: 'keyboard.jpg' },
    { name: 'LCD-cover', img: 'LCD-cover.jpg' },
    { name: 'motherboard', img: 'motherboard.jpg' },
    { name: 'mouse', img: 'mouse.jpg' },
    { name: 'screen', img: 'screen.jpg' },
    { name: 'screws', img: 'screws.jpg' },
    { name: 'speakers', img: 'speakers.jpg' },
    { name: 'touchpad-cable', img: 'touchpad-cable.jpg' },
    { name: 'touchpad', img: 'touchpad.jpg' },
    { name: 'USB-port', img: 'USB-port.jpg' }
]
*/