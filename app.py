from flask import Flask, render_template, request
from secret_keys import OPEN_AI_KEY
from openai import OpenAI

if __name__ == "__main__":
    app = Flask(__name__)
    client = OpenAI(
        api_key=OPEN_AI_KEY
    )
# Function to generate bot responses
def get_bot_response(user_input):
    # Your logic to generate bot responses based on user input
    # Replace this with your actual bot logic
    return f"You said: '{user_input}'"

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/send_message', methods=['POST'])
def send_message():
    user_message = request.form['user_message']
    response = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
        {"role": "system", "content": "You are a helpful assistant"},
        {"role": "user", "content": user_message}
        ]
    )
    print(f"response = {response}")
    return {'user_message': user_message, 'bot_response': response.choices[0].message.content}

if __name__ == '__main__':
    app.run(debug=True)
