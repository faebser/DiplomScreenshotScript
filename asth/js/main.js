/* Author:
Fabian Frei // fabian.frei@yhperwerk.ch
*/
$(document).ready(function(){
	
	//do all the resizing stuff :)
	
	
	var backgroundImgSize = 90;
	var backgroundImg = new PNGlib(backgroundImgSize, backgroundImgSize, 256); // construcor takes height, weight and color-depth
	var background = backgroundImg.color(0, 0, 0, 0); // set the background transparent

	//fill the img with grey pixels
	for(var y = 0; y < backgroundImgSize; y++) {
		for(var x = 0; x < backgroundImgSize; x++) {
			var grey = Math.random()*220;
			backgroundImg.buffer[backgroundImg.index(x, y)] = backgroundImg.color(grey, grey, grey, 35);
		}
	}
	$('body').css('backgroundImage','url("data:image/png;base64,'+backgroundImg.getBase64()+'")');
});