
var sentence = document.querySelector(".sentence");
var textToBeTyped = "Aspiring web developer";
var index = 0, isAdding = true;

function playAnim() {
  setTimeout(function () {

    sentence.innerText = textToBeTyped.slice(0, index);
    if (isAdding) {
      //adding text
      if (index > textToBeTyped.length) {
        //no more text to add
        isAdding = false;
        //break: wait 2s before playing again
        setTimeout(function () {
          playAnim();
        }, 2000);
        return;
      } else {
        // increment index by 1 
        index++;
      }
    } else {
      // removing text 
      if (index == 0) {
        // no more text to remove
        isAdding = true;
      } else {
        // decrement index by 1
        index--;
      }
    }
    playAnim();
  }, 120);
}

// start animation 
playAnim();
