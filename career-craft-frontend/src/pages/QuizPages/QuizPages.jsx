import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getQuizData } from '../../data/allQuizzes';
import './QuizPage.css';

function QuizPage() {
  const { domainId } = useParams();
  const quizData = getQuizData(domainId);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]); // For history

  if (!quizData) {
    return <div>Quiz not found for this domain.</div>;
  }

  const { title, questions, totalPoints } = quizData;

  const handleAnswerClick = (optionIndex, isCorrect) => {
    // Every correct answer is worth 2 points
    const points = isCorrect ? 2 : 0;

    // Record the answer
    setUserAnswers([
      ...userAnswers,
      {
        question: questions[currentQuestionIndex].question,
        answer: questions[currentQuestionIndex].options[optionIndex],
        isCorrect,
      },
    ]);

    // Update score
    setScore(score + points);

    // Move to next question or show score
    const nextQuestion = currentQuestionIndex + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestionIndex(nextQuestion);
    } else {
      setShowScore(true);
      // **FUTURE:** This is where you would save the quiz result
      // if (user) {
      //   saveQuizHistory({ domainId, score: score + points, totalPoints, userAnswers });
      // }
    }
  };

  // Helper to determine knowledge level
  const getKnowledgeLevel = () => {
    const percentage = (score / totalPoints) * 100;
    if (percentage < 40) return "Beginner";
    if (percentage < 75) return "Intermediate";
    return "Advanced";
  };

  return (
    <div className="quiz-container">
      {showScore ? (
        <div className="score-section">
          <h2>Quiz Complete!</h2>
          <p className="final-score">
            You scored {score} out of {totalPoints}
          </p>
          <p className="knowledge-level">
            This score suggests a <strong>{getKnowledgeLevel()}</strong> level of knowledge.
          </p>
          <Link to="/" className="quiz-button">
            Back to Home
          </Link>
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestionIndex + 1}</span>/{questions.length}
            </div>
            {/* Level display is now removed */}
            <div className="question-text">
              {questions[currentQuestionIndex].question}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestionIndex].options.map((option, index) => (
              <button
                key={index}
                className="answer-button"
                onClick={() =>
                  handleAnswerClick(
                    index,
                    index === questions[currentQuestionIndex].correctAnswer
                  )
                }
              >
                {option}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default QuizPage;