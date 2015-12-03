/**
 * Here's where you store the faucets (the URLs).
 */
var faucets = [
    'default.html',
    'http://fieldbitcoins.com/',
    'http://memebase.cheezburger.com/',
    'http://geek.cheezburger.com/',
    'http://icanhas.cheezburger.com/gifs',
];

var currentFaucet = 0;

function setFaucet() {
    document.querySelector('.faucet-frame').src = faucets[currentFaucet];
}

/**
 * Jump to button.
 */
document.querySelector(".controls-jump").addEventListener('click', function() {
    currentFaucet = prompt('Enter a number to skip to that faucet:') - 1;

    if (currentFaucet < 0 || currentFaucet >= faucets.length) return alert('The number has to be between 1 and ' + faucets.length + '.');

    setFaucet();
});

/**
 * Link button (open in new tab).
 */
document.querySelector(".controls-link").addEventListener('click', function() {
    window.open(document.querySelector('.faucet-frame').src, '_blank').focus();
});

/**
 * Reload button.
 */
document.querySelector(".controls-reload").addEventListener('click', setFaucet);

/**
 * Previous button.
 */
document.querySelector(".controls-previous").addEventListener('click', function() {
    currentFaucet--;

    if (currentFaucet === -1) currentFaucet = faucets.length - 1;

    setFaucet();
});

/**
 * Next button.
 */
document.querySelector(".controls-next").addEventListener('click', function() {
    currentFaucet++;

    if (currentFaucet === faucets.length) currentFaucet = 0;

    setFaucet();
});
