
var flag = 1;
showDivs(flag);

function plusDivs(n) {
  showDivs(flag += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("Slider");
  if (n > x.length) {flag = 1}    
  if (n < 1) {flag = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[flag-1].style.display = "block";  
}
