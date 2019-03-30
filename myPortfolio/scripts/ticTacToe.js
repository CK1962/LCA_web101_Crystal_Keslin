var gameMarker = "X"

function placeMark(divId) {
    var currentValue = getValueFromDiv(divId)
    if (currentValue === "") {
        setDivToValue(divId, gameMarker)
        determineWinner()

        // switch marker
        if (gameMarker === "X") {
            gameMarker = "O"
        } else {
            gameMarker = "X"
        }
        //gameMarker = (gameMarker === "X" ? "O" : "X")
    } else {
        alert("square already contains value")
    }
}

function determineWinner() {
    var square1Value = getValueFromDiv("square1")
    var square2Value = getValueFromDiv("square2")
    var square3Value = getValueFromDiv("square3")
    var square4Value = getValueFromDiv("square4")
    var square5Value = getValueFromDiv("square5")
    var square6Value = getValueFromDiv("square6")
    var square7Value = getValueFromDiv("square7")
    var square8Value = getValueFromDiv("square8")
    var square9Value = getValueFromDiv("square9")

    // first row
    if (square1Value === square2Value &&
        square2Value === square3Value &&
        square3Value === gameMarker) {
        alert(gameMarker + " has won!")
    }

    // second row
    if (square4Value === square5Value &&
        square5Value === square6Value &&
        square6Value === gameMarker) {
        alert(gameMarker + " has won!")
    }
    // third row
    if (square7Value === square8Value &&
        square8Value === square9Value &&
        square9Value === gameMarker) {
        alert(gameMarker + " has won!")
    }

    // first column
    if (square1Value === square4Value &&
        square4Value === square7Value &&
        square7Value === gameMarker) {
        alert(gameMarker + " has won!")
    }
    // second column
    if (square2Value === square5Value &&
        square5Value === square8Value &&
        square8Value === gameMarker) {
        alert(gameMarker + " has won!")
    }

    // third column
    if (square3Value === square6Value &&
        square6Value === square9Value &&
        square9Value === gameMarker) {
        alert(gameMarker + " has won!")
    }
    // left diagonal
    if (square1Value === square5Value &&
        square5Value === square9Value &&
        square9Value === gameMarker) {
        alert(gameMarker + " has won!")
    }

    // right diagonal
    if (square3Value === square5Value &&
        square5Value === square7Value &&
        square7Value === gameMarker) {
        alert(gameMarker + " has won!")
    }
}

function clearBoard() {
    clearDiv("square1")
    clearDiv("square2")
    clearDiv("square3")
    clearDiv("square4")
    clearDiv("square5")
    clearDiv("square6")
    clearDiv("square7")
    clearDiv("square8")
    clearDiv("square9")
}

function clearDiv(divId) {
    setDivToValue(divId, "")
}

function setDivToValue(divId, value) {
    var box = document.getElementById(divId);
    box.innerHTML = value;
}

function getValueFromDiv(divId) {
    var box = document.getElementById(divId);
    return box.innerHTML;

}