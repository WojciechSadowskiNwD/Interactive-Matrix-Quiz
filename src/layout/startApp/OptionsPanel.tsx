import { useEffect, useState } from "react";
import { useAppSelector } from "../../store/redux";
import TurnOnTitleLetters from "./TurnOnTitleLetters";
import ButtonsContainer from "./ButtonsContainer";
import Footer from "./Footer";

export default function OptionsPanel() {
	const { firstLaunch } = useAppSelector((store) => store.ui);
	const [step, setStep] = useState<number>(0);
	let timeTriggers = [500, 4000];

	if (firstLaunch) {
		timeTriggers[0] = 2500;
		timeTriggers[1] = 6500;
	}

	useEffect(() => {
		const timers = [
			setTimeout(() => setStep(1), timeTriggers[0]),
			setTimeout(() => setStep(2), timeTriggers[1]),
		];

		return () => timers.forEach(clearTimeout);
	}, []); //don't add timeTriggers!

	return (
		<>
			{step >= 1 && <TurnOnTitleLetters />}
			{step >= 2 && <ButtonsContainer />}
			<Footer />
		</>
	);
}
