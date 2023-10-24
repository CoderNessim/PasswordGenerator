// document.querySelector('.messageCheckbox').checked;
const lowerCase = document.getElementById('task4');
const upperCase = document.getElementById('task3');
const numbers = document.getElementById('task2');
const symbols = document.getElementById('task1');
const checkboxes = document.querySelectorAll('.checkbox');
const myArray = new Array(20);
const lengthArray = 11;
const lengthCase = 25;
const lengthNumbers = 9;
const lengthSymbols = 30;
let checkCount = 0;
const generatePassword = document.querySelector('.generate-button');
const pastedPassword = document.querySelector('.pasted-password');
const copyButton = document.querySelector('.copy-button');
const refresh = document.querySelector('.retry-button');
const copyClipboard = document.querySelector('.clipboard-modal');

for (let i = 0; i < 20; i++) {
  myArray[i] = null;
}

const upperCaseArray = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
  'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];

const lowerCaseArray = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
  'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];

const numbersArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

const symbolsArray = [
  '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+',
  '=', '[', ']', '{', '}', '|', ':', ';', '<', '>', ',', '.',
  '?', '/', '~', '`', '"', '\\'
];


checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', function() {
  if (checkbox.checked) {
    checkCount++;
    checkbox.disabled = true;
    } else {
      checkCount--;
    }
  });
});

function randomExcluded(min, max, excluded) {
  var n = Math.floor(Math.random() * (max-min) + min);
  if (n >= excluded) {
    n++;
  }
  return n;
}


generatePassword.addEventListener('click', function () {
  while (myArray.includes(null)) {
    let myArrayRandNum = Math.floor(Math.random() * 20);
    if (symbols.checked && myArray[myArrayRandNum] === null) {
      myArray[myArrayRandNum] = symbolsArray[Math.floor(Math.random() * lengthSymbols)];
      myArrayRandNum = Math.floor(Math.random() * 20);
    }
    if (upperCase.checked && myArray[myArrayRandNum] === null) {
      myArray[myArrayRandNum] = upperCaseArray[Math.floor(Math.random() * lengthCase)];
      myArrayRandNum = Math.floor(Math.random() * 20);
    }
    if (numbers.checked && myArray[myArrayRandNum] === null) {
      myArray[myArrayRandNum] = numbersArray[Math.floor(Math.random() * lengthNumbers)];
      myArrayRandNum = Math.floor(Math.random() * 20);
    }
    if (lowerCase.checked && myArray[myArrayRandNum] === null) {
      myArray[myArrayRandNum] = lowerCaseArray[Math.floor(Math.random() * lengthCase)];
      myArrayRandNum = Math.floor(Math.random() * 20);
    } 
    if(checkCount === 0) {
      break;
    }
  }
  pastedPassword.textContent = myArray.join('');
});

copyButton.addEventListener('click', function() {
  let copy = document.createElement('textarea');
  copy.value = pastedPassword.textContent;
  document.body.appendChild(copy);
  copy.select();
  document.execCommand("copy");
  document.body.removeChild(copy);  
  copyClipboard.classList.remove('hidden');
});

refresh.addEventListener('click', function() {
  checkCount = 0;
  location.reload();
});