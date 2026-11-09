// TODO 1: Flytta frukterna till en egen fil, fruits.json, och importera dem här.
const fruits = ["Äpple", "Banan", "Päron", "Kiwi"];

const fruitListElement = document.querySelector("#fruit-list");

const renderFruits = (list) => {
  const items = list.map((fruit) => {
    return `<li>${fruit}</li>`;
  });

  fruitListElement.innerHTML = items.join("");
};

// TODO 2: Hämta fruits.json med fetch och then i stället för med import.
// TODO 3: Skriv om hämtningen med async och await.
// TODO 4: Lägg till en frukt i fruits.json och titta på requesten i fliken Network.
renderFruits(fruits);
