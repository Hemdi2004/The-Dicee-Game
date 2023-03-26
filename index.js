var player1=prompt("Player1's name !")
var player2=prompt("Player2's name !")

var randomNumber1=Math.floor(Math.random()*6+1);
var randomNumber2=Math.floor(Math.random()*6+1);
document.querySelector("img.img1").setAttribute("src","images/dice"+randomNumber1+".png")
document.querySelector("img.img2").setAttribute("src","images/dice"+randomNumber2+".png")

if (randomNumber1>randomNumber2) {
   document.querySelector("div h1").innerHTML=player1+" Wins!"
} else if (randomNumber1<randomNumber2) {
   document.querySelector("div h1").innerHTML=player2+" Wins!"     
}
 else {
   document.querySelector("div h1").innerHTML="Draw!"
 }

