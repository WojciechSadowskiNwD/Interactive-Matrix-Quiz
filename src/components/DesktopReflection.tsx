import { useAppSelector } from "../store/redux";
import Terminal from "./Terminal";
import StartQuiz from "./StartQuiz";
import FinishQuiz from "./FinishQuiz";
import styles from "./DesktopReflection.module.scss";


export default function DesktopReflection() {
	const {status} = useAppSelector((store)=>store.ui);
	// "startScreen", "quizScreen", "finishScreen"

	return (
		<div className={styles.blackDesktop}>
			{status === "startScreen" && <Terminal />}
			{status === "quizScreen" && <StartQuiz />}
			{status === "finishScreen" && <FinishQuiz />}

			<img
				className={styles.blackDesktop_img}
				src="img/DesktopFaceShadowLarge.webp"
				alt="man face reflection in black desktop"
			/>
		</div>
	);
}