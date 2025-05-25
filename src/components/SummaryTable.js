import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { updateHighScores } from "../updateHighScores";
import { motion } from "framer-motion";

import styles from "./SummaryTable.module.scss";

function SummaryTable() {
	const { currentScore, userName } = useSelector((store) => store.user);
	const { secondsRemaining, corrAnswers } = useSelector((store) => store.ui);

	const alreadyCheckedRef = useRef(false);

	const [isNewRecord, setIsNewRecord] = useState(false);
	const totalScore = currentScore + secondsRemaining;
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const checkRecord = async () => {
			if (alreadyCheckedRef.current) return;

			alreadyCheckedRef.current = true;
			const updated = await updateHighScores(userName, totalScore);
			setIsNewRecord(updated);
		};

		checkRecord();
	}, []);

	useEffect(() => {
		if (index <= 5) {
			const timeout = setTimeout(() => {
				setIndex((prev) => prev + 1);
			}, 600);
			return () => clearTimeout(timeout);
		}
	}, [index]);

	return (
		<div className={styles.summaryTable}>
			{index >= 1 && (
				<motion.em
					initial={{ opacity: 0, x: "35%" }}
					animate={{ opacity: 1, x: ["35%", "-5%", "0%"] }}
					transition={{ duration: 0.6, ease: "easeOut" }}
				>
					Correct answers: {corrAnswers}
				</motion.em>
			)}
			{index >= 2 && (
				<motion.em
					initial={{ opacity: 0, x: "35%" }}
					animate={{ opacity: 1, x: ["35%", "-5%", "0%"] }}
					transition={{ duration: 0.6, ease: "easeOut" }}
				>
					Points: {currentScore}
				</motion.em>
			)}
			{index >= 3 && (
				<motion.em
					initial={{ opacity: 0, x: "35%" }}
					animate={{ opacity: 1, x: ["35%", "-5%", "0%"] }}
					transition={{ duration: 0.6, ease: "easeOut" }}
				>
					Time bonus: {secondsRemaining}
				</motion.em>
			)}
			{index >= 4 && (
				<motion.h2
					className={styles.sum}
					initial={{ opacity: 0, scale: 1.2 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.6, ease: "easeOut" }}
				>
					TOTAL: {totalScore}
				</motion.h2>
			)}
			{index >= 5 && isNewRecord && (
				<motion.em
					className={styles.records_info}
					initial={{ opacity: 0, scale: 1.2 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.6, ease: "easeOut" }}
				>
					Wow! You made into the TOP 5!
				</motion.em>
			)}
			{index >= 5 && !isNewRecord && (
				<motion.em
					className={styles.records_info}
					initial={{ opacity: 0, scale: 1.2 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.6, ease: "easeOut" }}
				>
					You failed to break the record.
				</motion.em>
			)}
		</div>
	);
}

export default SummaryTable;
