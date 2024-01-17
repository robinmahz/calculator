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
    } else if (clickInput == "a") {
        screen.innerHTML = "0";
        console.log("clicked");
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