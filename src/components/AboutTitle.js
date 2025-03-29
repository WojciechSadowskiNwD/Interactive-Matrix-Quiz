import styles from "./AboutTitle.module.scss";

export default function AboutTitle({ children }) {
	return (
		<div className={styles.about_title_box}>
			<h1>{children}</h1>
		</div>
	);
}
