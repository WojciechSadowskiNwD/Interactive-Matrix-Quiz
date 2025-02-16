import { useEffect, useState } from "react";
import TurnOnTitleLetters from "./TurnOnTitleLetters";
import ButtonsPanel from "./ButtonsPanel";
import Footer from "./Footer";
import { motion } from "framer-motion";
import styles from "./BlackBoard.module.scss";


function BlackBoard() {
	const [step, setStep] = useState(0);

	useEffect(()=>{
		const timers = [
			setTimeout(()=> setStep(1), 5000),
			setTimeout(()=> setStep(2), 6000),
			setTimeout(()=> setStep(3), 10000),
		];

		return ()=> timers.forEach(clearTimeout);
	},[]);

	return (
		<>
			{step >=1 && (
				<motion.div
					className={styles.BlackBoard}
					initial={{ opacity: 0 }}
					animate={{ opacity: 0.85 }}
					transition={{ duration: 3.1, ease: "easeInOut" }}
				>
					{step >=2 && <TurnOnTitleLetters />}
					{step >=3 && <ButtonsPanel/>}
					<Footer/>
				</motion.div>
			)}
		</>
	);
}

export default BlackBoard;