//code starts
let cardsArray = [];
let mathCards = '';
let forHit = document.querySelector('.for-imgyou');
let cardsNum = 0;
let myCurrentScore = 0;
let myCountSpan = document.querySelector('.span-you');
let computerCurrentScore = 0;
let computerCountSpan = document.querySelector('.span-computer');
let forComputerCard = document.querySelector('.for-imgcomputer');
let divHero = document.querySelector('.for-hero-img');
//1
const david = {
  name: 'david',
  rank: 'king',
  kingdom: 'spades',
};
const pallas = {
  name: 'pallas',
  rank: 'queen',
  kingdom: 'spades',
};
const ogier = {
  name: 'ogier',
  rank: 'jack',
  kingdom: 'spades',
};
//2
const alexandre = {
  name: 'alexandre',
  rank: 'king',
  kingdom: 'clubs',
};
const argine = {
  name: 'argine',
  rank: 'queen',
  kingdom: 'clubs',
};
const lancelot = {
  name: 'lancelot',
  rank: 'jack',
  kingdom: 'clubs',
};
//3
const charles = {
  name: 'charles',
  rank: 'king',
  kingdom: 'hearts',
};
const judith = {
  name: 'judith',
  rank: 'queen',
  kingdom: 'hearts',
};
const lahire = {
  name: 'lahire',
  rank: 'jack',
  kingdom: 'hearts',
};
//4
const caesar = {
  name: 'caesar',
  rank: 'king',
  kingdom: 'diamonds',
};
const rachel = {
  name: 'rachel',
  rank: 'queen',
  kingdom: 'diamonds',
};
const hector = {
  name: 'hector',
  rank: 'jack',
  kingdom: 'diamonds',
};
//cards object
let cards = {
  name: ['heart', 'diamond', 'flower', 'spade'],
  value: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  heroes: [
    david,
    pallas,
    ogier,
    alexandre,
    argine,
    lancelot,
    charles,
    judith,
    lahire,
    caesar,
    rachel,
    hector,
  ],
  heroCards: function () {
    this.heroes.forEach(function (hero) {
      let figure = document.createElement('figure');
      figure.className = 'figure-my-hero';
      let heroImg = document.createElement('img');
      heroImg.classList.add('image', hero.rank, 'of', hero.kingdom);
      heroImg.id = hero.name;
      heroImg.src = 'heroes/' + hero.name + '.jpg';
      divHero.append(figure);
      figure.append(heroImg);
    });
  },
  cardsForMe: function () {
    for (let i = 0; i < 2; i++) {
      let imageForMe = document.createElement('img');
      imageForMe.className = 'card-for-me';
      mathCards = `${
        this.name[Math.floor(Math.random() * `${this.name.length}`)]
      }`;
      cardsNum = `${
        this.value[Math.floor(Math.random() * `${this.value.length} `)]
      }`;
      cardsNum = Number(cardsNum);
      imageForMe.src = mathCards + 'cards/' + mathCards + cardsNum + '.jpg';
      if (cardsArray.indexOf(mathCards + cardsNum) == -1) {
        cardsArray.push(mathCards + cardsNum);
        forHit.append(imageForMe);
      } else {
        i--;
        myCurrentScore -= cardsNum;
      }
      myCurrentScore += cardsNum;
    }
    myCountSpan.textContent = myCurrentScore;
    detectFunction();
    this.cardsForComputer();
  },
  cardsForComputer: function () {
    for (let i = 0; i < 2; i++) {
      let flipCard = document.createElement('div');
      flipCard.className = 'flip-container';
      let card = document.createElement('div');
      card.className = 'card';
      let computerCardImage = document.createElement('img');
      computerCardImage.className = 'card-for-computer';
      let frontCard = document.createElement('img');
      frontCard.className = 'front';
      mathCards = `${
        this.name[Math.floor(Math.random() * `${this.name.length}`)]
      }`;
      cardsNum = `${
        this.value[Math.floor(Math.random() * `${this.value.length} `)]
      }`;
      cardsNum = Number(cardsNum);
      computerCardImage.src =
        mathCards + 'cards/' + mathCards + cardsNum + '.jpg';
      frontCard.src = 'front.jpg';

      if (cardsArray.indexOf(mathCards + cardsNum) == -1) {
        cardsArray.push(mathCards + cardsNum);
        forComputerCard.append(flipCard);
        flipCard.append(card);
        card.append(frontCard);
        card.append(computerCardImage);
      } else {
        i--;
        computerCurrentScore -= cardsNum;
      }
      computerCurrentScore += cardsNum;
      if (cardsArray.length === 4 && computerCurrentScore <= 10) {
        i = 0;
      }
    }
    detectFunction();
  },
};

