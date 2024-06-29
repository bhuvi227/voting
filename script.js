document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'user1' && password === 'user') {
        document.querySelector('.login-container').style.display = 'none';
        document.querySelector('.voting-container').style.display = 'block';
    } else {
        document.getElementById('error-message').textContent = 'Invalid user';
    }
});

document.getElementById('votingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    alert('Thanks for voting!');
    location.reload();
});
