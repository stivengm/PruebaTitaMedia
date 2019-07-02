var i = 0;
var images = [
	{
		img : './assets/image-big.png',
	},
	{
		"img" : './assets/image-big2.png',
	},
	{
		"img" : './assets/image-big3.jpg',
	}
];
var time = 3000;
var timeReset = 3200;
console.log(images);
function changeImg() {
	document.slide.src = images[i].img;
	document.querySelector('#slider').style.with = '100%';
	document.querySelector('#slider').style.marginLeft = '-100%';
	document.querySelector('#slider').style.display = 'block';
    document.querySelector('#slider').style.transition = 'all 0.5s';
    document.querySelector('.infoSlider').style.marginLeft = '-100%';
    document.querySelector('.infoSlider').style.transition = 'all 0.5s';
	if(i < images.length - 1) {
		i++;
	} else {
		i = 0;
	}
	setTimeout("changeImg()", time);
}
function reset() {
	document.querySelector('#slider').style.with = '100%';
	document.querySelector('#slider').style.marginLeft = '0';
	document.querySelector('#slider').style.display = 'block';
    document.querySelector('#slider').style.transition = 'all 0.5s';
    document.querySelector('.infoSlider').style.marginLeft = '0';
    document.querySelector('.infoSlider').style.transition = 'all 0.5s';
}
setInterval(reset, timeReset);
window.onload = changeImg;