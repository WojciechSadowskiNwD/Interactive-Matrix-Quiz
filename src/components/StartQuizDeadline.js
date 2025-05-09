import styles from "./StartQuizDeadline.module.scss";

function StartQuizDeadline() {
	return (
		<div className={styles.deadline_wrapper}>
			<div className={styles.deadline_frame}>
				<em>Time left: 14:30</em>
			</div>
		</div>
	);
}

export default StartQuizDeadline;
