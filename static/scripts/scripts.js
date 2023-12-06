function openChat(evt, chatName) {
    var i, tabcontent, tablinks;

    // Hide all chat containers
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Deactivate all tab buttons
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the selected chat and activate its button
    document.getElementById(chatName).style.display = "block";
    evt.currentTarget.className += " active";
}

function sendMessage(chatId) {
    const userMessage = document.getElementById('user-input' + chatId.slice(-1)).value;
    document.getElementById('user-input' + chatId.slice(-1)).value = '';

    // Display user message
    const userDiv = document.createElement('div');
    userDiv.className = 'prompt';
    userDiv.innerHTML = 'You: ' + userMessage;
    document.getElementById('chat-box' + chatId.slice(-1)).appendChild(userDiv);

    // Simulated bot response (replace with actual bot response logic)
    const botResponse = 'Bot Response for: ' + userMessage;

    // Display bot response
    const botDiv = document.createElement('div');
    botDiv.className = 'response';
    botDiv.innerHTML = 'Bot: ' + botResponse;
    document.getElementById('chat-box' + chatId.slice(-1)).appendChild(botDiv);
}
