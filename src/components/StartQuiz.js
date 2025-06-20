import { useEffect, useState } from "react";
import { fetchQuizQuestions } from "../fetchQuizQuestions ";
import { useDispatch } from "react-redux";
import { setBonusActive, setCurrentScore } from "../store/userSlice";
import { changeStatus, setCorrAnswers } from "../store/uiSlice";

import StartQuizTopBar from "./StartQuizTopBar";
import StartQuizTimer from "./StartQuizTimer";
import StartQuizQuestionNum from "./StartQuizQuestionNum";
import TerminalAutoTyping from "./TerminalAutoTyping";
import StartQuizNextStepBtn from "./StartQuizNextStepBtn";
import StartQuizAnswerOptions from "./StartQuizAnswerOptions";
import styles from "./StartQuiz.module.scss";

function StartQuiz() {
	const [questions, setQuestions] = useState([]); 
	// const [currentIndex, setCurrentIndex] = useState(0);
	const [currentIndex, setCurrentIndex] = useState(13); //do testowania
	const [selected, setSelected] = useState(null);
	const [showAnswer, setShowAnswer] = useState(false);
	const [unmistakablyShots, setUnmistakablyShots] = useState(0);

	const dispatch = useDispatch();

	useEffect(() => {
		const loadQuestions = async () => {
			const data = await fetchQuizQuestions();
			setQuestions(data);
		};
		loadQuestions();
	}, []);

	// LOADER:
	if (questions.length === 0 || !questions[currentIndex]) {
		return (
			<div className="setToCenter">
				<div className="loader"></div>
			</div>
		);
	}

	const currentQuestion = questions[currentIndex];
	const isCorrect = selected === currentQuestion.correctAnswer;
	const isLast = currentIndex === questions.length - 1;

	const handleSelect = (optionKey) => {
		if (!showAnswer) {
			setSelected(optionKey);
			setShowAnswer(true);

			if (optionKey === currentQuestion.correctAnswer) {
				dispatch(setCurrentScore(20));
				dispatch(setCorrAnswers(1));

				const newStreak = unmistakablyShots + 1;
				setUnmistakablyShots(newStreak);

				if (newStreak >= 6) {
					// add bonus points
					dispatch(setCurrentScore(19));
				} else if (newStreak >= 5) {
					dispatch(setCurrentScore(15));
				} else if (newStreak >= 3) {
					dispatch(setBonusActive(true));
					dispatch(setCurrentScore(10));
				}
			} else if (!showAnswer && optionKey !== currentQuestion.correctAnswer) {
				setUnmistakablyShots(0);
				dispatch(setBonusActive(false));
			}
		}
	};

	const handleNext = () => {
		if (!isLast) {
			setCurrentIndex((prev) => prev + 1);
			setSelected(null);
			setShowAnswer(false);
		} else {
			dispatch(changeStatus("finishScreen"));
		}
	};

	return (
		<div className={styles.startQuiz}>
			<StartQuizTopBar />
			<StartQuizQuestionNum
				currQuestion={currentIndex}
				total={questions.length}
			/>
			<StartQuizTimer />
			
			<div className={styles.question_wrapper}>
				<div className={styles.question_box}>
					<TerminalAutoTyping key={currentIndex} customFontSize={styles.customFontSize}>
						{currentQuestion.question}
					</TerminalAutoTyping>
				</div> 
				<StartQuizAnswerOptions
					key={currentIndex}
					options={currentQuestion.options}
					correctAnswer={currentQuestion.correctAnswer}
					selected={selected}
					showAnswer={showAnswer}
					onClick={handleSelect}
				/>

				{showAnswer && (
					<StartQuizNextStepBtn onClick={handleNext} isLast={isLast} />
				)}
			</div>
		</div>
	);
}

export default StartQuiz;
