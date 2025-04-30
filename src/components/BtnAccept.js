import { motion } from "framer-motion";
import styles from "./BtnAccept.module.scss";

function BtnAccept() {
	return (
		<div className={styles.button_wrapper}>
			<motion.button
				className={styles.accept_btn}
				whileHover={{ scale: 1.1 }}
				transition={{ duration: 0.3 }}
			>
				Enter
			</motion.button>
		</div>
	);
}

export default BtnAccept;
