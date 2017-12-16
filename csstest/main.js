$$('.circular').forEach(function(e1) {
	// body...
	var NS = "http://www.w3.org/2000/svg";
	var xlinkNS = "http://www.w3.org/1999/xlink";
	var svg = document.createElementNS(NS, "svg");
	var circle = document.createElementNS(NS, "path");
	var text = document.createElementNS(NS, "text");
	var textPath = document.createElementNS(NS, "textPath");
	svg.setAttribute("viewBox", "0 0 100 100");

	circle.setAttribute("d", "M0,50 a50,50 0 1,1 0,1z");
	circle.setAttribute("id", "circle");

	textPath.textContent = e1.textContent;
	textPath.setAttributeNS(xlinkNS, "xlink:href", "#circle");

	text.appendChild(textPath);
	svg.appendChild(circle);
	svg.appendChild(text);
	e1.textContent = '';
	e1.appendChild(svg);
});

alert("ok");