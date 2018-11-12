from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)

CORS(app)

@app.route('/')
def index():
    data = {
        'tasks': [
            'Wash the car',
            'Make the dishes',
            'Go to work',
            'Feed pets',
        ]
    }
    return jsonify(data)


if __name__ == '__main__':
    app.run()
