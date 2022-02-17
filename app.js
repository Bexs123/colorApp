// Random selection of color
let colors = ["yellow", "red", "blue", "pink", "orange", "purple", "green", "black", "grey", "lime"]

// Background of canvas will change when the button is clicked
let button = document.getElementById('button');

button.addEventListener('click', function() {
    // Select a random number between 0 - 9
    let index = parseInt((Math.random()*colors.length)+1);
    // Get the canvas
    let canvas = document.getElementById('canvas');

    canvas.style.background = `${colors[index]}`
})