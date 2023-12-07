from flask import Flask, request, jsonify
from secret_keys import OPEN_AI_KEY
from openai import OpenAI

app = Flask(__name__)

# Function to generate bot responses
def get_bot_response(user_input):
    # Your logic to generate bot responses based on user input
    # Replace this with your actual bot logic
    return f"You said: '{user_input}'"


@app.route('/send_message', methods=['POST'])
def send_message():
    data = request.json
    user_message = data.get('user_message')  # Fetch user message from JSON data

    # response = client.chat.completions.create(
    #     model="gpt-3.5-turbo",
    #     messages=[
    #         {"role": "system", "content": "You are a helpful assistant"},
    #         {"role": "user", "content": user_message}
    #     ]
    # )
    response = "response to :" + user_message
    # print(f"response = {response}")
    # bot_response = response.choices[0].message.content
    bot_response = response
    return jsonify({'user_message': user_message, 'bot_response': bot_response})

if __name__ == '__main__':
    client = OpenAI(
        api_key=OPEN_AI_KEY
    )
    app.run()
