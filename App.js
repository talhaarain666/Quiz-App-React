import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';


function App() {

	const questions = [
		{
			questionText: 'What is actually electricity?',
			answerOptions: [
				{ answerText: 'A flow of water', isCorrect: false },
				{ answerText: 'A flow of air', isCorrect: false },
				{ answerText: 'A flow of electrons', isCorrect: true },
				{ answerText: 'A flow of atoms', isCorrect: false },
			],
		},
		{
			questionText: 'What is the speed of sound?',
			answerOptions: [
				{ answerText: '120 km/h', isCorrect: false },
				{ answerText: '1,200 km/h', isCorrect: true },
				{ answerText: '400 km/h', isCorrect: false },
				{ answerText: '700 km/h', isCorrect: false },
			],
		},
		{
			questionText: 'What was the first country to use tanks in combat during World War I?',
			answerOptions: [
				{ answerText: 'France', isCorrect: false },
				{ answerText: 'Japan', isCorrect: false },
				{ answerText: 'Britain', isCorrect: true },
				{ answerText: 'Germany', isCorrect: false },
			],
		},
		{
			questionText: 'Which of the following animals can run the fastest?',
			answerOptions: [
				{ answerText: 'Cheetah', isCorrect: true },
				{ answerText: 'Leopard', isCorrect: false },
				{ answerText: 'Tiger', isCorrect: false },
				{ answerText: 'Lion', isCorrect: false },
			],
		},
		{
			questionText: 'How many time zones are there in total in the world?',
			answerOptions: [
				{ answerText: '8', isCorrect: false },
				{ answerText: '16', isCorrect: false },
				{ answerText: '24', isCorrect: true },
				{ answerText: '32', isCorrect: false },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='App'>
		<div className='App-header'>
			{showScore ? (
				<div className='score-section'>
					Your score: {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
      </div>
		</div>

	);
}


export default App;
