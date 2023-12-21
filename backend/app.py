from flask import Flask, request, jsonify
from secret_keys import OPEN_AI_KEY
from openai import OpenAI

app = Flask(__name__)
messages=[
            {"role": "system", "content": "You are a helpful assistant"},
        ]

# Function to generate bot responses
def get_bot_response(user_input):
    # Your logic to generate bot responses based on user input
    # Replace this with your actual bot logic
    return f"You said: '{user_input}'"


@app.route('/send_message', methods=['POST'])
def send_message():
    data = request.json
    user_message = data.get('user_message')  # Fetch user message from JSON data
    messages.append({"role": "user", "content": user_message})
    response = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=messages
    )
    # response = "response to :" + user_message
    response = "Sure! Here's a simple React component that acts as a drawer: ```jsx import React, { useState } from 'react'; const Drawer = () => { const [isOpen, setIsOpen] = useState(false); const toggleDrawer = () => { setIsOpen(!isOpen); }; return ( <div> <button onClick={toggleDrawer}>Toggle Drawer</button> {isOpen && ( <div> {/* Drawer Content */} <p>Drawer is open!</p> </div> )} </div> ); }; export default Drawer; ``` In this example, we have a `Drawer` component that uses the `useState` hook to manage the `isOpen` state. The `isOpen` state determines whether the drawer is open or closed. When the 'Toggle Drawer' button is clicked, the `toggleDrawer` function is called, which updates the `isOpen` state to the opposite value using the `setIsOpen` function. If `isOpen` is `true`, the content inside the `if (isOpen)` block is rendered. In this example, we have a simple paragraph that says 'Drawer is open!'. To use this component in your app, you can import and use it like any other React component: ```jsx import React from 'react'; import Drawer from './Drawer'; const App = () => { return ( <div> <h1>My App</h1> <Drawer /> </div> ); }; export default App; ``` Hope this helps! Let me know if you have any further questions." + user_message
    print(f"response = {response}")
    # bot_response = response.choices[0].message.content
    bot_response = response
    print(f"messages = {messages}")
    return jsonify({'user_message': user_message, 'bot_response': bot_response})

if __name__ == '__main__':
    client = OpenAI(
        api_key=OPEN_AI_KEY
    )
    app.run()