//when HIT button clicked
let hit = document.querySelector('.hit');
hit.addEventListener('click', function () {
  if (hit.textContent == 'HIT') {
    if (cardsArray.length == 0) {
      return alert('You must have cards!');
    }
    for (let i = 0; i < 1; i++) {
      let imageForMe = document.createElement('img');
      imageForMe.className = 'card-for-me';
      mathCards = cards.name[Math.floor(Math.random() * cards.name.length)];
      cardsNum = cards.value[Math.floor(Math.random() * cards.value.length)];
      cardsNum = Number(cardsNum);
      imageForMe.src = mathCards + 'cards/' + mathCards + cardsNum + '.jpg';
      if (cardsArray.indexOf(mathCards + cardsNum) == -1) {
        cardsArray.push(mathCards + cardsNum);
        forHit.append(imageForMe);
      } else {
        i--;
        myCurrentScore -= cardsNum;
      }
      myCurrentScore += cardsNum;
    }
    hit.disabled = true;
    myCountSpan.textContent = myCurrentScore;
    detectFunction();
  } else if (hit.textContent == 'QUIT') {
    let a = confirm('are you sure?');
    if (a === true) {
      window.location.reload(true);
    }
  }
});

let myFinalScoreTd = document.querySelector('.td-you');
let myFinalScore = 0;
let computerFinalScoreTd = document.querySelector('.td-computer');
let computerFinalScore = 0;
let drawTd = document.querySelector('.td-draw');
let draw = 0;
let myWidth = 100;
let comWidth = 100;
let computerLife = document.querySelector('.computerlife');
let myLife = document.querySelector('.mylife');
let deal = document.querySelector('.deal');
let divImageHeroes = document.querySelector('.heroes');
//when DEAL button clicked
deal.addEventListener('click', function () {
  divImageHeroes.style.display = 'none';
  let yourScoreSpan = document.querySelector('.you');
  yourScoreSpan.style.left = '0px';
  if (deal.textContent == 'DEAL') {
    cardsArray = [];
    computerCountSpan.textContent = computerCurrentScore;
    let card = document.querySelectorAll('.card');
    card.forEach(function (backCard) {
      backCard.style.transform = 'rotateY(180deg)';
    });
    //
    if (myCurrentScore === computerCurrentScore) {
      draw++;
      drawTd.textContent = draw;
      drawTd.style.backgroundColor = 'yellow';
      drawTd.style.color = 'darkblue';
    } else if (myCurrentScore > computerCurrentScore) {
      myFinalScore++;
      myFinalScoreTd.textContent = myFinalScore;
      myFinalScoreTd.style.backgroundColor = 'yellow';
      myFinalScoreTd.style.color = 'darkblue';
      myWidth += 10;
      comWidth -= 10;
      computerLife.style.width = comWidth + '%';
      myLife.style.width = myWidth + '%';
    } else {
      computerFinalScore++;
      computerFinalScoreTd.textContent = computerFinalScore;
      computerFinalScoreTd.style.backgroundColor = 'yellow';
      computerFinalScoreTd.style.color = 'darkblue';
      comWidth += 10;
      myWidth -= 10;
      myLife.style.width = myWidth + '%';
      computerLife.style.width = comWidth + '%';
    }
    deal.textContent = 'PLAY';
    hit.textContent = 'QUIT';
    hit.disabled = false;
    endFunction();
  } else if (deal.textContent == 'PLAY') {
    let yourScoreSpan = document.querySelector('.you');
    yourScoreSpan.style.left = '0px';
    let plusByHero = document.querySelector('#plus-by-hero');
    plusByHero.textContent = '';
    myCurrentScore = 0;
    computerCurrentScore = 0;
    myCountSpan.textContent = myCurrentScore;
    computerCountSpan.textContent = '';
    computerCountSpan.style.color = 'darkred';
    myCountSpan.style.color = 'darkred';
    deal.textContent = 'DEAL';
    hit.textContent = 'HIT';
    computerFinalScoreTd.style.backgroundColor = 'darkblue';
    computerFinalScoreTd.style.color = 'white';
    myFinalScoreTd.style.backgroundColor = 'darkblue';
    myFinalScoreTd.style.color = 'white';
    drawTd.style.backgroundColor = 'darkblue';
    drawTd.style.color = 'white';
    removeCardsFunction();
    cards.cardsForMe();
  }
});

