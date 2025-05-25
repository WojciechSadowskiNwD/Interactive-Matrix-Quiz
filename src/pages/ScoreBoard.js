import { useEffect, useState } from "react";
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import { db } from "../firebaseConfig";

import PulsingReturnBtn from "../components/PulsingReturnBtn";
import ScoreLabelInfo from "../components/ScoreLabelInfo";
import ScoreTitleBanner from "../components/ScoreTitleBanner";
import ScoreUserBar from "../components/ScoreUserBar";
import styles from "./ScoreBoard.module.scss";

function ScoreBoard({ onBack }) {
	const [isLoading, setIsLoading] = useState(true);
	const [highestRecords, setHighestRecords] = useState([]);

	useEffect(() => {
		const fetchScores = async () => {
			try {
				const q = query(
					collection(db, "scores"),
					orderBy("points", "desc"),
					limit(5)
				);
				const querySnapshot = await getDocs(q);

				const scores = querySnapshot.docs.map((doc, index) => ({
					id: doc.id,
					nick: doc.data().nick,
					points: doc.data().points,
				}));

				setHighestRecords(scores);
			} catch (error) {
				console.error("Error fetching scores: ", error);
			} finally {
				setIsLoading(false);
			}
		};

		fetchScores();
	}, []);

	// LOADER:
	if (isLoading) {
		return (
			<div className="setToCenter">
				<div className="loader"></div>
			</div>
		);
	}

	return (
		<div className={styles.scoreBoard}>
			<ScoreTitleBanner>Score board</ScoreTitleBanner>

			<div className={styles.green_frame}>
				<ScoreLabelInfo />

				{highestRecords.map((record, index) => (
					<ScoreUserBar
						key={record.id}
						number={index + 1}
						nick={record.nick}
						points={record.points}
					/>
				))}
			</div>

			<PulsingReturnBtn onBack={onBack} marginExtra={styles.marginExtra} />
		</div>
	);
}

export default ScoreBoard;

// Jak ma to wyglądać?
// opcjonalnie:
//#. Wyliczenie wyników moja koncepcja. Jeżeli będziemy mieć losowe generowanie pytań, to można wprowadzić system nagrody w zamian za wielokrotność podawania poprawnych odpowiedzi po sobie bez żadnej pomyłki:
// Jedna odpowiedź poprawna - 100% punktów, dwie bez pomyłki 110%, trzy bez pomyłki 120%, itd.
// Ponadto wartoby na końcu wziąć pod uwagę czas wyrażony w sekundach, jaki pozostał userowi po zakończonym quizie. Można go przeliczyć na dodatkową punktację oraz dodać do zgromadzonych punktów. W ten sposób mamy już bardziej złożony sytem i wyższą motywację do powtórzenia przez niego samej zabawy.
// Gdyby gromadzić osobno różne typy punktów w innych zmiennych, można je fajnie zaprezentować na podsupowaniu pokazując userowi ile zebrał podstawowych pkt, ile zdobył bonusowych za strzelanie bez pomyłek, oraz jaką dostał premię za niewykorzystany czas + ewentualnie za niewykorzystane koła ratunkowe, a na dole łączna ich suma.
