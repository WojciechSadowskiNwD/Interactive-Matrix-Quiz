import styles from "./AboutIconSkill.module.scss";

export default function AboutIconSkill({ img, text }) {
	return (
		<div className={styles.about_icon_container}>
			<div className={styles.about_icon_box}>
				<div className={styles.matrix_blur}></div>
				<img className={styles.icon_img} src={img} alt="react icon" />
			</div>
            <p className={styles.about_icon_text}>{text}</p>
		</div>
	);
}
