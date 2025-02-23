import { useEffect, useState } from "react";
import BlackBoard from "../components/BlackBoard";
import MatrixRain from "../components/canvas/MatrixRain";
import CustomCursor from "../components/CustomCursor";

// To będzie tło dla ekranu startowego oraz 3 pozostałych pages poza EnterTheQuiz
function StartApp() {
	const [firstLaunch, setFirstLaunch] = useState(true);
	const [activeCursor, setActiveCursor] = useState(false);
	const [whereIsCursor, setWhereIsCursor] = useState("inStartPosition");

	useEffect(() => {
		if (whereIsCursor === "goToSubPage") {
			console.log(
				"whereIsCursor zawiera tearaz (goToSubPage ?): " + whereIsCursor
			);
			const timeout = setTimeout(() => {
				setActiveCursor(true);
			}, 1000);
			return () => clearTimeout(timeout);
		} else if (whereIsCursor === "backToOptions") {
			console.log(
				"whereIsCursor zawiera tearaz (backToOptions?): " + whereIsCursor
			);
			const timeout = setTimeout(() => {
				setActiveCursor(true);
			}, 5000);
			return () => clearTimeout(timeout);
		} else if (!activeCursor) {
			console.log("whereIsCursor zawiera teraz: " + whereIsCursor);

			const timeout = setTimeout(() => {
				setActiveCursor(true);
			}, 14000);
			return () => clearTimeout(timeout);
		}

	}, [activeCursor, whereIsCursor]);

	return (
		<>
			<MatrixRain />
			<BlackBoard firstLaunch={firstLaunch} setFirstLaunch={setFirstLaunch} />
			{activeCursor && (
				<CustomCursor
					onWhereIsCursor={setWhereIsCursor}
					onActiveCursor={setActiveCursor}
				/>
			)}
		</>
	);
}

export default StartApp;