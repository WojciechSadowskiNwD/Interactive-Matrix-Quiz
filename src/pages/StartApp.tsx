import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/redux";
import { toggleActive } from "../store/cursorSlice";
import MatrixRain from "../layout/components/MatrixRain";
import WelcomeImg from "../layout/startApp/WelcomeImg";
import BlackBoard from "../layout/startApp/BlackBoard";
import CustomCursor from "../layout/components/CustomCursor";
import { AnimatePresence } from "framer-motion";

function StartApp() {
	const dispatch = useAppDispatch();
	const { activeCursor } = useAppSelector((store) => store.cursor);
	const { firstLaunch, activeComponent } = useAppSelector((store) => store.ui);
	const [step, setStep] = useState<number>(1);
	const [showWelcome, setShowWelcome] = useState<boolean>(true);
	const [startFadeOut, setStartFadeOut] = useState<boolean>(false);

	useEffect(() => {
		const fadeDelay = setTimeout(() => setStartFadeOut(true), 2000);
		const hideDelay = setTimeout(() => setShowWelcome(false), 3000);

		return () => {
			clearTimeout(fadeDelay);
			clearTimeout(hideDelay);
		};
	}, []);

	useEffect(() => {
		const timeTriggers = [13200, 1000, 5000];
		let timeout: ReturnType<typeof setTimeout> | undefined = undefined;

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