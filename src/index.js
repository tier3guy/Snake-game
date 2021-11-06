// starter variable
let running = false;


// food generator
const food_generator = () => {
    let food = document.createElement('div');
    food.classList.add('food');

    let x = Math.floor((Math.random() * 40) + 1);
    let y = Math.floor((Math.random() * 40) + 1);

    food.style.gridColumnStart = x;
    food.style.gridRowStart = y;

    document.querySelector('.container').appendChild(food);
}

// start function
const start = () => {
    document.addEventListener('keypress', () => {
        if (!running) {
            document.body.style.opacity = 1;
            document.getElementById('starter').style.display = "none";
            running = true;
            food_generator();
        }
    })
}

start();

// movements
const movements = (code) => {

    // left movement
    if (code.keyCode === 37 || code.code === 'KeyA') {

    }
    // right movement
    if (code.keyCode === 39 || code.code === 'KeyD') {

    }
    // up movement
    if (code.keyCode === 38 || code.code === 'KeyW') {

    }
    // down movement
    if (code.keyCode === 40 || code.code === 'KeyS') {

    }
}
const snake = document.getElementById('snake');
document.onkeydown = movements;