import MatrixRain from "../components/canvas/MatrixRain";
import DesktopReflection from "../components/DesktopReflection";
import CustomCursor from "../components/CustomCursor";

function EnterTheQuiz() {
	return (
		<div className="quizContainer">
			<MatrixRain />
			<DesktopReflection />
			<CustomCursor />
		</div>
	);
}

export default EnterTheQuiz;