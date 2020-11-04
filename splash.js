function toggle() {
    const unbroken = document.getElementById("unbroken");
    const broken = document.getElementById("broken");
    unbroken.style.display = "none";
    broken.style.display = "block";
    setTimeout( function splash(){fade(document.getElementById("splash"))}, 500);
}

function fade(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.3;
    }, 50);
}