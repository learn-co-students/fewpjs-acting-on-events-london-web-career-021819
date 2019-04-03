// Your code here
let dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#FF69B4";
dodger.style.left; // "180px"
dodger.style.bottom = "100px";

document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft()
  } else if (e.key == "ArrowRight") {
    moveDodgerRight()
  } else if (e.key == "ArrowUp") {
    moveDodgerUp()
  } else if (e.key == "ArrowDown") {
    moveDodgerDown()
  }
})


function moveDodgerLeft() {
  var leftNumbers = dodger.style.left.replace("px", "");
  var left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 5}px`;
  }
}

function moveDodgerRight() {
  var leftNumbers = dodger.style.left.replace("px", "");
  var left = parseInt(leftNumbers, 10);

  if (left < 360) {
    dodger.style.left = `${left + 5}px`;
  }
}

function moveDodgerDown() {
  var upNumbers = dodger.style.bottom.replace("px", "");
  var up = parseInt(upNumbers, 10);

  if (up > 0) {
    dodger.style.bottom = `${up - 5}px`;
  }
}

function moveDodgerUp() {
  var upNumbers = dodger.style.bottom.replace("px", "");
  var up = parseInt(upNumbers, 10);

  if (up < 380) {
    dodger.style.bottom = `${up + 5}px`;
  }
}
