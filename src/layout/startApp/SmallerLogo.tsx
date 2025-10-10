import styles from "./SmallerLogo.module.scss";

export default function SmallerLogo() {
	const titleLetters = "THE MATRIZ";

	return (
		<div className={styles.titleContainer}>
			<div className={styles.titleLettersBox}>
				<span className={styles.title}>{titleLetters}</span>

				<div className={styles.extraText_top}>Interactive</div>
				<div className={styles.extraText_bottom}>Quiz</div>
			</div>
		</div>
	);
}