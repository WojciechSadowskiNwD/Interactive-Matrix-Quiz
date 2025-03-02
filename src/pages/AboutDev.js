import styles from "./AboutDev.module.scss";

function AboutDev({ onBack }) {
	return (
		<div>
			<h1>About dev</h1>
			<button onClick={onBack} className={styles.goBack} data-action="goBack">
				Back
			</button>
		</div>
	);
}

export default AboutDev;