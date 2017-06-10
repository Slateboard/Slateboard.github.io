var select = document.getElementById("selectDay");
var response1 = ("I don't feel like going to work.");
var response2 = ("It's the weekend so I don't have work today and would hate life if I did.");

var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

for (var i = 0; i < days.length; i++) {
  var opt = days[i];
  var el = document.createElement("option");
  el.textContent = opt;
  el.value = opt;
  select.appendChild(el);
}

function getResponse(eleme) {
  var e = document.getElementById("selectDay");
  var strUser = e.options[e.selectedIndex].value;
  if (strUser == 'Saturday' || strUser == 'Sunday') {
    console.log(response2)
    document.getElementById("responses").innerHTML = (response2);
  } else {
   document.getElementById("responses").innerHTML = (response1);
    console.log(response1);
  }
}