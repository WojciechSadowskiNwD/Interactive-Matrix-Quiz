import { useEffect, useState } from "react";
import { useAppDispatch } from "../../store/redux";
import {
	fetchQuizQuestions,
	QuizQuestion,
} from "../../firebase/fetchQuizQuestions";
import { setBonusActive, setCurrentScore } from "../../store/userSlice";
import { changeStatus, setCorrAnswers } from "../../store/uiSlice";
import QuizTopBar from "../startQuiz/QuizTopBar";
import QuizTimer from "../startQuiz/QuizTimer";
import { QuizQuestionNum } from "../startQuiz/QuizQuestionNum";
import { AutoTyping } from "../components/AutoTyping";
import { QuizNextStepBtn } from "../startQuiz/QuizNextStepBtn";
import { QuizAnswerOptions } from "../startQuiz/QuizAnswerOptions";
import styles from "./StartQuiz.module.scss";

function StartQuiz() {
	const [questions, setQuestions] = useState<QuizQuestion[]>([]);
	const [currentIndex, setCurrentIndex] = useState<number>(0);
	const [selected, setSelected] = useState<string | null>(null);
	const [showAnswer, setShowAnswer] = useState<boolean>(false);
	const [unmistakablyShots, setUnmistakablyShots] = useState<number>(0);

	const dispatch = useAppDispatch();

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

	const handleSelect = (optionKey: string): void => {
		// ten if to TEST  z dnia 05.10.25
		// if(showAnswer) return;

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
			<QuizTopBar />
			<QuizQuestionNum
				currQuestion={currentIndex}
				total={questions.length}
			/>
			<QuizTimer />

			<div className={styles.question_wrapper}>
				<div className={styles.question_box}>
					<AutoTyping key={currentIndex} customFontSize={styles.customFontSize}>
						{currentQuestion.question}
					</AutoTyping>
				</div>
				<QuizAnswerOptions
					key={currentIndex}
					options={currentQuestion.options}
					correctAnswer={currentQuestion.correctAnswer}
					selected={selected}
					showAnswer={showAnswer}
					onSelect={handleSelect}
				/>

				{showAnswer && (
					<QuizNextStepBtn onClick={handleNext} isLast={isLast} />
				)}
			</div>
		</div>
	);
}

export default StartQuiz;