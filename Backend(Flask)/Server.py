from flask import Flask, jsonify

import json
app = Flask(__name__)

@app.route('/mobiotics')
def products():
    f = open('dataSet.json')
    data = json.load(f)
    return jsonify(data)

@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
    response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
    return response

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
