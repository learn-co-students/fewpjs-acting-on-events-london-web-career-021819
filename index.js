// Your code here
const dodger = document.getElementById('dodger');

document.addEventListener("keydown", function(e) {
    
    switch (e.key) {
        case "ArrowLeft": moveDodgerLeft();
            break;
        case "ArrowRight": moveDodgerRight();
            break;
    }
    
    console.log(e.key);
});


function moveDodgerLeft() {
    var leftNumbers = dodger.style.left.replace("px", "");
    var left = parseInt(leftNumbers, 10);
   
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }

  function moveDodgerRight() {
    var rNumbers = dodger.style.left.replace("px", "");
    var left = parseInt(rNumbers, 10);

    if (left < 360) {
        dodger.style.left = `${left + 1}px`;
    }
  }