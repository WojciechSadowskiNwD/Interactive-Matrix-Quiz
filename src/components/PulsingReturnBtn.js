import { useDispatch, useSelector } from 'react-redux';
import { isFirstLaunch, changeActiveComponent } from '../store/uiSlice';
import styles from './PulsingReturnBtn.module.scss';
import { motion } from "framer-motion";

export default function PulsingReturnBtn({marginExtra=""}) {

    const dispatch = useDispatch();
	const { firstLaunch } = useSelector(
		(store) => store.ui
	);

    const backToOptions = () => {
            if (firstLaunch) {
                dispatch(isFirstLaunch(false));
            }
            dispatch(changeActiveComponent("options"));
        };

	return (
		<motion.button
		onClick={() => backToOptions()}
		data-action="goBack"
		className={`${styles.btn_back} ${marginExtra}`}
		initial={{
			backgroundColor: "rgba(0,128,0,0.626)",
			boxShadow: "0px 0px 115px #ccff00",
		}}
		animate={{
			backgroundColor: [
				"rgba(0,128,0,0.626)",
				"#00aa00",
				"rgba(0,128,0,0.626)",
			],
			boxShoadow: [
				"0px 0px 5px #00ff00",
				"0px 0px 20px #00ff00",
				"0px 0px 5px #00ff00",
			],
		}}
		transition={{
			duration: 4,
			repeat: Infinity,
			repeatType: "loop",
			ease: "easeInOut",
		}}
	>
		<i className={`fa-solid fa-backward-fast ${styles.back_icon}`}></i>
		<em className={styles.em}>Back</em>
	</motion.button>
	)
}