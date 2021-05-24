const questionsArray = [
  {
    number: 1,
    question: 'Чем является Солнце?',
    answer: [
      '<input type="radio" name="answer" id="answ1" value="Звезда" class="answer"><label for="answ1">Звезда</label>',
      '<input type="radio" name="answer" id="answ2" value="Планета" class="answer"><label for="answ2">Планета</label>',
      '<input type="radio" name="answer" id="answ3" value="Комета" class="answer"><label for="answ3">Комета</label>'
    ],
    correctAnswer: 'Звезда'
  },
  {
    number: 2,
    question: 'Сколько материков на Земле?',
    answer: [
      '<input type="radio" name="answer" id="answ1" value="Пять" class="answer"><label for="answ1">Пять</label>',
      '<input type="radio" name="answer" id="answ2" value="Шесть" class="answer"><label for="answ2">Шесть</label>',
      '<input type="radio" name="answer" id="answ3" value="Семь" class="answer"><label for="answ3">Семь</label>'
    ],
    correctAnswer: 'Шесть'
  },
  {
    number: 3,
    question: 'Какая планета четвертая от солнца?',
    answer: [
      '<input type="radio" name="answer" id="answ1" value="Венера" class="answer"><label for="answ1">Венера</label>',
      '<input type="radio" name="answer" id="answ2" value="Юпитер" class="answer"><label for="opt2">Юпитер</label>',
      '<input type="radio" name="answer" id="answ3" value="Марс" class="answer"><label for="answ3">Марс</label>'
    ],
    correctAnswer: 'Марс'
  },
  {
    number: 4,
    question: 'Какая нота и продукт называются одинаково?',
    answer: [
      '<input type="radio" name="answer" id="answ1" value="Сахар" class="answer"><label for="answ1">Сахар</label>',
      '<input type="radio" name="answer" id="answ2" value="Соль" class="answer"><label for="answ2">Соль</label>',
      '<input type="radio" name="answer" id="answ3" value="Масло" class="answer"><label for="answ3">Масло</label>'
    ],
    correctAnswer: 'Соль'
  }
];

let counter = 0;


//Вывод слайдов
function showSlide(int) {
  let slide = document.querySelector('.slide');
  slide.innerHTML = `<p class="title">Вопрос ${questionsArray[int].number}</p>
                     <div class="question">${questionsArray[int].question}</div>
                     <div class="answer">${questionsArray[int].answer}</div>`;
  console.log(questionsArray[int].number);
}

function changeSlide() {
  let submitButton = document.querySelectorAll('.button'),
  index = 0;
  showSlide(index);
  submitButton.forEach((item) => {
    item.addEventListener('click', () => {
      if (item.classList.contains('button_previous')) {
        index--;
      } else {
        index++;
      }
      showSlide(index);
    });
  });
}
changeSlide();
