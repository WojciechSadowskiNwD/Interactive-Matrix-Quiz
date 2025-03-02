import { useEffect, useState } from "react";
import BlackBoard from "../components/BlackBoard";
import MatrixRain from "../components/canvas/MatrixRain";
import CustomCursor from "../components/CustomCursor";


// To będzie tło dla ekranu startowego oraz 3 pozostałych pages poza EnterTheQuiz
function StartApp() {
	const [activeCursor, setActiveCursor] = useState(false);
	const [whereIsCursor, setWhereIsCursor] = useState("inStartPosition");




	useEffect(() => {
		let timeout;

		if (whereIsCursor === "goToSubPage") {
			timeout = setTimeout(() => setActiveCursor(true), 1000);
		} else if (whereIsCursor === "backToOptions") {
			timeout = setTimeout(() => setActiveCursor(true), 5000);
		} else if (whereIsCursor === "inStartPosition") {
			timeout = setTimeout(() => setActiveCursor(true), 14000);
		}

		return () => clearTimeout(timeout);
	}, [whereIsCursor]);



	return (
		<>
			<MatrixRain />
			<BlackBoard />
			{activeCursor && (
				<CustomCursor
					whereIsCursor={whereIsCursor}
					setWhereIsCursor={setWhereIsCursor}
					setActiveCursor={setActiveCursor}
				/>
			)}
		</>
	);
}

export default StartApp;








// version 1:
// import { useEffect, useState } from "react";
// import BlackBoard from "../components/BlackBoard";
// import MatrixRain from "../components/canvas/MatrixRain";
// import CustomCursor from "../components/CustomCursor";

// // To będzie tło dla ekranu startowego oraz 3 pozostałych pages poza EnterTheQuiz
// function StartApp() {
// 	const [firstLaunch, setFirstLaunch] = useState(true);
// 	const [activeCursor, setActiveCursor] = useState(false);
// 	const [whereIsCursor, setWhereIsCursor] = useState("inStartPosition");

// 	useEffect(() => {
// 		if (whereIsCursor === "goToSubPage") {
// 			console.log("Kliknięto goToSubPage/ next - czekamy 1s");

// 			const timeout_A = setTimeout(() => {
// 				setActiveCursor(true);
// 			}, 1000);
// 			return () => clearTimeout(timeout_A);

// 		} else if (whereIsCursor === "backToOptions") {
// 			console.log("Kliknięto backToOptions/ wracamy - czekamy 5s");

// 			const timeout_B = setTimeout(() => {
// 				setActiveCursor(true);
// 			}, 5000);
// 			return () => clearTimeout(timeout_B);
// 		} else if ((whereIsCursor === "inStartPosition")) {
// 			console.log("Jest inStartPosition/ startujemy - czekamy 14s");

// 			const timeout_C = setTimeout(() => {
// 				setActiveCursor(true);
// 			}, 14000);
// 			return () => clearTimeout(timeout_C);
// 		}
// 	}, [activeCursor, whereIsCursor]);

// 	return (
// 		<>
// 			<MatrixRain />
// 			<BlackBoard firstLaunch={firstLaunch} setFirstLaunch={setFirstLaunch} />
// 			{activeCursor && (
// 				<CustomCursor
// 					onWhereIsCursor={setWhereIsCursor}
// 					onActiveCursor={setActiveCursor}
// 				/>
// 			)}
// 		</>
// 	);
// }

// export default StartApp;
