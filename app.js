let min = 1,
    max = 10,
    winningNumber = getRandomNumber(min,max);
    guessesLeft = 3;

const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessInput = document.querySelector('#guess-input'),
      guessBtn = document.querySelector('#guess-btn'),
      message = document.querySelector('.message');

minNum.textContent = min;
maxNum.textContent = max;

game.addEventListener('mousedown', function(e){
  if(e.target.className === 'play-again'){
    window.location.reload();
  }
})

guessBtn.addEventListener('click', function(){
  let guess = parseInt(guessInput.value);

  if(guessesLeft === 0){
    setMessage(`You Lose!`, 'red')
  }

  if(isNaN(guess) || guess < min || guess > max){
    guessInput.style.borderColor = 'red';
    setMessage(`Please enter a number between ${min} and ${max}`, 'red')
  }else{
    if (guess === winningNumber){
      gameOver(true,`You Win!`)
    } else{
      if(guessesLeft > 1){
        guessesLeft--;
        guessInput.style.borderColor = 'red';
        setMessage(`You have ${guessesLeft} guesses left!`, 'red');
      }else{
        gameOver(false, `The number was ${winningNumber}, YOU LOSE!`)
        guessInput.value = ''
      }
    }
  }
})

function setMessage(m, color){
  message.style.color = color
  message.textContent = m
}

function gameOver(won, m){
  let color = won === true ? 'blue' : 'red';

  guessInput.style.borderColor = color;

  guessBtn.value = 'Play Again?'
  guessBtn.className += 'play-again';
  

  setMessage(m, color)
}

function getRandomNumber(min, max){
  let num = Math.floor(Math.random() * (max - min + 1) + min )
  if (num > min && num < max) return num
}