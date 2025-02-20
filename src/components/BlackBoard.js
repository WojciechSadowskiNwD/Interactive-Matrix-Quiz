import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import OptionsPanel from "./OptionsPanel";
import ScoreBoard from "../pages/ScoreBoard";
import AboutApp from "../pages/AboutApp";
import AboutDev from "../pages/AboutDev";
import styles from "./BlackBoard.module.scss";

// Pozostaje mechanizm przygaszania ekranu do czarnej planszy
function BlackBoard() {
	const [isVisible, setIsVisible] = useState(false);
	const [activeComponent, setActiveComponent] = useState("options");

	useEffect(() => {
		const timer = setTimeout(() => setIsVisible(true), 5000);
		return () => clearTimeout(timer);
	}, []);

	// render the clicked section
	const renderComponent = () => {
		switch (activeComponent) {
			case "scoreBoard":
				return <ScoreBoard onBack={()=> setActiveComponent("options")}/>;
			case "aboutApp":
				return <AboutApp onBack={()=> setActiveComponent("options")}/>;
			case "aboutDev":
				return <AboutDev onBack={()=> setActiveComponent("options")}/>;
			default:
				return (
					<OptionsPanel setActiveComponent={setActiveComponent}/>
				);
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
