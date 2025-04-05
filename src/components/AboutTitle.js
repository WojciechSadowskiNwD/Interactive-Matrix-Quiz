import styles from "./AboutTitle.module.scss";

export default function AboutTitle({ children, marginTitle="" }) {
	return (
		<div className={`${styles.about_title_box} ${marginTitle}`}>
			<h1>{children}</h1>
		</div>
	);
}
