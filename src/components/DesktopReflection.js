import { useState } from "react";
import Terminal from "./Terminal";
import styles from "./DesktopReflection.module.scss";
import StartQuiz from "./StartQuiz";

export default function DesktopReflection() {

	// ! ! ! - zrobić funkcję, która wewnątrz terminala na button odpala enableQuiz na true
	// const [enableQuiz, setEnableQuiz] = useState(false);
	const [enableQuiz, setEnableQuiz] = useState(true);

 
	return (
		<div className={styles.blackDesktop}>

			{!enableQuiz && <Terminal />}
			{enableQuiz && <StartQuiz />}

			<img
				className={styles.blackDesktop_img}
				src="img/DesktopFaceShadow.webp"
				alt="man face reflection in black desktop"
			/>
		</div>
	);
}

