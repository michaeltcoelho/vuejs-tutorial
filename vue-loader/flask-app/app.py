import time

from flask import Flask, request, jsonify
from flask_cors import CORS

from marshmallow import Schema, fields, ValidationError

app = Flask(__name__)

CORS(app)

tasks = [
    {'id': 1, 'description': 'Wash the car', 'completed': False},
    {'id': 2, 'description': 'Make the dishes', 'completed': True},
    {'id': 3, 'description': 'Go to work', 'completed': False},
    {'id': 4, 'description': 'Feed pets', 'completed': False},
]


class TaskSchema(Schema):
    description = fields.Str(required=True)
    completed = fields.Bool()


@app.route('/', methods=['GET'])
def list_tasks():
    return jsonify(tasks)


@app.route('/<task_id>/completed', methods=['PUT'])
def check(task_id):
    data = request.json
    found = False
    for task in tasks:
        if task['id'] == int(task_id):
            task['completed'] = data['completed']
            found = True
            break
    if not found:
        return jsonify({}), 404
    return jsonify({}), 204


@app.route('/', methods=['POST'])
def add():
    data = request.json
    try:
        schema = TaskSchema().load(data)
    except ValidationError as err:
        response = jsonify(err.messages)
        response.status_code = 400
        return response
    else:
        task = {
            'id': int(time.time()),
            'description': schema['description'],
            'completed': False,
        }
        tasks.append(task)
        return jsonify(task), 201


if __name__ == '__main__':
    app.run()
