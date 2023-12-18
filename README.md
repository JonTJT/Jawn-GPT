# Jawn-GPT
```Because I'm Broke```

Jawn-GPT is a web application running on React JS frontend and flask backend using the OpenAI APIs to perform tasks similar to ChatGPT.

## How to Setup:
**Backend**
1. Create an API key at the OpenAI API page.
2. Ensure you are in the _backend_ directory
3. Create a secret_keys.py file with the variable ```OPEN_AI_KEY``` and assign that to your API key.
4. (Optional): Create a virtual environment in the backend folder ```python -m venv {venv_folder_name}```.
5. (Optional): Initialise venv using the activate script ```{venv_folder_name}\scripts\activate.bat```.
6. Get the requirements from *requirements.txt* ```pip install -r requirements.txt```.
7. Run the backend application ```python app.py```.

**Frontend**
1. Ensure that you are in the _frontend_ directory.
2. Ensure that you have nodejs installed.
3. Install all the dependencies using ```npm install```.
4. Start the frontend application ```npm start```.
