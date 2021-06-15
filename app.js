document.addEventListener("DOMContentLoaded", () => {
  var instr = document.querySelector(".instructions");
  var btn = document.querySelector(".btn");
  var text = document.querySelector(".text");
  var count = 0;
  var userName = document.getElementById("name");
  var score = 0;
  //checking if user name exist or not

  if (localStorage.name !== undefined) {
    localStorage.removeItem("clickcount");
  }
  // storing the user name in Local Storage
  userName.onchange = function () {
    userName = userName.value;
    localStorage.setItem("name", userName);
    localStorage.setItem("bestscore", score);
    if (localStorage.name != undefined) {
      document.getElementById("nameHead").innerHTML =
        "Hi " + localStorage.name + " Welcome Back..! ";
      document.getElementById("name").style.display = "none";
    }
    //storing best score in the localStorage
    if (localStorage.bestscore !== undefined) {
      document.getElementsByClassName("text").innerHTML =
        "Your Best Score is " +
        localStorage.bestscore +
        " Play now to beat it ✌🤞😉😎  ";
    }
    // alert(localStorage.name);
  };
  //onclicking button instructions will apeared and start button will appeared
  btn.addEventListener("click", function () {
    instr.style.display = "inline-block";
    btn.style.display = "none";
    // localStorage.removeItem("name");
  });

  //card options
  const cardArray = [
    {
      name: "fries",
      img: "images/fries.png",
    },
    {
      name: "cheeseburger",
      img: "images/cheeseburger.png",
    },
    {
      name: "ice-cream",
      img: "images/ice-cream.png",
    },
    {
      name: "pizza",
      img: "images/pizza.png",
    },
    {
      name: "milkshake",
      img: "images/milkshake.png",
    },
    {
      name: "hotdog",
      img: "images/hotdog.png",
    },
    {
      name: "fries",
      img: "images/fries.png",
    },
    {
      name: "cheeseburger",
      img: "images/cheeseburger.png",
    },
    {
      name: "ice-cream",
      img: "images/ice-cream.png",
    },
    {
      name: "pizza",
      img: "images/pizza.png",
    },
    {
      name: "milkshake",
      img: "images/milkshake.png",
    },
    {
      name: "hotdog",
      img: "images/hotdog.png",
    },
  ];

  cardArray.sort(() => 0.5 - Math.random());

  const grid = document.querySelector(".grid");
  const resultDisplay = document.querySelector("#result");
  let cardsChosen = [];
  let cardsChosenId = [];
  let cardsWon = [];

  //counting no. of chances
  grid.addEventListener("click", function () {
    count++;
  });
  //create your board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement("img");
      card.setAttribute("src", "images/blank.png");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipCard);
      grid.appendChild(card);
    }
  }

  //check for matches
  function checkForMatch() {
    const cards = document.querySelectorAll("img");
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];

    if (optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute("src", "images/blank.png");
      cards[optionTwoId].setAttribute("src", "images/blank.png");
      alert("You have clicked the same image!");
    } else if (cardsChosen[0] === cardsChosen[1]) {
      alert("You found a match");
      cards[optionOneId].setAttribute("src", "images/white.png");
      cards[optionTwoId].setAttribute("src", "images/white.png");
      cards[optionOneId].removeEventListener("click", flipCard);
      cards[optionTwoId].removeEventListener("click", flipCard);
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute("src", "images/blank.png");
      cards[optionTwoId].setAttribute("src", "images/blank.png");
      alert("Sorry, try again");
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length / 2) {
      text.style.display = "inline-block";
      // resultDisplay.textContent = "Congratulations! You found them all!";
      alert("asfdsa");
    }
  }

  //flip your card
  function flipCard() {
    let cardId = this.getAttribute("data-id");
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute("src", cardArray[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 100);
    }
  }

  createBoard();
  //Storing locally the names and best score
  // As we already learned, the window object can be ommited for simplicity
});
