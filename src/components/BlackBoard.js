import { useEffect, useState } from "react";
import styles from "./BlackBoard.module.css";
import { motion } from "framer-motion";
import TurnOnTitleLetters from "./TurnOnTitleLetters";

function BlackBoard() {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setVisible(true);
		}, 5000);

		return () => clearTimeout(timer);
	}, []);

	return (
		<>
			{visible && (
				<motion.div
					className={styles.BlackBoard}
					initial={{ opacity: 0 }}
					animate={{ opacity: 0.85 }}
					transition={{ duration: 3.1, ease: "easeInOut" }}
				>
					<TurnOnTitleLetters />
				</motion.div>
			)}
		</>
	);
}

export default BlackBoard;



