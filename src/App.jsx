import React, { useState } from "react";
import "./App.css";

function App() {
  const [dob, setDob] = useState("");
  const [age, setAge] = useState({
    years: "--",
    months: "--",
    days: "--",
  });

  const calculateAge = () => {
    if (!dob) return;

    const birthDate = new Date(dob);
    const today = new Date();

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
      months--;
      const previousMonth = new Date(
        today.getFullYear(),
        today.getMonth(),
        0
      ).getDate();
      days += previousMonth;
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    setAge({
      years,
      months,
      days,
    });
  };

  return (
    <div className="container">
      <div className="calculator">
        <h1>Age Calculator</h1>

        <div className="input-section">
          <input
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />

          <button onClick={calculateAge}>
            Calculate Age
          </button>
        </div>

        <div className="result">
          <div className="box">
            <h2>{age.years}</h2>
            <p>Years</p>
          </div>

          <div className="box">
            <h2>{age.months}</h2>
            <p>Months</p>
          </div>

          <div className="box">
            <h2>{age.days}</h2>
            <p>Days</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;