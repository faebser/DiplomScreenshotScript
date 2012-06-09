/* Author:
Fabian Frei // fabian.frei@yhperwerk.ch
*/
$(document).ready(function(){
	
	//do all the resizing stuff :) // 131:24
	var gif = $('#gif');
	var topPic = $('#topPic');
	var leftPic = $('#leftPic');
	var upperWrapperWidth = $('#topPicsWrapper').outerWidth()-4*(parseInt(topPic.css('marginLeft')));
	var upperPicturesHeight = parseInt(upperWrapperWidth/131*24);
	
	gif.css('height', upperPicturesHeight);
	topPic.css('height', upperPicturesHeight);
	leftPic.css('width', gif.width());
	$('#leftPicLink').css('width', gif.width() + parseInt(leftPic.css('marginLeft'))*2);
	$('#contentWrapper').css('width', $(window).width() - $('#leftPicLink').width());
	$('#content').css('width', $('#contentWrapper').width() - parseInt($('#content').css('marginLeft')*2));
	
	$('#gifOverlay').css({'height':gif.height(), 'width':gif.width()});
	$('#topPicOverlay').css({'height':topPic.height(), 'width':topPic.width()});
	$('#leftPicOverlay').css({'height':leftPic.height(), 'width':leftPic.width()});
	
	var backgroundImgSize = 10;
	var backgroundImg = new PNGlib(backgroundImgSize, backgroundImgSize, 256); // constructor takes height, weight and color-depth
	//var background = backgroundImg.color(0, 0, 0, 0); // set the background transparent

	//fill the img with grey pixels
	for(var y = 0; y < backgroundImgSize; y++) {
		for(var x = 0; x < backgroundImgSize; x++) {
			var grey = Math.random()*220;
			backgroundImg.buffer[backgroundImg.index(x, y)] = backgroundImg.color(grey, grey, grey, 35);
		}
	}
	$('body').css('backgroundImage','url("data:image/png;base64,'+backgroundImg.getBase64()+'")');
});