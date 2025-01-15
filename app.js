let catImg = document.querySelector(".meow");
let dogImg = document.querySelector(".woof");
let catScore = 0;
let dogScore = 0;             
let catPoints = document.querySelector(".c1");
let dogPoints = document.querySelector(".d1");
let doghouse = document.querySelector(".dogs");

catPoints.innerHTML = catScore;
dogPoints.innerHTML = dogScore;
// ---------------------------------------------QS

const populateDogToScreen = (url) => {
  dogImg.setAttribute("src", url);
};

const getDog = async () => {
  const response = await fetch("https://dog.ceo/api/breeds/image/random");
  const jsonData = await response.json();
  let dogLink = jsonData.message;
  // --------> response === {}
  populateDogToScreen(dogLink);
};

// --------------------------------------[DOG LOGIC]

// --------------------------------------[CAT LOGIC]
const populateCatToScreen = (url) => {
  catImg.setAttribute("src", url);
  
};

catImg.addEventListener("click", () => {
  catScore++;
  catPoints.innerHTML = catScore;
  getCat();
});

dogImg.addEventListener("click", () => {
  dogScore++;
  dogPoints.innerHTML = dogScore;
  getDog();
});

const getCat = async () => {
  let response = await fetch("https://api.thecatapi.com/v1/images/search");
  const jsonData = await response.json();
  // --->goodPractice
  let catString = jsonData[0].url;
  // --------> response === [*]
  populateCatToScreen(catString);
};

const startGame = () => {
  // 1.Load Cat
  getCat();
  getDog();
};

startGame();