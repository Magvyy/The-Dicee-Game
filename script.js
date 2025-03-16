

var n1 = Math.floor(6 * Math.random() + 1);
var n2 = Math.floor(6 * Math.random() + 1);

var dice1 = document.querySelector(".img1");
var dice2 = document.querySelector(".img2");

dice1.setAttribute("src", "./images/dice" + n1 + ".png");
dice2.setAttribute("src", "./images/dice" + n2 + ".png");

var title = document.querySelector("h1");

if (n1 > n2) {
    title.innerHTML = "Player 1 Wins!"
}
else if (n1 < n2) {
    title.innerHTML = "Player 2 Wins!"
}
else {
    title.innerHTML = "It's a tie!"
}