import styles from './ScoreLabelInfo.module.scss';


export default function ScoreLabelInfo() {
	return (
		<div className={styles.label_info_container}>
			<div className={styles.label_rank}>
				<p className={styles.label_paragraph}>rank</p>
			</div>
			<div className={styles.label_info}>
				<p className={`${styles.label_name} ${styles.label_paragraph}`}>nick</p>
				<p className={styles.label_paragraph}>
					<i class="fas fa-bolt"></i>
				</p>
			</div>
		</div>
	);
}