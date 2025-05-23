import styles from './SummaryButtons.module.scss';

export default function SummaryButtons(){
    return (
        <div className={styles.summaryButtons}>
            <button className={`${styles.buttons} ${styles.red_pill}`}>Try again</button>
			<button className={`${styles.buttons} ${styles.blue_pill}`}>Back to app</button>
        </div>
    )
}