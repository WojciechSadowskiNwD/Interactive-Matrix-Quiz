import { useEffect, useState } from "react";
import TurnOnTitleLetters from "./TurnOnTitleLetters";
import ButtonsContainer from "./ButtonsContainer";
import Footer from "./Footer";

// prop drill
export default function OptionsPanel({setActiveComponent}) {
	const [step, setStep] = useState(0);

	useEffect(() => {
		const timers = [
			setTimeout(() => setStep(1), 2500),
			setTimeout(() => setStep(2), 6500),
		];

		return () => timers.forEach(clearTimeout);
	}, []);

	return (
		<>
			{step >= 1 && <TurnOnTitleLetters />}
			{step >= 2 && <ButtonsContainer setActiveComponent={setActiveComponent}/>}
			<Footer />
		</>
	);
}