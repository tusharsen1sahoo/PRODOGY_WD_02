document.querySelector('#btn1').addEventListener('click', start);
document.querySelector('#btn2').addEventListener('click', stop);
document.querySelector('#btn3').addEventListener('click', reset);
let display = document.querySelector('.display');

let startTime = 0;
let elapsedTime = 0;
let timer;
let isRunning = false;
function start() {
    if (!isRunning) {
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10);
        isRunning = true;

    }
}
function stop() {
    if (isRunning) {
        clearInterval(timer);

        isRunning = false;
    }
}
function reset() {
    if (!isRunning) {
        startTime = 0;
        elapsedTime = 0;
         isRunning = false;
        display.innerHTML = '00:00:00:00';
    }
    else{
        stop();
        reset();
    }
  

}
function update() {
    let currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    let hour = Math.floor(elapsedTime / (1000 * 60 * 60));
    let min = Math.floor(elapsedTime / (1000 * 60) % 60);
    let sec = Math.floor(elapsedTime / 1000 % 60);
    let mili = Math.floor(elapsedTime % 1000 / 10)

    hour = String(hour).padStart(2, '0');
    min = String(min).padStart(2, '0');
    sec = String(sec).padStart(2, '0');
    mili = String(mili).padStart(2, '0');

    display.innerHTML = `${hour}:${min}:${sec}:${mili}`;

}