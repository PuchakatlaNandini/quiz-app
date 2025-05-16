import React, { useState } from 'react';
import questions from '../data/questions';
import FillInTheBlank from './FillInTheBlank';
import SingleChoice from './singlechoice';
import ImageQuestion from './Images';
import Result from './Result';
import MultipleChoice from './Multiplechoice';

export default function QuizContainer() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);


  const handleAnswer = (answer) => {
    setAnswers([...answers, { id: questions[current].id, answer }]);
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setShowResult(true);
    }
  };

  const handlePrevious = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  }

  const handleNext = () => {
    if (current + 1 < questions.length) {
      setCurrent(current + 1)
    }
  }

  if (showResult) return <Result questions={questions} answers={answers} />;

  const q = questions[current];
  const totalQuestions = questions.length;

  const props = { question: q, onAnswer: handleAnswer, onPrevious: handlePrevious, onNext: handleNext, current, totalQuestions };

  switch (q.type) {
    case 'fill': return <FillInTheBlank {...props} />;
    case 'multiple': return <MultipleChoice {...props} />;
    case 'single': return <SingleChoice {...props} />;
    case 'image': return <ImageQuestion {...props} />;

    default: return null;
  }
}