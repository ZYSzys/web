var slideIndex = 0;
var slides = document.getElementsByClassName("mySlides");
var t;

function reset() {
	var header = document.getElementsByClassName("jumbotron");
	header[0].style.display = "none";

	for (var i = 0; i < slides.length; i++) {
		slides[i].style.display = "none"; 
	}

	var imgs = document.getElementsByTagName("img");
	for (var i = 0; i < imgs.length; i++) {
		imgs[i].style.borderWidth = '';
		imgs[i].style.borderColor = '';
		imgs[i].style.borderStyle = ''; 
	}

	buttonShow();
}

function buttonShow() {
	var bt = document.getElementsByTagName("button");
	for(var i = 0; i < bt.length; i++)
	{
		bt[i].style.display = "block";
	}
}

function prev() {
	slideIndex--;
	if(slideIndex < 0)
		slideIndex = 7;
	showOne(slideIndex);
}

function next() {
	slideIndex++;
	if(slideIndex > 7)
		slideIndex = 0;
	showOne(slideIndex);
}

function clr() {
	var header = document.getElementsByClassName("jumbotron");
	header[0].style.display = "block";
	for (var i = 0; i < slides.length; i++) {
		slides[i].style.width = "100%";
		slides[i].style.display = "block"; 
	}
	var bt = document.getElementsByTagName("button");
	for(var i = 0; i < bt.length-1; i++)
	{
		bt[i].style.display = "none";
	}
	clearTimeout(t);
}

function showSlides() {
	reset();
	slideIndex++;
	if (slideIndex > slides.length) {
		slideIndex = 1;
	}
	slides[slideIndex-1].style.width = "400%";
	slides[slideIndex-1].style.display = "block"; 

	//console.log(slides.index);
    t = setTimeout(showSlides, 2000); 
}

function showOne(index) {
	reset();
	slideIndex = index;
	slides[index].style.width = "400%";
	slides[index].style.display = "block"; 
}

