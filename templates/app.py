from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/user')
def get_user():
    user = {"name": "Alice", "age": 30}
    return jsonify(user)   # sends back a JSON response

@app.route('/')
def home():
    return "Hello, World! This is my first Flask app."

if __name__ == '__main__':
    app.run(debug=True)