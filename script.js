const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const mainImage = document.querySelector(".main-picture");

const messages = [
  "No",
  "Are you sure?",
  "Pookie please",
  "Elli please stopopopop!!!",
  "Don't do this to me :(",
  "You're breaking my heart",
  "I'm gonna cry...",
  "STOOOOP NOOWWWWW!!!"
];
const MAX_TEXTS = messages.length;

let play = true;
let noCount = 0;

yesButton.addEventListener("click", handleYesClick);

noButton.addEventListener("click", function() {
  if (play) {
    noCount++;
    resizeYesButton();
    updateNoButtonText();
    if (noCount === MAX_TEXTS) {
      play = false;
    }
  }
});


function handleYesClick() {
  titleElement.innerHTML = "Yayyy!! :3";
  buttonsContainer.classList.add("hidden");
  changeImage("yes");
}

function resizeYesButton() {
  const computedStyle = window.getComputedStyle(yesButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  const newFontSize = fontSize * 1.6;

  yesButton.style.fontSize = `${newFontSize}px`;
}

function generateMessage(noCount) {
  const messageIndex = Math.min(noCount, messages.length - 1);
  return messages[messageIndex];
}

function changeImage() {
  mainImage.src = `https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif`;
  mainImage.style = 'width: 30rem; height: 30rem;';
}

function updateNoButtonText() {
  noButton.innerHTML = generateMessage(noCount);
}
