import styles from "./StartQuizQuestionNum.module.scss";

function StartQuizQuestionNum({currQuestion, total}) {
	
	return (
		<div className={styles.QuestionNum}> 
			<h3 className={styles.title}>QUESTION {currQuestion+1}/{total}</h3>
		</div>
	);
}

export default StartQuizQuestionNum;
