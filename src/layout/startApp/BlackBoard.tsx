import { useEffect } from "react";
import { itIsVisible } from "../../store/uiSlice";
import { useAppDispatch, useAppSelector } from "../../store/redux";
import OptionsPanel from "./OptionsPanel";
import ScoreBoard from "../../pages/ScoreBoard";
import AboutApp from "../../pages/AboutApp";
import AboutDev from "../../pages/AboutDev";
import { motion } from "framer-motion";
import styles from "./BlackBoard.module.scss";

export default function BlackBoard() {
	const dispatch = useAppDispatch();
	const { isVisible, activeComponent } = useAppSelector((store) => store.ui);

	useEffect(() => {
		const timer = setTimeout(() => dispatch(itIsVisible(true)), 7000);
		return () => clearTimeout(timer);
	}, [dispatch]);

	// Render the clicked section
	const renderComponent = () => {
		switch (activeComponent) {
			case "scoreBoard":
				return <ScoreBoard />;
			case "aboutApp":
				return <AboutApp />;
			case "aboutDev":
				return <AboutDev />;
			default:
				return <OptionsPanel />; //start this component first
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