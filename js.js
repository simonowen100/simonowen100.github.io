const password = "1234"; // Replace with your desired password.

function validatePassword() {
    const input = document.getElementById('password').value;
    if (input === password) {
        document.getElementById('login-section').style.display = 'none';
        document.getElementById('note-section').style.display = 'block';
    } else {
        alert("Invalid password!");
    }
}

function saveNote() {
    const noteContent = document.getElementById('note').value;
    document.getElementById('saved-note').innerText = noteContent;
    alert("Note saved!");
}