import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import axios from "axios";
import _ from "lodash";

const socket = io("http://localhost:5000"); // Change this to your backend URL

const Test = () => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes timer
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Fetch questions from backend
    axios.get("http://localhost:5000/api/questions")
      .then(response => {
        const shuffledQuestions = _.shuffle(response.data); // Randomize questions
        setQuestions(shuffledQuestions);
      })
      .catch(error => console.error("Error fetching questions:", error));

    // Timer logic
    socket.on("timerUpdate", (remainingTime) => {
      setTimeLeft(remainingTime);
    });

    return () => {
      socket.off("timerUpdate");
    };
  }, []);

  // Handle answer selection
  const handleAnswerChange = (questionId, selectedOption) => {
    setAnswers({ ...answers, [questionId]: selectedOption });
  };

  // Handle test submission
  const handleSubmit = () => {
    axios.post("http://localhost:5000/api/submit", { answers })
      .then(response => {
        alert(`Test submitted! Your score: ${response.data.score}`);
        setSubmitted(true);
      })
      .catch(error => console.error("Error submitting test:", error));
  };

  return (
    <div>
      <h2>Online Exam</h2>
      <p>Time Left: {Math.floor(timeLeft / 60)}:{timeLeft % 60}</p>
      
      {questions.length > 0 ? (
        questions.map((q, index) => (
          <div key={q._id}>
            <h4>{index + 1}. {q.question}</h4>
            {q.options.map(option => (
              <div key={option}>
                <input
                  type="radio"
                  name={q._id}
                  value={option}
                  onChange={() => handleAnswerChange(q._id, option)}
                  disabled={submitted}
                />
                {option}
              </div>
            ))}
          </div>
        ))
      ) : <p>Loading questions...</p>}

      <button onClick={handleSubmit} disabled={submitted}>Submit Test</button>
    </div>
  );
};

export default Test;
