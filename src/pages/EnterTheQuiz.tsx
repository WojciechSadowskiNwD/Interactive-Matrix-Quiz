import MatrixRain from "../layout/components/MatrixRain";
import DesktopReflection from "../layout/enterTheQuiz/DesktopReflection";
import CustomCursor from "../layout/components/CustomCursor";

export default function EnterTheQuiz() {
	return (
		<div className="quizContainer">
			<MatrixRain />
			<DesktopReflection />
			<CustomCursor />
		</div>
	);
}
