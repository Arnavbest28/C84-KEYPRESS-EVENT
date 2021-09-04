var canvas= document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var IMG;
var img_width= 500;
var img_height= 300;
var img_x= 0;
var img_y= 0;

function add(){
    IMGTag= new Image();
    IMGTag.onload= uploadIMG;
    IMGTag.src= IMG;
}
function uploadIMG(){
    ctx.drawImage(IMGTag, img_x, img_y, img_width, img_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if((keyPressed>=97 && keyPressed<=122)|| (keyPressed>=65 && keyPressed<=90)){
        alphabetkey();
        document.getElementById("d1").innerHTML="You pressed Alphabet key";
        console.log("Aplphabet Key");
    }
    else if(keyPressed >=48 && keyPressed<=57)
		{
			numberkey();
			document.getElementById("d1").innerHTML="You pressed Number Key";
			console.log("Number key");
		}
        else if(keyPressed >=37 && keyPressed<=40)
		{
			arrowkey();
			document.getElementById("d1").innerHTML="You pressed Arrow Key";
			console.log("Arrow Key");
		}
		else if((keyPressed ==17)|| (keyPressed ==18 || keyPressed ==27))
		{
			specialkey();
			document.getElementById("d1").innerHTML="You pressed Ctrl/Esc/Alt";
			console.log("Special key");
		}
	else{
		otherkey();
		document.getElementById("d1").innerHTML="You pressed symbol or other key";
        console.log("Other key");
	}
}
function alphabetkey(){
    IMG="alphabetkey.png";
    add();
} 
function numberkey(){
    IMG= "NUMBERKEY.png";
    add();
}
function arrowkey(){
    IMG= "ARROWKEY.png";
    add();
}
function specialkey(){
    IMG="SPECIALKEY.png";
    add();
}
function otherkey(){
    IMG= "OTHERKEY.png";
    add();
}