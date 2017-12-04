var slideIndex = 0;
var slides = document.getElementsByClassName("mySlides");

function reset() {
	var header = document.getElementsByClassName("jumbotron");
	header[0].style.display = "none";

	for (var i = 0; i < slides.length; i++) {
		slides[i].style.display = "none"; 
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

function showSlides() {
	reset();
	slideIndex++;
	if (slideIndex > slides.length) {
		slideIndex = 1;
	}
	slides[slideIndex-1].style.width = "400%";
	slides[slideIndex-1].style.display = "block"; 

	//console.log(slides.index);
    setTimeout(showSlides, 2000); 
}

function showOne(index) {
	reset();
	slides[index].style.width = "400%";
	slides[index].style.display = "block"; 
}

