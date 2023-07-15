var random1,random2;
random1 = Math.random();
random2 = Math.random();

random1 *=6;
random2 *=6;

random1 = Math.ceil(random1);
random2 = Math.ceil(random2);
console.log(random1);
var source1 = "images/dice"+random1+".png"
var source2 = "images/dice"+random2+".png"

document.querySelector(".img1").setAttribute("src",source1);
document.querySelector(".img2").setAttribute("src",source2);

if(random1>random2){
    document.querySelector(".result").textContent="Player 1 Wins"
}else if(random1<random2){
    document.querySelector(".result").textContent = "Player 2 Wins"
}else{
    document.querySelector(".result").textContent = "Draw"
}