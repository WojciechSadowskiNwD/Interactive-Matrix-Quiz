import { useEffect, useState } from "react";
import styles from "./BlackBoard.module.css";
import { motion } from "framer-motion";
import TurnOnTitleLetters from "./TurnOnTitleLetters";

function BlackBoard() {
	const [visible, setVisible] = useState(false);
	const [isMounted, setIsMounted] = useState(false); 

	useEffect(() => {
		const backgroundTimer = setTimeout(() => {
			setVisible(true);
			
			const titleLettersGenerateTimer = setTimeout(()=>{
				setIsMounted(true);
			}, 1000);

			return () => clearTimeout(titleLettersGenerateTimer);
		}, 5000);

		return () => clearTimeout(backgroundTimer);
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
					{isMounted && <TurnOnTitleLetters />}
				</motion.div>
			)}
		</>
	);
}

export default BlackBoard;



