import StartQuizTopBar from "./StartQuizTopBar";
import StartQuizDeadline from "./StartQuizDeadline";
import StartQuizQuestionNum from "./StartQuizQuestionNum";
import TerminalAutoTyping from "./TerminalAutoTyping";
import StartQuizQuestionOption from "./StartQuizQuestionOption";
import styles from "./StartQuiz.module.scss";

function StartQuiz() {
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
