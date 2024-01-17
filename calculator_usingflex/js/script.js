function calculator(event) {
  let clickInput = event.target.innerHTML;
  let output;
  let screen = document.getElementById("screen");
  if (
    clickInput == "+" ||
    clickInput == "-" ||
    clickInput == "x" ||
    clickInput == "/"
  ) {
    //operator
  } else if (clickInput == "=") {
    //equals
  } else {
    output = localStorage.getItem("previousInput");
    if (output) {
      output += clickInput;
    }
    localStorage.setItem("previousInput", output == null ? clickInput : output);
  }
  screen.innerHTML = output == null ? clickInput : output;
}

function ac() {
  let screen = document.getElementById("screen");
  screen.innerHTML = "0";
  localStorage.clear();
  console.log("clicked");
}
