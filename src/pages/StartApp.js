import { useEffect, useState } from "react";
import BlackBoard from "../components/BlackBoard";
import MatrixRain from "../components/canvas/MatrixRain";
import CustomCursor from "../components/CustomCursor";


// To będzie tło dla ekranu startowego oraz 3 pozostałych pages poza EnterTheQuiz
function StartApp() {
	const [activeCursor, setActiveCursor] = useState(false);

	// muszę opóźnić aby najpierw zostały zamontowane buttony
	useEffect(()=>{
		setTimeout(()=>{setActiveCursor(true)}, 14000);
	},[]);

	return (
		<>
			<MatrixRain />
			<BlackBoard />
			{activeCursor && <CustomCursor/>}
		</>
	);
}

export default StartApp;