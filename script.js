function sendMessage() {
    const messageInput = document.getElementById('loveMessage');
    const messageOutput = document.getElementById('messageOutput');
    
    if (messageInput.value) {
        messageOutput.innerHTML = <p>Pesan untuk pasangan: <strong>${messageInput.value}</strong></p>;
        messageInput.value = ''; // Mengosongkan textarea setelah mengirim
    } else {
        alert('Silakan tulis pesan terlebih dahulu!');
    }
}