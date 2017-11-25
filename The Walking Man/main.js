var walker = document.getElementById('walker');
var walkingLeft = true;
var dist = 1;
var leftBorder = 1000;
var rightBorder = 30;
var position = rightBorder;

function check() {
	position += walkingLeft ? dist:-dist;
	walker.style.right = position + 'px';
	if(position > leftBorder || position < rightBorder) {
		walkingLeft = !walkingLeft;
		walker.classList.toggle('flip')
	}
}

setInterval(check, 10);