//function that controls the score > 21
let detectFunction = function () {
  if (myCurrentScore > 21) {
    myCurrentScore -= 21;
    myCountSpan.textContent = myCurrentScore;
  } else if (myCurrentScore == 21) {
    myCountSpan.style.color = 'yellow';
    hit.disabled = true;
  } else if (myCurrentScore < 10 && myWidth > 129) {
    let divHeroes = document.querySelector('.heroes');
    divHeroes.style.display = 'block';
  }
  if (computerCurrentScore > 21) {
    computerCurrentScore -= 21;
  } else if (computerCurrentScore == 21) {
    computerCountSpan.style.color = 'yellow';
  }
};

//remove cards on the table
let removeCardsFunction = function () {
  let remove = document.querySelectorAll(
    '.card-for-me,.card-for-computer,.flip-container,.card,.front'
  );
  remove.forEach(function (card) {
    card.remove();
  });
};

// for blackjack heroes;
let plusByHero = document.querySelector('#plus-by-hero');
cards.heroCards(); //calling this function to append hero cards
let AddHero = function () {
  if (cardsArray.length == 0) {
    return alert("You can't use Blackjack heroes at this time");
  }
  let yourScoreSpan = document.querySelector('.you');
  yourScoreSpan.style.left = '-5px';
  let math = Math.floor(Math.random() * 5) + 8;
  let imageForMe = document.createElement('img');
  imageForMe.className = 'card-for-me';
  imageForMe.src = this.src;
  heroValue = math;
  forHit.append(imageForMe);
  myCurrentScore += heroValue;
  plusByHero.textContent = '+' + heroValue;
  plusByHero.style.color = 'yellow';
  hit.disabled = true;
  divImageHeroes.style.display = 'none';
  detectFunction();
};
let imageHeros = document.querySelectorAll('.image');
imageHeros.forEach(function (img) {
  img.addEventListener('click', AddHero);
});

imageHeros.forEach(function (img) {
  img.addEventListener('mouseover', function () {
    let heroInfo = document.querySelector('.heroInfo');
    let heroName = document.querySelector('#strongName');
    let heroRank = document.querySelector('#strongRank');
    let nameOfHero = this.id;
    heroDescription = this.classList;
    heroRank.textContent = heroDescription.value.slice(6).toUpperCase();
    heroName.textContent = nameOfHero.toUpperCase();
    heroInfo.classList.add('heroInfo-class1');
    heroInfo.style.transform = 'scale(1)';
    heroInfo.style.transition = '0.9s';
  });
});
imageHeros.forEach(function (img) {
  img.addEventListener('mouseout', function () {
    let heroInfo = document.querySelector('.heroInfo');
    heroInfo.classList.remove('heroInfo-class1');
  });
});
//end of the game
let messageHeader = document.querySelector('.p-header');
let endFunction = function () {
  if (myWidth == 0) {
    messageHeader.textContent = 'You lost!';
    confirmationBox();
  } else if (comWidth == 0) {
    messageHeader.textContent = 'Congratulations you won!';
    confirmationBox();
  } else if (myWidth < 50) {
    myLife.style.backgroundColor = 'red';
  } else if (comWidth < 50) {
    computerLife.style.backgroundColor = 'red';
  } else {
    myLife.style.backgroundColor = 'lawngreen';
    computerLife.style.backgroundColor = 'lawngreen';
  }
};

//confirmation box
let btnX = document.querySelector('.btnX');
let btnYes = document.querySelector('.btnYes');
let btnNo = document.querySelector('.btnCancel');
let btnQuitPlay = document.querySelector('.for-btnquit-btnplay');
let confirmBox = document.querySelector('.div-confirm-box');

let confirmationBox = function () {
  confirmBox.style.opacity = 1;
  confirmBox.style.transitionDelay = '1s';
  confirmBox.style.transitionDuration = '0.5s';
  confirmBox.style.transitionTimingFunction = 'ease-in';
  btnQuitPlay.style.display = 'none';
  btnX.style.cursor = 'pointer';
  btnX.disabled = false;
  btnNo.style.cursor = 'pointer';
  btnNo.disabled = false;
  btnYes.style.cursor = 'pointer';
  btnYes.disabled = false;
};

