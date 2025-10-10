import styles from './AboutText.module.scss';

export default function AboutText() {
	return (
		<div className={styles.aboutText_box}>
			<em className={styles.aboutText_box_text}>
				Inspired by the amazing Matrix movies, of which I am a big fan. Have you
				seen them all? <span className={styles.aboutText_box_span}>(data from TMDB API):</span>
			</em>
		</div>
	);
}