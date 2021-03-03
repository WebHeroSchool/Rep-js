const quest1 = {question: 'Чем является Солнце?', correctAnswer: 'звезда'}
const quest2 = {question: 'Сколько материков на Земле?', correctAnswer: 'шесть'}
const quest3 = {question: 'Какая планета четвертая от солнца ?', correctAnswer: 'марс'}
const quest4 = {question: 'Какая нота и продукт называются одинаково?', correctAnswer: 'соль'}

let score = 0;
let quest = [quest1, quest2, quest3, quest4];

function showResults() {
  quest.forEach((item) => {
  	let a = prompt(item.question);
  	a = a.toLowerCase();
  	answer = item.correctAnswer.toLowerCase(); 
	if (answer === a) {
  		alert ('Верно!');
		score++
  	} else {
    		alert('Ошибка!')
    	}
  })
  alert("Вы отгадали " + score + " загадки!");
}

showResults();
