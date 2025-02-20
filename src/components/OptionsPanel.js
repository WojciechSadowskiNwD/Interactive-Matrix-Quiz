import { useEffect, useState } from "react";
import TurnOnTitleLetters from "./TurnOnTitleLetters";
import ButtonsContainer from "./ButtonsContainer";
import Footer from "./Footer";

// Here prop drill !
export default function OptionsPanel({setActiveComponent, firstLaunch}) {
	const [step, setStep] = useState(0);
	let timeTriggers = [500, 4000];

	if(firstLaunch){
		timeTriggers[0] = 2500;
		timeTriggers[1] = 6500;
	}

	useEffect(() => {

		const timers = [
			setTimeout(() => setStep(1), timeTriggers[0]),
			setTimeout(() => setStep(2), timeTriggers[1]),
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