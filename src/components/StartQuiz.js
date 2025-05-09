import StartQuizTopBar from "./StartQuizTopBar";
import StartQuizDeadline from "./StartQuizDeadline";
import StartQuizQuestionNum from "./StartQuizQuestionNum";
import TerminalAutoTyping from "./TerminalAutoTyping";
import StartQuizQuestionOption from "./StartQuizQuestionOption";
import { fetchQuizQuestions } from "../fetchQuizQuestions ";
import styles from "./StartQuiz.module.scss";
import { useEffect, useState } from "react";


function StartQuiz() {

	const [questions, setQuestions] = useState([]); //here we get questions from fetch
	const [currentIndex, setCurrentIndex] = useState(0); //show current quiz question
	const [selected, setSelected] = useState(null); //when user click into one option
	const [showAnswer, setShowAnswer] = useState(false);

	// download all questions
	useEffect(()=>{
		const loadQuestions = async () => {
			const data = await fetchQuizQuestions();
			setQuestions(data);
		};
		loadQuestions();
	},[]);

	// test 1 info wait for...
	if(questions.length === 0 ) {
		return <div>Loading quiz...</div>;
	}
	// ......................................


	// show download collection
	console.log(questions);





	return (
		<div className={styles.startQuiz}>
			<StartQuizTopBar />
			<StartQuizQuestionNum />
			<StartQuizDeadline />
			<div className={styles.question_wrapper}>
				<div className={styles.question_box}>
					<TerminalAutoTyping>
						Which pill allows Neo to learn the truth about the Matrix?
					</TerminalAutoTyping>
				</div>
				<div className={styles.answer_bars}>
					<StartQuizQuestionOption>A. Green</StartQuizQuestionOption>
					<StartQuizQuestionOption>B. Red</StartQuizQuestionOption>
					<StartQuizQuestionOption>C. Blue</StartQuizQuestionOption>
					<StartQuizQuestionOption>D. Yellow</StartQuizQuestionOption>
				</div>
			</div>
		</div>
	);	
}

export default StartQuiz;

//Na desktop po najechaniu kursorem na wskazane pole A,B,C,D powinno się ono podświetlić
// Po kliknięciu w któreś czyli dokonaniu wyboru powinno się dokonać zaznaczenie
// Zaznaczenie musi wskazać czy odpowiedziano prawidłowo, oraz podświetlić się powinna właściwa odpowiedź
// Po kliknięciu powinien pojawić się btn next
// Na koniec quizu przycisk powinien brzmieć finish i być linkiem do podsumowania



// {
// 	question: "Which pill allows Neo to learn the truth about the Matrix?",
// 	options: {
// 	  A: "Green",
// 	  B: "Red",
// 	  C: "Blue",
// 	  D: "Yellow",
// 	},
// 	correctAnswer: "B",
//   },
