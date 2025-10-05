import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/redux";
import { countdown } from "../store/uiSlice";
import styles from "./StartQuizTimer.module.scss";

export default function StartQuizTimer() {
	const { secondsRemaining } = useAppSelector((store) => store.ui);
	const dispatch = useAppDispatch();
	
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