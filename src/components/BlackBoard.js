import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import OptionsPanel from "./OptionsPanel";
import ScoreBoard from "../pages/ScoreBoard";
import AboutApp from "../pages/AboutApp";
import AboutDev from "../pages/AboutDev";
import styles from "./BlackBoard.module.scss";

// Mechanizm przygaszania ekranu do czarnej planszy
function BlackBoard() {
	const [isVisible, setIsVisible] = useState(false);
	const [activeComponent, setActiveComponent] = useState("options");
	const [firstLaunch, setFirstLaunch] = useState(true);


	useEffect(() => {
		const timer = setTimeout(() => setIsVisible(true), 5000);
		return () => clearTimeout(timer);
	}, []);

	const backToOptions = () => {
		if(firstLaunch) {
			setFirstLaunch(false);
		}
		setActiveComponent("options");
	};

	// Render the clicked section
	const renderComponent = () => {
		switch (activeComponent) {
			case "scoreBoard":
				return <ScoreBoard onBack={() => backToOptions()} />;
			case "aboutApp":
				return <AboutApp onBack={() => backToOptions()} />;
			case "aboutDev":
				return <AboutDev onBack={() => backToOptions()} />;
			default:
				return <OptionsPanel setActiveComponent={setActiveComponent} firstLaunch={firstLaunch} />;
		}
	};

	return (
		<>
			{isVisible && (
				<motion.div
					className={styles.BlackBoard}
					initial={{ opacity: 0 }}
					animate={{ opacity: 0.85 }}
					transition={{ duration: 3.1, ease: "easeInOut" }}
				>
					{renderComponent()}
				</motion.div>
			)}
		</>
	);
}

export default BlackBoard;
