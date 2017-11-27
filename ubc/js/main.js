var slideIndex = 0;
//showSlides();

function showSlides() {
	//unShowButton();
	var slides = document.getElementsByClassName("mySlides");
	for (var i = 0; i < slides.length; i++) {
		slides[i].style.display = "none"; 
	}
	slideIndex++;
	if (slideIndex> slides.length) {
		slideIndex = 1;
	} 
	slides[slideIndex-1].style.display = "block"; 
	slides[slideIndex-1].style.width = "400%"; 

	console.log("Done");
    setTimeout(showSlides, 2000); // Change image every 2 seconds
};
