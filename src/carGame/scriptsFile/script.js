let score = 0;
let cross = true;

document.onkeydown = function(e) {
    let car = document.querySelector(".car");
    if (!car) {
        console.error("Element with class 'car' not found");
        return;
    }

    if (e.keyCode === 38) {
        car.classList.add("animateCar");
        setTimeout(() => {
            car.classList.remove("animateCar");
        }, 700);
    } else if (e.keyCode === 39) {
        let carX = parseInt(window.getComputedStyle(car, null).getPropertyValue("left"));
        car.style.left = carX + 120 + "px";
    } else if (e.keyCode === 37) {
        let carX = parseInt(window.getComputedStyle(car, null).getPropertyValue("left"));
        car.style.left = carX - 100 + "px";
    }
}

setInterval(() => {
    let car = document.querySelector(".car");
    let obstacle = document.querySelector(".obstacle");

    if (!car) {
        console.error("Element with class 'car' not found");
        return;
    }

    if (!obstacle) {
        console.error("Element with class 'obstacle' not found");
        return;
    }

    let carX = parseInt(window.getComputedStyle(car, null).getPropertyValue("left"));
    let carY = parseInt(window.getComputedStyle(car, null).getPropertyValue("top"));

    let oX = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue("left"));
    let oY = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue("top"));

    let offsetX = Math.abs(carX - oX);
    let offsetY = Math.abs(carY - oY);

    if (offsetX < 250 && offsetY < 30 && offsetX > 10) {
        obstacle.classList.remove("obstacleAni");
        let data = document.querySelector(".scoreCount");
        data.innerHTML = "Reload to play again";
        let restart = document.querySelector(".header");
        restart.innerHTML = "<h1><b>RELOAD TO START AGAIN</b></h1>";
    } else if (cross && offsetX < 200) {
        score += 1;
        if (score === 5) {
            let eleDuration = document.querySelector(".obstacleAni");
            setTimeout(() => {
                eleDuration.style.animationDuration = "1s";
            }, 200);
        }
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
    }
}, 10);

function updateScore(score) {
    let change = document.querySelector(".scoreCount");
    change.innerHTML = score;
}