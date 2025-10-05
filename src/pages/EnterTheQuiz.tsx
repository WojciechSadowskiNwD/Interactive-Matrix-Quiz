import MatrixRain from "../components/canvas/MatrixRain";
import DesktopReflection from "../components/DesktopReflection";
import CustomCursor from "../components/CustomCursor";

export default function EnterTheQuiz() {
	return (
		<div className="quizContainer">
			<MatrixRain />
			<DesktopReflection />
			<CustomCursor />
		</div>
	);
}