import { FC } from "react";
import styles from "./StartQuizQuestionNum.module.scss";

type Props = {
	currQuestion: number;
	total: number;
};

export const StartQuizQuestionNum: FC<Props> = ({ currQuestion, total }) => {
	return (
		<div className={styles.QuestionNum}>
			<h3 className={styles.title}>
				QUESTION {currQuestion + 1}/{total}
			</h3>
		</div>
	);
};
