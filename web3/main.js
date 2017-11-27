var praise = [
  "You rock",
  "You did the thing",
  "Congratulations",
  "Wowie, li'l homie",
  "Look at you go",
  "You've got the right stuff",
  "top-notch"
];

var insert = document.getElementById("insert");
var button = document.getElementById("lightMeUp");
insert.innerHTML = praise[0];

button.addEventListener("click", function(e) {
  e.preventDefault();
  var renderPraise = praise[Math.floor(Math.random() * praise.length)];
  insert.innerHTML = renderPraise;
});

