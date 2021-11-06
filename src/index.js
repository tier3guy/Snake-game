// score variable
let score = 0;

// food location and snake location
let food_column;
let food_row;
let snake_column = 20;
let snake_row = 20;

// snake
const snake = document.querySelectorAll('.container div');
snake.forEach(divElement => {
    divElement.style.gridRowStart = snake_row;
    divElement.style.gridColumnStart = snake_column;
})

// starter variable
let running = false;


// food generator
const food_generator = () => {
    let food = document.createElement('div');
    food.classList.add('food');

    let x = Math.floor((Math.random() * 40) + 1);
    let y = Math.floor((Math.random() * 40) + 1);

    if (x === snake_column && y === snake_row) {
        food_generator();
        return;
    }

    food.style.gridColumnStart = x;
    food.style.gridRowStart = y;

    food_column = x;
    food_row = y;

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

// add body function 
const add_body = (code) => {
    let body = document.createElement('div');
    body.classList.add('snake_body');
    body.classList.add('item');

    if (code.keyCode === 37 || code.code === 'KeyA') {
        body.style.gridColumnStart = snake_column + 1;
        body.style.gridRowStart = snake_row;
    } else if (code.keyCode === 39 || code.code === 'KeyD') {
        body.style.gridColumnStart = snake_column - 1;
        body.style.gridRowStart = snake_row;
    } else if (code.keyCode === 38 || code.code === 'KeyW') {
        body.style.gridColumnStart = snake_column;
        body.style.gridRowStart = snake_row + 1;
    } else if (code.keyCode === 40 || code.code === 'KeyS') {
        body.style.gridColumnStart = snake_column;
        body.style.gridRowStart = snake_row - 1;
    }

    document.querySelector('.container').appendChild(body);
}

// movements
const movements = (code) => {

    // left movement
    if (code.keyCode === 37 || code.code === 'KeyA') {
        snake.forEach(divElement => {
                divElement.style.gridColumnStart -= 1;
            })
            --snake_column;
    }
    // right movement
    if (code.keyCode === 39 || code.code === 'KeyD') {
        snake.forEach(divElement => {
                divElement.style.gridColumnStart = Number(divElement.style.gridColumnStart) + 1;
            })
            ++snake_column;
    }
    // up movement
    if (code.keyCode === 38 || code.code === 'KeyW') {
        snake.forEach(divElement => {
                divElement.style.gridRowStart -= 1;
            })
            --snake_row;
    }
    // down movement
    if (code.keyCode === 40 || code.code === 'KeyS') {
        snake.forEach(divElement => {
                divElement.style.gridRowStart = Number(divElement.style.gridRowStart) + 1;
            })
            ++snake_row;
    }

    if (snake_column === 0 || snake_column === 41 || snake_row === 0 || snake_row === 41) alert('GAME OVER');
    if (snake_column === food_column && snake_row === food_row) {
        add_body(code);
        ++score;
        document.querySelector('.container').removeChild(document.querySelector('.food'));
        food_generator();
    }
}

document.onkeydown = movements;