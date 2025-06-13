import { useEffect, useState } from "react";
import StartQuizQuestionOption from "./StartQuizQuestionOption";
import { motion } from "framer-motion";
import styles from "./StartQuizAnswerOptions.module.scss";

function StartQuizAnswerOptions({
	options,
	correctAnswer,
	selected,
	showAnswer,
	onClick,
}) {
    
	const [showOptions, setShowOptions] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setShowOptions(true);
		}, 3000);
	}, []);

	return (
		<div className={styles.answer_bars}>
			{Object.entries(options)
				.sort(([keyA], [keyB]) => keyA.localeCompare(keyB))
				.map(([key, value], index) => {
					const isCorrectAnswer = key === correctAnswer;
					const isSelected = key === selected;

					let className = "";

					if (showAnswer) {
						if (isCorrectAnswer) {
							className = styles.correct;

							if (isSelected) {
								className += ` ${styles.selectedCorrect}`;
							}
						} else {
							className = styles.wrong;
							if (isSelected) {
								className += ` ${styles.selectedWrong}`;
							}
						}
					}

					return (
						<StartQuizQuestionOption
							key={key}
							className={className}
							onClick={() => onClick(key)}
						>
							<motion.div
								key={key}
								initial={{ opacity: 0.4 }}
								animate={{ opacity: 1 }}
								transition={{
									delay: 3 + index * 0.2,
									duration: 0.5,
									ease: "easeOut",
								}}
							>
								{`${key}.`} {showOptions ? value : ""}
							</motion.div>
						</StartQuizQuestionOption>
					);
				})}
		</div>
	);
}

export default StartQuizAnswerOptions;
