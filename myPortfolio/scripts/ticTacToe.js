var gameMarker = "X"

function changeMarkerToX() {
    gameMarker = "X";
    // console.log("The X button was clicked!");
    }

    function changeMarkerToO() {
        gameMarker = "O";
        //console.log("The O button was clicked!");
    }

    function placeMark(divId) {
        var box = document.getElementById(divId);
        box.innerHTML = gameMarker;
    }