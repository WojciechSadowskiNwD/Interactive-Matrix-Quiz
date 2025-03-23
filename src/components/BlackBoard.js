import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isFirstLaunch, itIsVisible, changeActiveComponent } from "../store/uiSlice";
import { motion } from "framer-motion";
import OptionsPanel from "./OptionsPanel";
import ScoreBoard from "../pages/ScoreBoard";
import AboutApp from "../pages/AboutApp";
import AboutDev from "../pages/AboutDev";
import styles from "./BlackBoard.module.scss";


function BlackBoard() {
	const dispatch = useDispatch();
	const { isVisible, activeComponent } = useSelector(
		(store) => store.ui
	);

	useEffect(() => {
		const timer = setTimeout(() => dispatch(itIsVisible(true)), 5000);
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
				return <OptionsPanel />;
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