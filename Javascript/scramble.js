function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomLetter() {
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    return alphabet[rand(0, alphabet.length - 1)];
}

var word = document.querySelector('#scrambleText');
var INITIAL_WORD = word.innerText;
var isGoing = false;

function init() {
    if (isGoing) return;
    isGoing = true;
    let count = 0;
    let globalCount = 0;

    let interv = setInterval(function () {
        let finalWord = '';
        for (let x = 0; x < INITIAL_WORD.length; x++) {
            if (x <= count && globalCount > 20) {
                finalWord += INITIAL_WORD[x];
            } else {
                finalWord += INITIAL_WORD[x] === ' ' ? ' ' : getRandomLetter();
            }
        }
        word.innerText = finalWord;

        if (globalCount > 20) count++;
        if (count >= INITIAL_WORD.length) {
            clearInterval(interv);
            isGoing = false;
        }
        globalCount++;
    }, 30);
}

word.addEventListener('mouseenter', init);