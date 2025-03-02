import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleActive } from "../store/cursorSlice";
import BlackBoard from "../components/BlackBoard";
import MatrixRain from "../components/canvas/MatrixRain";
import CustomCursor from "../components/CustomCursor";

// To będzie tło dla ekranu startowego oraz 3 pozostałych pages poza EnterTheQuiz
function StartApp() {
	const [step, setStep] = useState(1);
	const dispatch = useDispatch();
	const { activeCursor } = useSelector((store) => store.cursor);
	const { firstLaunch, activeComponent } = useSelector((store) => store.ui);
	
	
	useEffect(() => {
		const timeTriggers = [13200, 1000, 5000];
		let timeout = null;
		
		if(firstLaunch){
			setStep(0);
		} else if(activeComponent === "scoreBoard" || activeComponent === "aboutApp" || activeComponent === "aboutDev"){
			setStep(1);
		}else if(activeComponent === "options"){
			setStep(2);
		}

		if(!activeCursor){
				timeout = setTimeout(() => dispatch(toggleActive()), timeTriggers[step]);
		}


		return () => clearTimeout(timeout);
	}, [dispatch, activeCursor, firstLaunch, step, activeComponent]);

	return (
		<>
			<MatrixRain />
			<BlackBoard />
			{activeCursor && <CustomCursor />}
		</>
	);
}

export default StartApp;