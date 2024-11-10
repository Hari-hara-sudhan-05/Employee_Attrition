import xgboost as xgb
import pandas as pd
import joblib
import lime
import lime.lime_tabular
import matplotlib.pyplot as plt
import os


model = xgb.XGBClassifier()
model.load_model(r'C:\Users\harih\Desktop\SDP project\xgb_best.json')
X_top = joblib.load(r'C:\Users\harih\Desktop\SDP project\X_top.pkl')

def lime_predict(features):

  sample_data = pd.DataFrame([features])

# Initialize a LIME explainer
  explainer = lime.lime_tabular.LimeTabularExplainer(
      training_data=X_top.values,
      feature_names=sample_data.columns.tolist(),
      class_names=['stay','leave'],
      mode='classification',
  )

# Explain a single prediction
  exp = explainer.explain_instance(
    sample_data.values[0],
    model.predict_proba,
    num_features=len(sample_data.columns),
    num_samples=5000
  )

  explanation = exp.as_list()  # Returns a list of (feature, importance)

  lime_image_path = 'static/lime_explanation.png'  # Save in static directory
  if not os.path.exists('static'):
        os.makedirs('static')
  fig = exp.as_pyplot_figure()
  plt.savefig(lime_image_path, bbox_inches='tight')
  plt.close(fig)

  return explanation,lime_image_path




"""Prediction function"""

def predict_attrition(data):
    sample_data = pd.DataFrame([data])

    probability = model.predict_proba(sample_data)[0, 1] 

    prediction = int(probability >= 0.5)

    print(f"Probability: {probability}, Prediction: {prediction}")
    return prediction