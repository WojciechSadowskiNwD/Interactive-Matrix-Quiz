import { FC } from "react";
import { motion } from "framer-motion";
import styles from "./StartQuizNextStepBtn.module.scss";

type Props = {
	isLast: boolean;
	onClick: () => void;
};

export const StartQuizNextStepBtn: FC<Props> = ({ isLast, onClick }) => {
	return (
		<div className={styles.nextStepBtn_wrapper}>
			<motion.button
				onClick={onClick}
				className={styles.nextStepBtn}
				initial={{
					backgroundColor: "rgba(0,128,0,0.626)",
					boxShadow: "0px 0px 5px rgba(0, 101, 0, 0.85)",
				}}
				animate={{
					backgroundColor: [
						"rgba(0,128,0,0.626)",
						"rgba(42, 20, 14, 0.63)",
						"rgba(0,128,0,0.626)",
					],
					boxShadow: [
						"0px 0px 5px lightgreen",
						"0px 0px 5px lightgreen",
						"0px 0px 5px lightgreen",
					],
				}}
				transition={{
					duration: 4,
					repeat: Infinity,
					repeatType: "loop",
					ease: "easeInOut",
				}}
			>
				{isLast ? "Finish" : "Next"}
				<i className={`fa-solid fa-forward ${styles.icon_forward}`}></i>
			</motion.button>
		</div>
	);
};