btnYes.addEventListener('click', function () {
  btnX.style.cursor = 'auto';
  btnX.disabled = true;
  btnNo.style.cursor = 'auto';
  btnNo.disabled = true;
  btnYes.style.cursor = 'auto';
  btnYes.style.backgroundColor = 'white';
  btnYes.style.color = 'black';
  btnYes.disabled = true;
  confirmBox.style.opacity = '0';
  confirmBox.style.transitionDelay = '0s';
  confirmBox.style.transitionDuration = '0.1s';
  plusByHero.textContent = '';
  plusByHero.style.color = 'darkblue';
  btnQuitPlay.style.display = 'flex';
  myCurrentScore = 0;
  myFinalScore = 0;
  computerCurrentScore = 0;
  computerFinalScore = 0;
  myCountSpan.textContent = '';
  computerCountSpan.textContent = '';
  myFinalScoreTd.style.backgroundColor = 'darkblue';
  computerFinalScoreTd.style.backgroundColor = 'darkblue';
  drawTd.style.backgroundColor = 'darkblue';
  myFinalScoreTd.style.color = 'white';
  computerFinalScoreTd.style.color = 'white';
  drawTd.style.color = 'white';
  myFinalScoreTd.textContent = '0';
  computerFinalScoreTd.textContent = '0';
  drawTd.textContent = '0';
  myWidth = 100;
  comWidth = 100;
  myLife.style.backgroundColor = 'lawngreen';
  computerLife.style.backgroundColor = 'lawngreen';
  computerLife.style.width = comWidth + '%';
  myLife.style.width = myWidth + '%';
  removeCardsFunction();
});
btnYes.addEventListener('mouseover', function () {
  btnYes.style.backgroundColor = 'blue';
  btnYes.style.color = 'white';
});
btnNo.addEventListener('mouseover', function () {
  btnNo.style.backgroundColor = 'red';
  btnNo.style.color = 'white';
});
btnNo.addEventListener('click', function () {
  window.location.reload(true);
});

btnX.addEventListener('click', function () {
  btnNo.style.backgroundColor = 'red';
  btnNo.style.color = 'white';
  btnYes.style.backgroundColor = 'blue';
  btnYes.style.color = 'white';
});

let mouseOut = function () {
  btnNo.style.backgroundColor = 'white';
  btnNo.style.color = 'black';
  btnYes.style.backgroundColor = 'white';
  btnYes.style.color = 'black';
};
let mouseOver = function () {
  btnNo.style.backgroundColor = 'red';
  btnNo.style.color = 'white';
  btnYes.style.backgroundColor = 'blue';
  btnYes.style.color = 'white';
};
btnX.addEventListener('mouseout', mouseOut);
btnYes.addEventListener('mouseout', mouseOut);
btnNo.addEventListener('mouseout', mouseOut);

//front of the game
let divOpening = document.querySelector('.opening');
let btnStart = document.querySelector('#btn-start');
btnStart.addEventListener('click', function () {
  divOpening.style.display = 'none';
  btnQuitPlay.style.display = 'flex';
  btnQuitPlay.style.animationDelay = '5s';
  btnQuitPlay.style.animationDuration = '10s';
  hit.disabled = false;
  deal.disabled = false;
});

let divInstruction = document.querySelector('.main-instruction ');
let reminder = document.querySelector('.reminders');
let btnInstruction = document.querySelector('#btn-instruction');
btnInstruction.addEventListener('click', function () {
  divInstruction.classList.add('instruction-show');
  divInstruction.style.display = 'flex';
  divInstruction.style.backgroundColor = 'lightgray';
  divInstruction.style.transition = '0.5s';
  reminder.style.borderTop = '1px solid white';
  closeBtn.style.padding = '5px';
});

let closeBtn = document.querySelector('#close');
closeBtn.addEventListener('click', function () {
  divInstruction.classList.remove('instruction-show');
  divInstruction.style.backgroundColor = 'darkblue';
  reminder.style.borderTop = '1px solid darkblue';
  closeBtn.style.padding = '0px';
});

let btnExit = document.querySelector('#btn-exit');
btnExit.addEventListener('click', function () {
  let closeWindow = confirm('Are you sure?');
  if (closeWindow === true) {
    window.close();
  }
});
