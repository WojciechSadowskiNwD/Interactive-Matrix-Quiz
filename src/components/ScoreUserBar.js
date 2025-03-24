import styles from './ScoreUserBar.module.scss';

export default function ScoreUserBar({number, nick, points}) {
	return (
		<div className={styles.score_box}>
			<div className={styles.position_rank}>
				<p>{number}</p>
			</div>
			<div className={styles.position_info}>
				<p className={styles.user_name}>{nick}</p>
				<p>{points}</p>
			</div>
		</div>
	);
}