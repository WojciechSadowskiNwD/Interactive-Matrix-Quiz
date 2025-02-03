import { useEffect, useState } from "react";
import styles from './TurnOnTitleLetters.module.css';


function TurnOnTitleLetters() {
	const titleLetters = "THE MATRIX";

	// fill this Array this value -> [false,false,....,false]
	const [isVisibleLetters, setIsVisibleLetters] = useState(
		Array(titleLetters.length).fill(false)
	);

	useEffect(() => {
		// Order of activation(visible on) of title letters:
		const showSequences = [2, 5, 8, 1, 6, 9, 7, 4, 0];

		showSequences.forEach((charIndex, i) => {
			setTimeout(() => {
				setIsVisibleLetters((prevState) => {
					// I use spread because newState = prevState would not change the content address, so the react would not refresh the view
					const newState = [...prevState];
					newState[charIndex] = true;
					return newState;
				});
			}, i * 400);
		});
	}, []);


	return (
		<div className={styles.titleLettersBox}>
			{titleLetters.split("").map((letter, i) => (
				<span
					key={i}
					style={{ visibility: isVisibleLetters[i] ? "visible" : "hidden" }}
				>
					{letter}
				</span>
			))}
		</div>
	);
}


export default TurnOnTitleLetters;