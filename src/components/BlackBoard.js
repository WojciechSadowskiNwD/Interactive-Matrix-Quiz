import { useEffect, useState } from "react";
import TurnOnTitleLetters from "./TurnOnTitleLetters";
import ButtonsPanel from "./ButtonsPanel";
import Footer from "./Footer";
import { motion } from "framer-motion";
import styles from "./BlackBoard.module.css";

function BlackBoard() {
	const [visible, setVisible] = useState(false);
	const [isTitleMounted, setIsTitleMounted] = useState(false); 
	const [isPanelBtnsMounted, setIsPanelBtnsMounted] = useState(false); 

	useEffect(() => {
		const backgroundTimer = setTimeout(() => {
			setVisible(true);
			
			const titleLettersGenerateTimer = setTimeout(()=>{
				setIsTitleMounted(true);
			}, 1000);
			const showPanelBtnsTimer = setTimeout(()=>{
				setIsPanelBtnsMounted(true);
			}, 5000);

			return () => {
				clearTimeout(titleLettersGenerateTimer);
				clearTimeout(showPanelBtnsTimer);
			}
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
					{isTitleMounted && <TurnOnTitleLetters />}
					{isPanelBtnsMounted && <ButtonsPanel/>}
					<Footer/>
				</motion.div>
			)}
		</>
	);
}

export default BlackBoard;



