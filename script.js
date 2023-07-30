

// hides loading and answer until button is pressed
let loading = document.getElementById('loading');
let answer = document.getElementById('answer');

function noShow() {
    loading.style.display = 'none';
    answer.style.display = 'none';
};

document.onload = noShow();


// allowing you to input text into textbox
const userQuestion = document.getElementById('question');

// when user presses enter, shows loading text
userQuestion.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        loading.style.display = '';
    }
});

// shows answer after allotted time
userQuestion.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        setTimeout(() => {
            answer.style.display = ''
        }, 2500)
    };
});



// eightball answers
let randomNumber = Math.floor(Math.random () * 8);

let eightBall = '';

switch (randomNumber) {
  case 0:
    eightBall = 'It is certain!!! ♡⸜(˶˃ ᵕ ˂˶)⸝♡'
    break;
  case 1:
    eightBall = 'It is decidedly so ٩(^ᗜ^ )و ´-'
    break;
  case 2:
    eightBall = 'Reply hazy try again (´･ω･`)? '
    break;
  case 3:
    eightBall = 'Cannot predict now \_(0_0)_/'
    break;
  case 4:
    eightBall = 'Do not count on it °՞(ᗒᗣᗕ)՞°'
    break;
  case 5:
    eightBall = 'My sources say no ˚‧º·(˚ ˃̣̣̥᷄⌓˂̣̣̥᷅ )‧º·˚'
    break;
  case 6:
    eightBall = 'Outlook not so good ˚‧º·(˚ ˃̣̣̥᷄⌓˂̣̣̥᷅ )‧º·˚'
    break;
  case 7:
    eightBall = 'Signs point to yes ԅ(≖⌣≖ԅ)'
    break;
  case 8:
    eightBall = 'Maybe ( ͡ ° ͜ʖ ͡ °)'
    break;
};

document.getElementById('answer').innerHTML = eightBall;
