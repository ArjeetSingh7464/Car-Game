var audio = document.createElement('audio');
audio.setAttribute('src', 'sound.mp3');
audio.loop = true;
audio.play();

const car = document.querySelector('.car');
let isFlying = false;

document.getElementById('forwardBtn').addEventListener('click', function() {
    const currentPos = parseInt(getComputedStyle(car).left);
    car.style.left = (currentPos + 20) + 'px'; // Move car forward
});

document.getElementById('backwardBtn').addEventListener('click', function() {
    const currentPos = parseInt(getComputedStyle(car).left);
    car.style.left = (currentPos - 20) + 'px'; // Move car backward
});

document.getElementById('brakeBtn').addEventListener('click', function() {
    // To simulate braking, you can stop the car movement
    car.style.animation = 'none'; // Stop car movement
});

document.getElementById('flyBtn').addEventListener('click', function() {
    if (!isFlying) {
        car.style.animation = 'none'; // Stop movement animation
        car.style.transform = 'translateY(-100px)'; // Fly up
        isFlying = true;
    } else {
        car.style.transform = 'translateY(0)'; // Go back down
        isFlying = false;
        car.style.animation = 'carmove linear 10s infinite'; // Restart movement animation
    }
});