import { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import styles from "./DecodeButton.module.scss";

type DecodeButtonProps = {
	children: string;
};

function DecodeButton({ children }: DecodeButtonProps) {
	const targetWord = children;
	const targetWordLength = targetWord.length;
	const initialString = "_".repeat(targetWordLength);
	const [randomBinaryCode, setRandomBinaryCode] =
		useState<string>(initialString);
	const [detentionFlags, setDetentionFlags] = useState<boolean[]>(
		Array(targetWordLength).fill(false)
	);
	const [count, setCount] = useState<number>(0);
	const [isFirstInterval, setIsFirstInterval] = useState<boolean>(true);

	// substitutes random values 0/1 or a letter from children
	useEffect(() => {
		const interval = setInterval(() => {
			setRandomBinaryCode((prev) => {
				return prev
					.split("")
					.map((char, index) =>
						detentionFlags[index]
							? targetWord[index]
							: Math.random() < 0.5
							? "0"
							: "1"
					)
					.join("");
			});
		}, 100);

		return () => clearInterval(interval);
	}, [detentionFlags, targetWord]);

	useEffect(() => {
		if (count >= targetWordLength) return;

		const timeInterval = isFirstInterval ? 1500 : 300;

		const timeout = setTimeout(() => {
			setDetentionFlags((prevState) => {
				const newFlagState = [...prevState];
				newFlagState[count] = true; // Stop randomized in this index
				return newFlagState;
			});
			// increment index state (count value)
			setCount((prev) => prev + 1);
			if (isFirstInterval) setIsFirstInterval(false);
		}, timeInterval);

		return () => clearTimeout(timeout);
	}, [count, targetWordLength, isFirstInterval]);

	// module for button animation
	const motionHowToMoveBtn: Variants = {
		move: { x: ["-150%", "15%", "0%"] }, // position start -> move to -> back to central place in view
	};

	return (
		<motion.div
			className={styles.randomCodeButton}
			variants={motionHowToMoveBtn}
			initial="move"
			animate="move"
			transition={{ duration: 1, ease: "easeInOut" }}
			whileHover={{
				scale: 1.1,
				transition: { duration: 0.2, ease: "easeOut" },
			}}
		>
			{randomBinaryCode}
		</motion.div>
	);
}

export default DecodeButton;