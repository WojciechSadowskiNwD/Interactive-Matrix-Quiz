import styles from './TerminalBar.module.scss';

export default function TerminalBar() {
	return (
		<div className={styles.terminalTitle_box}>
			<h3 className={styles.terminalTitle}>Terminal:</h3>
		</div>
	)
}