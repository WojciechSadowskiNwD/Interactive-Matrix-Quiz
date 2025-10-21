import { Link } from "react-router-dom";
import styles from "./SummaryButtons.module.scss";
import { useAppDispatch } from "../../store/redux";
import { resetSettings } from "../../store/userSlice";
import { changeStatus } from "../../store/uiSlice";

export default function SummaryButtons() {
	const dispatch = useAppDispatch();

	function resetAllState(): void {
		dispatch(resetSettings());
		dispatch(changeStatus("startScreen"));
	}

	return (
		<div className={styles.summaryButtons}>
			<button
				className={`${styles.buttons} ${styles.red_pill}`}
				onClick={() => window.location.reload()}
			>
				Try again
			</button>

			<Link to="/">
				<button
					className={`${styles.buttons} ${styles.blue_pill}`}
					onClick={() => resetAllState()}
				>
					Back to app
				</button>
			</Link>
		</div>
	);
}