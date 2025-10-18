import { useAppDispatch } from "../../store/redux";
import { changeStatus } from "../../store/uiSlice";
import { motion } from "framer-motion";
import styles from "./BtnAccept.module.scss";

export default function BtnAccept() {
	const dispatch = useAppDispatch();

	const handleClick = () => {
		dispatch(changeStatus("quizScreen"));
	};
 
	return (
		<div className={styles.button_wrapper}>
			<motion.button
				className={styles.accept_btn}
				whileHover={{ scale: 1.1 }}
				transition={{ duration: 0.3 }}
				onClick={handleClick}
			>
				Enter
			</motion.button>
		</div>
	);
}
