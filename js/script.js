document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    let icon = document.getElementById('theme-toggle').querySelector('i');
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
});

// Confirmation Modal
let fileToDownload = '';

function confirmDownload(fileName) {
    fileToDownload = fileName;
    document.getElementById('confirmation-modal').style.display = 'flex';
}

document.getElementById('confirm-btn').addEventListener('click', () => {
    window.location.href = `https://raw.githubusercontent.com/manojkumar460/BrowserLevelBlocker/refs/heads/main/Blockers/${fileToDownload}`;
    document.getElementById('confirmation-modal').style.display = 'none';
});

document.getElementById('cancel-btn').addEventListener('click', () => {
    document.getElementById('confirmation-modal').style.display = 'none';
});
