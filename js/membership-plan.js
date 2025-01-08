const switches = document.querySelectorAll('.switch');

switches.forEach(switchBtn => {
    switchBtn.addEventListener('click', () => {
        // Remove 'selected' class from all buttons
        switches.forEach(btn => btn.classList.remove('selected'));
        
        // Add 'selected' class to the clicked button
        switchBtn.classList.add('selected');
        if (switchBtn.id === 'free') {
            document.getElementById('free-card').style.display = 'block';
            document.getElementById('premium-card').style.display = 'none';
            document.getElementById('special-card').style.display = 'none';
        }
        if (switchBtn.id === 'premium') {
            document.getElementById('free-card').style.display = 'none';
            document.getElementById('premium-card').style.display = 'block';
            document.getElementById('special-card').style.display = 'none';
        }
        if (switchBtn.id === 'special') {
            document.getElementById('free-card').style.display = 'none';
            document.getElementById('premium-card').style.display = 'none';
            document.getElementById('special-card').style.display = 'block';
        }
    });
});

// Set the initial state to 'premium'
document.getElementById('premium').click();