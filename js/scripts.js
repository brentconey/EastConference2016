var colors = {
    red: '#E0480B',
    darkBlue: '#2B3D5C',
    blue: '#4897D4',
    yellow: '#EBE26A',
    pink: '#FFE8EC'
};
var button = document.getElementById("toggle-button");
var toggled = false;
button.onclick = function(e) {
    var boxes = document.getElementsByClassName("box");
    for (var i = 0; i <= boxes.length - 1; i++) {
        var currentBox = boxes[i];
        var colorClass = currentBox.classList[1];
        var colorToChangeTo;
        switch (colorClass) {
            case "red":
                colorToChangeTo = colors.red;
                break;
            case "dark-blue":
                colorToChangeTo = colors.darkBlue;
                break;
            case "blue":
                colorToChangeTo = colors.blue;
                break;
            case "yellow":
                colorToChangeTo = colors.yellow;
                break;
            case "pink":
                colorToChangeTo = colors.pink;
                break;
            default:
                colorToChangeTo = colors.red;
                break;
        }
        if (!toggled) {
            currentBox.style.backgroundColor = colorToChangeTo;
        } else {
            currentBox.style.backgroundColor = "white";
        }
    }
    //flip toggled flag
    if(toggled){
        toggled = false;
    }else{
        toggled = true;
    }
}