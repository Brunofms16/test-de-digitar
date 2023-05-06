// const text = document.getElementById("text");
// const enter = document.getElementById("enter");
// const restart = document.getElementById("restart");
// const result = document.getElementById("result");
// const history = document.getElementById("history");
// const alternateTheme = document.getElementById("alternate-theme");

// const texts = [
//   "A cidade movimentada nunca dorme, sempre ativa",
//   "O vento frio soprou forte na noite escura",
//   "O conhecimento só é valioso quando é aplicado. Ele é inútil se não for",
//   "O que eu quero é um universo equilibrado",
//   "Eu só queria voltar a ser o Saiyajin cruel e arrogante, a quem nada importava, e queria ter uma luta perfeita",
//   "Eu sou o guerreiro que herdou a força de Goku e Vegeta. Eu sou Vegito",
//   "Eu sou o grande Babidi, o mestre da magia",
//   "Não há limites para o poder quando se tem força de vontade",
//   "É de mais de 8 mil",
// ];

// function start() {

//     const status = JSON.parse(localStorage.getItem("testLoad"))

//     if(!status) {
//         localStorage.setItem("startTime" , new Date().getSeconds());
//         localStorage.setItem("testLoad" , true);
//     }
  
// }

// function addHistory(textWrite, timeUsed) {
// const itemHistory = document.createElement("p")
// itemHistory.textContent = `Texto "${textWrite}" - Tempo : ${timeUsed} segundos `
// history.appendChild(itemHistory)
// }

// function verify() {
//   const startTime = parseInt(localStorage.getItem("startTime"));
//   const finalTime = new Date().getTime()
//   const timeUsed = (finalTime - startTime) / 1000;
//   localStorage.setItem("testProgress", false) 
//   enter.value = "";
//   newText();
//   result.textContent = `Parabéns, você levou ${timeUsed.toFixed(2)} segundos.`;
//   addHistory(text.textContent, timeUsed.toFixed(2));
// }


// function newText() {
//   const index = Math.floor(Math.random() * texts.length);
//   text.textContent = texts[index];
// }

// newText();

// enter.addEventListener("keyup" , updateTest);

// function updateTest() {

//     start();

//     if (enter.value === text.textContent) {
//      verify()
//     }

// }



// restart.addEventListener("click", function() {
  
//   newText();
//   enter.textContent = "";
//   enter.focus();
// });
// JavaScript
const textElem = document.getElementById("text");
const enterElem = document.getElementById("enter");
const restartElem = document.getElementById("restart");
const resultElem = document.getElementById("result");
const historyElem = document.getElementById("history");
const alternateThemeBtn = document.getElementById("alternate-theme");
const difficultySelect = document.getElementById("difficulty");

const texts = {
  easy: [
    "Eu sou o Super Saiyajin Son Goku!",
    "A vingança é um prato que se come frio!" ,
    "Sou a justiça!",
    "Eu sou um Namekuseijin pacifista!",
    "Ninguém me supera em poder"
    
  ],
  medium: [
    "O mundo só está certo quando se faz o que se acredita ser justo." ,
    "Isso mesmo eu sou Kira",
    "Eu escolho criar um mundo melhor.",
    "Sinto que este poder não tem fim!" ,
   
  ],
  hard: [
    "Você é mais fraco do que eu pensava, vamos fazer isso mais interessante!",
    "O universo inteiro é meu inimigo!" ,
    "Eu só queria voltar a ser o Saiyajin cruel e arrogante, a quem nada importava, e queria ter uma luta perfeita",
    "Venha lutar comigo, pois quero testar minha força contra a sua!",
    "O guerreiro mais forte do universo não é aquele que nunca perde, mas sim aquele que sempre se levanta." ,
    ,
  ],
};

let startTime = null; // tempo de início do teste
let currentText = null; // texto atual
let currentDifficulty = null; // dificuldade atual

function getRandomText(difficulty) {
  const textArray = texts[difficulty];
  const index = Math.floor(Math.random() * textArray.length);
  return textArray[index];
}

function resetTest() {
  const difficulty = difficultySelect.value;
  currentDifficulty = difficulty;
  currentText = getRandomText(difficulty);
  textElem.textContent = currentText;
  resultElem.textContent = "";
  enterElem.value = "";
  startTime = new Date().getTime(); // atualiza o tempo de início
}

function addHistory(text, timeUsed, difficulty) {
  const item = document.createElement("li");
  item.textContent = `"${text}" - Tempo: ${timeUsed} segundos - Dificuldade: ${difficulty}`;
  historyElem.appendChild(item);
}
function verifyInput() {
  if (enterElem.value === currentText) {
    const endTime = new Date().getTime();
    const timeUsed = (endTime - startTime) / 1000;
    resultElem.textContent = `Parabéns, você levou ${timeUsed.toFixed(2)} segundos.`;
    addHistory(enterElem.value, timeUsed.toFixed(2), currentDifficulty);
    resetTest();
  }
}

function toggleTheme() {
  document.body.classList.toggle("light");
  document.body.classList.toggle("dark");
}

// inicializa o teste
resetTest();

enterElem.addEventListener("input", verifyInput);
restartElem.addEventListener("click", resetTest);
alternateThemeBtn.addEventListener("click", toggleTheme);
difficultySelect.addEventListener("change", resetTest);

