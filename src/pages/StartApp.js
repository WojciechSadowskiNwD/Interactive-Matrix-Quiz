import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AnimatePresence } from "framer-motion";
import { toggleActive } from "../store/cursorSlice";
import WelcomeImg from "../components/WelcomeImg";
import MatrixRain from "../components/canvas/MatrixRain";
import BlackBoard from "../components/BlackBoard";
import CustomCursor from "../components/CustomCursor";

// To będzie tło dla ekranu startowego oraz 3 pozostałych pages poza EnterTheQuiz
function StartApp() {
	const [step, setStep] = useState(1);
	const dispatch = useDispatch();
	const { activeCursor } = useSelector((store) => store.cursor);
	const { firstLaunch, activeComponent } = useSelector((store) => store.ui);
	const [showWelcome, setShowWelcome] = useState(true);
	const [startFadeOut, setStartFadeOut] = useState(false);

	useEffect(() => {
		const fadeDelay = setTimeout(() => setStartFadeOut(true), 1500);
		const hideDelay = setTimeout(() => setShowWelcome(false), 2500);

		return () => {
			clearTimeout(fadeDelay);
			clearTimeout(hideDelay);
		};
	}, []);

	useEffect(() => {
		const timeTriggers = [13200, 1000, 5000];
		let timeout = null;

		if (firstLaunch) {
			setStep(0);
		} else if (
			activeComponent === "scoreBoard" ||
			activeComponent === "aboutApp" ||
			activeComponent === "aboutDev"
		) {
			setStep(1);
		} else if (activeComponent === "options") {
			setStep(2);
		}

		if (!activeCursor) {
			timeout = setTimeout(() => dispatch(toggleActive()), timeTriggers[step]);
		}

		return () => clearTimeout(timeout);
	}, [dispatch, activeCursor, firstLaunch, step, activeComponent]);

	return (
		<>
			<MatrixRain />
			<AnimatePresence>
				{showWelcome && <WelcomeImg key={startFadeOut ? "exit" : "enter"} />}
			</AnimatePresence>

			<BlackBoard />
			{activeCursor && <CustomCursor />}
		</>
	);
}

export default StartApp;