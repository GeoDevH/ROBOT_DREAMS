function updateCountdown(targetDate) {
    const currentTime = new Date();
    const targetTime = new Date(targetDate).getTime();
    const timeLeft = targetTime - currentTime.getTime();

    if (timeLeft <= 0) {
        document.getElementById("days").textContent = '0';
        document.getElementById("hours").textContent = '0';
        document.getElementById("minutes").textContent = '0';
        document.getElementById("seconds").textContent = '0';
        return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
}

let targetDate = "2024-01-01";

function updateTargetDate() {
    const eventDateInput = document.getElementById("eventDate");
    const selectedDate = eventDateInput.value;

    if (selectedDate) {
        targetDate = selectedDate;
        updateCountdown(targetDate);
        document.getElementById("countdownTitle").textContent = "До моменту коли вона настане залишилось:";
    }
}

document.getElementById("updateButton").addEventListener("click", updateTargetDate);

updateCountdown(targetDate);

function intervalFunction() {
    updateCountdown(targetDate);
}

setInterval(intervalFunction, 1000);
