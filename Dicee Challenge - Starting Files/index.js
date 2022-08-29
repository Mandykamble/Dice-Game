
//





function myFunction1() {
    var randomNo1 = Math.random();
    randomNo1=randomNo1*6;
    randomNo1=Math.floor(randomNo1)+1;
    RandomImgSrc="images/dice"+randomNo1+".png";
    
    document.querySelectorAll("img")[0].setAttribute("src",RandomImgSrc);


var randomNo2 = Math.random();
randomNo2=randomNo2*6;
randomNo2=Math.floor(randomNo2)+1;
RandomImg2Src="images/dice"+randomNo2+".png";


document.querySelectorAll("img")[1].setAttribute("src",RandomImg2Src);



if(randomNo1>randomNo2){
    document.querySelector("h1").innerHTML="Player1 Won";
}
else if(randomNo1<randomNo2){
    document.querySelector("h1").innerHTML="Player2 Won";
}
else{
    document.querySelector("h1").innerHTML="Equal";
}
    
}





