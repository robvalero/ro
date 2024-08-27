// Count down timer

let countdown;
let countdownTime = 3600; 

function startCountdown() {
    countdown = setInterval(updateCountdown, 1000);
}

function updateCountdown() {
    if (countdownTime <= 0) {
        clearInterval(countdown);
        document.getElementById('countdown').textContent = "00:00:00";
        return;
    }
    countdownTime--;
    const hours = Math.floor(countdownTime / 3600);
    const minutes = Math.floor((countdownTime % 3600) / 60);
    const seconds = countdownTime % 60;
    const formattedTime = formatTime(hours, minutes, seconds);
    document.getElementById('countdown').textContent = formattedTime;
}

function formatTime(hours, minutes, seconds) {
    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pad(value) {
    return value.toString().padStart(2, '0');
}

// Start the countdown when the page loads
startCountdown();
