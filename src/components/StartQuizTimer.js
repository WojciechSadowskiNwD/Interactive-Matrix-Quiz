import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import styles from "./StartQuizTimer.module.scss";
import { countdown } from "../store/uiSlice";

function StartQuizTimer() {
	const { secondsRemaining } = useSelector((store) => store.ui);
	const dispatch = useDispatch();
	
	const minutes = Math.floor(secondsRemaining / 60);
	const seconds = secondsRemaining % 60;

	useEffect(()=>{
		const tick = setInterval(()=>{
			dispatch(countdown());
		}, 1000);

		return () => clearInterval(tick);
	},[dispatch]);


	return (
		<div className={styles.timer_wrapper}>
			<div className={styles.timer_frame}>
				<em>
					Time left: {minutes < 10 && "0"}
					{minutes}: {seconds < 10 && "0"}
					{seconds}
				</em>
			</div>
		</div>
	);
}

export default StartQuizTimer;
