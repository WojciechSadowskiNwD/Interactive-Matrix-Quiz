import { motion } from "framer-motion";
import styles from "./BtnAccept.module.scss";
import { useDispatch } from "react-redux";
import { changeStatus } from "../store/uiSlice";

function BtnAccept() {
	const dispatch = useDispatch();
	
	const handleClick=()=> {
		dispatch(changeStatus("quizScreen"));
	}


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

export default BtnAccept;
