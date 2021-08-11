//Canvas reference blocks here!
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
	img_imgTag = new Image(); //defining a variable with a new image
	img_imgTag.onload = uploadimg; // setting a function, onloading this variable
	img_imgTag.src = img_image;   // load image
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

//Code to grab the key-pressed event here!
window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122) || (keyPressed >=65 && keyPressed<=90)){
		//Code to check the type of key pressed here!
		aplhabetkey();
		document.getElementById("d1").innerHTML="You pressed an ALPHABET key";
		console.log("ALPHABET key")
		} 
	
	else if((keyPressed >=48 && keyPressed<=57)){
		//Code to check the type of key pressed here!
		numberkey();
		document.getElementById("d1").innerHTML="You pressed an NUMBER key";
		console.log("NUMBER key")
		} 
	
	else if((keyPressed >=37 && keyPressed<=40)){
		//Code to check the type of key pressed here!
		arrowkey();
		document.getElementById("d1").innerHTML="You pressed an ARROW key";
		console.log("ARROW key")
		} 
	
	else if((keyPressed == 17)){
		//Code to check the type of key pressed here!
		specialkey();
		document.getElementById("d1").innerHTML="You pressed an SPEACIAL key";
		console.log("SPECIAL key")
		} 
	

	else if((keyPressed == 18)){
		//Code to check the type of key pressed here!
		specialkey();
		document.getElementById("d1").innerHTML="You pressed an SPEACIAL key";
		console.log("SPECIAL key")
		} 

	else if((keyPressed == 27)){
		//Code to check the type of key pressed here!
		specialkey();
		document.getElementById("d1").innerHTML="You pressed an SPEACIAL key";
		console.log("SPECIAL key")
		}
	else {
		otherkey();
    	document.getElementById("d1").innerHTML="You pressed SYMBOL or OTHER key";
		console.log("Other key")
	}
}

function aplhabetkey()
{
	img_image="Alpkey.png";
	add(); 

}
function numberkey()
{
	img_image="numkey.png";
	add();
}
function arrowkey()
{
	img_image="Arrkey.png";
	add();
}
function specialkey()
{
	img_image="spkey.png";
	add();
}
function otherkey()
{
	img_image="otherkey.png";
	add();
}
	
