/* Author:
Fabian Frei // fabian.frei@yhperwerk.ch
*/

var backgroundImgSize = 100;
var backgroundImg = new PNGlib(backgroundImgSize, backgroundImgSize, 256); // construcor takes height, weight and color-depth
var background = backgroundImg.color(0, 0, 0, 0); // set the background transparent

//fill the img with grey pixels
for(var y = 0; y < backgroundImgSize; y++) {
	for(var x = 0; x < backgroundImgSize; x++) {
		var grey = Math.random()*240;
		console.log(grey);
		backgroundImg.buffer[backgroundImg.index(x, y)] = backgroundImg.color(grey, grey, grey, 25);
	}
}

$(document).ready(function(){
	console.log('url("data:image/png;base64,'+backgroundImg.getBase64()+'")');
	$('body').css('backgroundImage','url("data:image/png;base64,'+backgroundImg.getBase64()+'")');
});