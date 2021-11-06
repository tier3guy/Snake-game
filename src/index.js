// starter variable
const running = false;


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