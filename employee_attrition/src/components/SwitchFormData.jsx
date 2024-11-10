import MyForm from "./MyForm";
import { useState } from "react";

export default function SwitchForm() {
  const [isForm, setIsForm] = useState(true);
  const [formData, setFormData] = useState({});
  const [isHaveData, setIsHaveData] = useState("");

  function handleIsForm(val) {
    const transformedData = {};

    Object.entries(val).forEach(([key, value], index) => {
      if (index < 6) {
        transformedData[key] = parseInt(value);
      } else {
        transformedData[key] = parseFloat(value);
      }
    });

    setFormData(transformedData);
    console.log(transformedData);

    sendDataToMLModel(transformedData);
  }

  function BackToForm() {
    setIsForm((prev) => !prev);
  }

  async function sendDataToMLModel(data) {
    const url = "http://127.0.0.1:5000/predict";

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      setIsHaveData(result);
      setIsForm((prev) => !prev);
      console.log("Prediction Result:", result.prediction);
      console.log(typeof(result.prediction));
      console.log(typeof(parseInt(result.prediction)))
      console.log(result.lime_plot_path);
    } catch (error) {
      console.error("Error sending data to ML model:", error);
    }
  }

  function getTopFeatures(explanation) {
    const sortedFeatures = explanation.sort(
      (a, b) => Math.abs(b[1]) - Math.abs(a[1])
    );
    const topFeatures = sortedFeatures.slice(0, 3);

    return topFeatures;
  }

  return (
    <>
      {isForm && <MyForm getValue={(val) => handleIsForm(val)} />}

      {!isForm && (
        <>
          <p className="styled-paragraph">
            {parseInt(isHaveData.prediction) === 1
              ? "The prediction indicates that the employee is likely to leave the company."
              : "The prediction indicates that the employee is likely to stay with the company."}
          </p>

          {isHaveData.lime_explanation && (
            <div className="styled-paragraph">
              <h3>Top 3 Features Impacting the Prediction:</h3>
              <ul>
                {getTopFeatures(isHaveData.lime_explanation).map(
                  ([feature, importance], index) => (
                    <li key={index}>
                      {importance > 0 ? (
                        <>
                          <p>{`Feature: ${feature}`}</p>
                          <p>{`Negatively impacts staying with the company by ${importance.toFixed(
                            2
                          )}`}</p>
                          <hr />
                        </>
                      ) : (
                        <>
                          <p>{`Feature: ${feature}`}</p>
                          <p>{`Positively impacts staying with the company by ${Math.abs(
                            importance
                          ).toFixed(2)}`}</p>
                          <hr />
                        </>
                      )}
                    </li>
                  )
                )}
              </ul>
            </div>
          )}

          {isHaveData.lime_plot_path && (
            <img
              src={isHaveData.lime_plot_path}
              alt="LIME Explanation"
              style={{ maxWidth: "100%", height: "auto" }}
              className="lime-plot"
            />
          )}

          <button className="center-button" onClick={BackToForm}>
            Back to Form
          </button>
        </>
      )}
    </>
  );
}
