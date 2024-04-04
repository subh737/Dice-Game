alert("Welcome To The Dice Game. Do You Want to play");
var p1 = prompt("Enter Player 1's Name");
var p2 = prompt("Enter Player 2's Name");
var x = 0;
var y = 0;
function Func() {
    document.getElementById("ply1").innerHTML = p1;
    document.getElementById("ply2").innerHTML = p2;

    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomDiceImage = "dice" + randomNumber1 + ".png";
    var randomImageSource = "images/" + randomDiceImage;
    var image1 = document.querySelectorAll("img")[0];
    image1.setAttribute("src", randomImageSource);

    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
    document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "🚩" + p1 + " Wins!";
        x++;
    } else if (randomNumber2 > randomNumber1) {
        document.querySelector("h1").innerHTML = "🚩" + p2 + " Wins!";
        y++;
    } else {
        document.querySelector("h1").innerHTML = "Draw!";
    }
    document.getElementsByClassName("play1")[0].innerHTML = x;
    document.getElementsByClassName("play2")[0].innerHTML = y;
}
