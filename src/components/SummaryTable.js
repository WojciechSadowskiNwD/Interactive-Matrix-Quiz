
import { useSelector } from 'react-redux';
import styles from './SummaryTable.module.scss';

function SummaryTable() {
    const {currentScore} = useSelector((store)=> store.user);
    const {secondsRemaining, corrAnswers} = useSelector((store)=>store.ui);


	return (
		<div className={styles.summaryTable}>
			<em>Correct answers: {corrAnswers}</em>
			<em>Points: {currentScore}</em>
			<em>Time bonus: {secondsRemaining}</em>
			<h2 className={styles.sum}>TOTAL: {currentScore+secondsRemaining}</h2>

			{/* Sprawdzenie czy wynik wejdzie na listę najlepszych 5-ciu */}
			<em className={styles.records_info}>Wow you get 5th place!</em>
		</div>
	)
}

export default SummaryTable;