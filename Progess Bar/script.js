const progressBar = document.getElementById('myProgressBar');
const progressText = progressBar.querySelector('.progress-text');
const incrementBtn = document.getElementById('incrementBtn');
const resetBtn = document.getElementById('resetBtn');

let progress = 0;
const target = 100;
const incrementValue = 10;

function updateProgressBar() {
    progressBar.style.width = `${progress}%`;
    progressText.textContent = `${progress}%`;
}

function incrementProgress() {
    if (progress < target) {
        progress = Math.min(progress + incrementValue, target);
        updateProgressBar();
    }
}

function resetProgress() {
    progress = 0;
    updateProgressBar();
}

incrementBtn.addEventListener('click', incrementProgress);
resetBtn.addEventListener('click', resetProgress);

// Initial update
updateProgressBar();