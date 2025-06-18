import { Link } from "react-router-dom";
import styles from "./SummaryButtons.module.scss";

export default function SummaryButtons() {
	return (
		<div className={styles.summaryButtons}>
			<button
				className={`${styles.buttons} ${styles.red_pill}`}
				onClick={() => window.location.reload()}
			>
				Try again 
			</button> 

			<Link to="/">
				<button className={`${styles.buttons} ${styles.blue_pill}`}>
					Back to app 
				</button>
			</Link>
		</div>
	);
}
