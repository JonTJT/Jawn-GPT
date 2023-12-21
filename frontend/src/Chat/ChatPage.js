import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Button, Input, Typography} from 'antd';
import {CodeBlock} from 'react-code-blocks'

const {Text} = Typography;

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
                    <div>
                        <Text key={index} className={`message ${message.sender}`}>
                            {message.sender}: {message.text}
                        </Text>
                    </div>
                ))}
            </div>
            <div className="input-container">
                <Input 
                    className="input-input"
                    type="text"
                    value={inputMessage}
                    onChange={handleInputChange}
                    placeholder="Type a message..."
                    bordered={false}
                    onPressEnter={sendMessage}
                />
                <Button 
                    onClick={sendMessage}
                    type="text"
                    >
                    Send
                </Button>
            </div>
        </div>
    )
}