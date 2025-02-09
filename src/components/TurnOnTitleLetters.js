import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "./TurnOnTitleLetters.module.css";

function TurnOnTitleLetters() {
	const titleLetters = "THE MATRIX";

	// fill this Array this value -> [false,false,....,false]
	const [isVisibleLetters, setIsVisibleLetters] = useState(
		Array(titleLetters.length).fill(false)
	);
	const [showExraText, setShowExraText] = useState(false);
	const [adjustFirstChild, setAdjustFirstChild] = useState(false); //spr czy szerokosc osiagnieta

	useEffect(() => {
		// Order of activation(visible on) of title letters:
		const showSequences = [4, 1, 6, 0, 7, 2, 9, 8, 5];

		showSequences.forEach((charIndex, i) => {
			setTimeout(() => {
				setIsVisibleLetters((prevState) => {
					// I use spread because newState = prevState would not change the content address, so the react would not refresh the view
					const newState = [...prevState];
					newState[charIndex] = true;
					return newState;
				});

				if (i === showSequences.length - 1) {
					setTimeout(() => {
						setShowExraText(true);

						setTimeout(()=>{
							if(window.innerWidth >= 390){
								setAdjustFirstChild(true);
							}
						},100);


					}, 500);
				}
			}, i * 400);
		});
	}, []);

	return (
		<div className={styles.titleContainer}>
			{/* Title */}
			<div className={styles.titleLettersBox}>
				{titleLetters.split("").map((letter, i) => (
					<span
						key={i}
						style={{ visibility: isVisibleLetters[i] ? "visible" : "hidden" }}
					>
						{letter}
					</span>
				))}
				{/* ExtraText */}
				{showExraText && (
				<>
					<motion.div
						className={styles.extraText}
						initial={{ y: -50, opacity: 0 }}
						// animate={{ y: -65, opacity: 1 }}
						animate={{ y: adjustFirstChild ? -74 : -65, opacity: 1 }}
						transition={{ duration: 0.4, ease: "easeOut" }}
					>
						Interactive
					</motion.div>
					<motion.div
						className={styles.extraText}
						initial={{ y: -20, opacity: 0 }}
						animate={{ y: 5, opacity: 1 }}
						transition={{ duration: 0.4, ease: "easeOut" }}
					>
						Quiz
					</motion.div>
				</>
			)}
			</div>
		</div>
	);
}

export default TurnOnTitleLetters;