from flask import Flask, request, jsonify
from flask_cors import CORS
from flask import send_from_directory

from limePredict import lime_predict,predict_attrition


app = Flask(__name__)
CORS(app, origins=["http://localhost:5173"])

@app.route('/')
def home():
    return "Hello, World!"

@app.route('/static/<path:path>')
def serve_static(path):
    return send_from_directory('static', path)

@app.route('/predict', methods=['POST'])
def predict():
    # Get incoming data (JSON format)
    data = request.json
    print("Received data:", data)  

    # Use the prediction function on the data
    result = predict_attrition(data)

    lime_explanation, lime_plot_path = lime_predict(data)
    print(lime_explanation)

    path = f"http://127.0.0.1:5000/static/lime_explanation.png"

    print(path)

    # Return the prediction as a JSON response
    return jsonify({
        'prediction': result,
        'lime_explanation':lime_explanation,
        'lime_plot_path':path
    })


if __name__ == '__main__':
    print(f"Server starting on {'127.0.0.1:5000'}")
    app.run(debug=True,host='127.0.0.1',port=5000)
