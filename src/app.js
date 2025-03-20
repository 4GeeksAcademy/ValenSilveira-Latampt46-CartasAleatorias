import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function newCard() {
  let suit = ["♦", "♥", "♠", "♣"];
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  let indexSuit = Math.floor(Math.random() * suit.length);
  let indexNumbers = Math.floor(Math.random() * numbers.length);

  let topElement = document.querySelector("#top");
  let numberElement = document.querySelector("#number");
  let endElement = document.querySelector("#end");

  topElement.innerHTML = suit[indexSuit];
  numberElement.innerHTML = numbers[indexNumbers];
  endElement.innerHTML = suit[indexSuit];

  let suitColor =
    suit[indexSuit] == "♦" || suit[indexSuit] == "♥"
      ? "text-danger"
      : "text-dark";

  topElement.className = suitColor;
  endElement.className = suitColor;
  numberElement.className = suitColor;
}

window.onload = function() {
  newCard();
};

document.querySelector("#newCard").addEventListener("click", newCard);

