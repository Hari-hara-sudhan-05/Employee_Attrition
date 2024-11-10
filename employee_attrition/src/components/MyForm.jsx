import React, { useState } from "react";

function MyForm({ getValue }) {
  const [formData, setFormData] = useState({
    BusinessTravel: "",
    EnvironmentSatisfaction: "",
    JobInvolvement: "",
    JobLevel: "",
    JobSatisfaction: "",
    OverTime: "",
    StockOptionLevel: "",
    "Department_Research & Development": "",
    EducationField_Medical: "",
    "EducationField_Technical Degree": "",
    "JobRole_Laboratory Technician": "",
    "JobRole_Research Scientist": "",
    "JobRole_Sales Representative": "",
    "MaritalStatus_Divorced": "",
    "MaritalStatus_Single": "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getValue(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Employee Attrition Prediction Form</h2>

      <label>
        Business Travel
        <select
          name="BusinessTravel"
          onChange={handleChange}
          value={formData.BusinessTravel}
          required
        >
          <option value="">Select</option>
          <option value="0">Travel Rarely</option>
          <option value="1">Travel Frequently</option>
          <option value="2">Non-Travel</option>
        </select>
      </label>

      <label>
        Environment Satisfaction (1-4)
        <input
          type="number"
          name="EnvironmentSatisfaction"
          min="1"
          max="4"
          value={formData.EnvironmentSatisfaction}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Job Involvement (1-4)
        <input
          type="number"
          name="JobInvolvement"
          min="1"
          max="4"
          value={formData.JobInvolvement}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Job Level (1-5)
        <input
          type="number"
          name="JobLevel"
          min="1"
          max="5"
          value={formData.JobLevel}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Job Satisfaction (1-4)
        <input
          type="number"
          name="JobSatisfaction"
          min="1"
          max="4"
          value={formData.JobSatisfaction}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Overtime
        <label>
          <input
            type="radio"
            name="OverTime"
            value="1"
            checked={formData.OverTime === "1"}
            onChange={handleChange}
            required
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            name="OverTime"
            value="0"
            checked={formData.OverTime === "0"}
            onChange={handleChange}
            required
          />
          No
        </label>
      </label>

      <label>
        Stock Option Level (0-3)
        <input
          type="number"
          name="StockOptionLevel"
          min="0"
          max="3"
          value={formData.StockOptionLevel}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Department: Research & Development
        <label>
          <input
            type="radio"
            name="Department_Research & Development"
            value="1"
            checked={formData["Department_Research & Development"] === "1"}
            onChange={handleChange}
            required
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            name="Department_Research & Development"
            value="0"
            checked={formData["Department_Research & Development"] === "0"}
            onChange={handleChange}
            required
          />
          No
        </label>
      </label>

      <label>
        Education Field: Medical
        <label>
          <input
            type="radio"
            name="EducationField_Medical"
            value="1"
            checked={formData.EducationField_Medical === "1"}
            onChange={handleChange}
            required
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            name="EducationField_Medical"
            value="0"
            checked={formData.EducationField_Medical === "0"}
            onChange={handleChange}
            required
          />
          No
        </label>
      </label>

      <label>
        Education Field: Technical Degree
        <label>
          <input
            type="radio"
            name="EducationField_Technical Degree"
            value="1"
            checked={formData["EducationField_Technical Degree"] === "1"}
            onChange={handleChange}
            required
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            name="EducationField_Technical Degree"
            value="0"
            checked={formData["EducationField_Technical Degree"] === "0"}
            onChange={handleChange}
            required
          />
          No
        </label>
      </label>

      <label>
        Job Role: Laboratory Technician
        <label>
          <input
            type="radio"
            name="JobRole_Laboratory Technician"
            value="1"
            checked={formData["JobRole_Laboratory Technician"] === "1"}
            onChange={handleChange}
            required
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            name="JobRole_Laboratory Technician"
            value="0"
            checked={formData["JobRole_Laboratory Technician"] === "0"}
            onChange={handleChange}
            required
          />
          No
        </label>
      </label>

      <label>
        Job Role: Research Scientist
        <label>
          <input
            type="radio"
            name="JobRole_Research Scientist"
            value="1"
            checked={formData["JobRole_Research Scientist"] === "1"}
            onChange={handleChange}
            required
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            name="JobRole_Research Scientist"
            value="0"
            checked={formData["JobRole_Research Scientist"] === "0"}
            onChange={handleChange}
            required
          />
          No
        </label>
      </label>

      <label>
        Job Role: Sales Representative
        <label>
          <input
            type="radio"
            name="JobRole_Sales Representative"
            value="1"
            checked={formData["JobRole_Sales Representative"] === "1"}
            onChange={handleChange}
            required
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            name="JobRole_Sales Representative"
            value="0"
            checked={formData["JobRole_Sales Representative"] === "0"}
            onChange={handleChange}
            required
          />
          No
        </label>
      </label>

      <label>
        Marital Status: Divorced
        <label>
          <input
            type="radio"
            name="MaritalStatus_Divorced"
            value="1"
            checked={formData.MaritalStatus_Divorced === "1"}
            onChange={handleChange}
            required
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            name="MaritalStatus_Divorced"
            value="0"
            checked={formData.MaritalStatus_Divorced === "0"}
            onChange={handleChange}
            required
          />
          No
        </label>
      </label>

      <label>
        Marital Status: Single
        <label>
          <input
            type="radio"
            name="MaritalStatus_Single"
            value="1"
            checked={formData.MaritalStatus_Single === "1"}
            onChange={handleChange}
            required
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            name="MaritalStatus_Single"
            value="0"
            checked={formData.MaritalStatus_Single === "0"}
            onChange={handleChange}
            required
          />
          No
        </label>
      </label>

      <button type="submit">Submit</button>
    </form>
  );
}

export default MyForm;
