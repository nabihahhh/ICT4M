var modal1 = document.getElementById("myModal1");

// Get the button that opens the modal
var btn = document.getElementById("myBtn1");


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close1")[0];

btn.onclick = function() {
  modal1.style.display = "block";
}

span.onclick = function() {
  modal1.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
}


var modal2 = document.getElementById("myModal2");

// Get the button that opens the modal
var btn = document.getElementById("myBtn2");


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close2")[0];

btn.onclick = function() {
  modal2.style.display = "block";
}

span.onclick = function() {
  modal2.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal2) {
    modal3.style.display = "none";
  }
}

var modal3 = document.getElementById("myModal3");

// Get the button that opens the modal
var btn = document.getElementById("myBtn3");


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close3")[0];

btn.onclick = function() {
  modal3.style.display = "block";
}

span.onclick = function() {
  modal3.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
}
