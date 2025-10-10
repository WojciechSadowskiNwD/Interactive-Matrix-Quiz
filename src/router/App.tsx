import { BrowserRouter, Route, Routes } from "react-router-dom";
import StartApp from "../pages/StartApp";
import EnterTheQuiz from "../pages/EnterTheQuiz";
import "../layout/styles/App.scss";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<StartApp />} />
				<Route path="/enterTheQuiz" element={<EnterTheQuiz />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;