import BlackBoard from "../components/BlackBoard";
import MatrixRain from "../components/canvas/MatrixRain";


// To będzie tło dla ekranu startowego oraz 3 pozostałych pages poza EnterTheQuiz
function StartApp() {
	return (
		<>
			<MatrixRain />
			<BlackBoard />
		</>
	);
}

export default StartApp;