// Show splash screen and then login box
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('splash').style.display = 'none';
        document.getElementById('loginContainer').style.display = 'block';
    }, 2500);
});

// Show input for guest nickname with animation
function showGuestInput() {
    const guestBox = document.getElementById('guestInput');
    guestBox.classList.add('show');
}
function hideGuestInput() {
    const guestBox = document.getElementById('guestInput');
    guestBox.classList.remove('show');
}
// Continue with nickname or generate random
function continueAsGuest() {
    let name = document.getElementById('nickname').value.trim();
    if (!name) {
        name = "Guest" + Math.floor(Math.random() * 10000);
    }
    localStorage.setItem('pigeonUser', name);
    window.location.href = "chat.html"; // Update this to your actual chat page
}
