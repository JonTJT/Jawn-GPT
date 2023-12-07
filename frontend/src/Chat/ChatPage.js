import React, {useState, useEffect} from 'react';
import axios from 'axios';

export const Chat = () =>  {
    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState('');

    const sendMessage = async () => {
        if (inputMessage.trim() === '') return;

        setMessages([...messages, {text:inputMessage, sender: 'user'}]);
        setInputMessage('');

        try {
            // Sending messages to Flask backend
            console.log(inputMessage)
            const response = await axios.post('/send_message', {user_message:inputMessage});

            //Add bot response to chat
            setMessages(prevMessages => [
                ...prevMessages,
                { text: response.data.bot_response, sender: 'bot' }
            ]);
        } catch (error) {
            console.error("Error sending message:", error);
        }
    };

    const handleInputChange = (e) => {
        setInputMessage(e.target.value);
    };

    return (
        <div className="chat-container">
            <div className="chat-box">
                {messages.map((message, index) => (
                    <div key={index} className={`message ${message.sender}`}>
                        {message.sender}: {message.text}
                    </div>
                ))}
            </div>
            <div className="input-container">
                <input 
                    className="input-input"
                    type="text"
                    value={inputMessage}
                    onChange={handleInputChange}
                    placeholder="Type a message..."
                />
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    )
}