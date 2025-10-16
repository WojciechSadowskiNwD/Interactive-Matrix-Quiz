import { useEffect, useState } from "react";
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { ScoreTitleBanner } from "../layout/scoreBoard/ScoreTitleBanner";
import ScoreLabelInfo from "../layout/scoreBoard/ScoreLabelInfo";
import { ScoreUserBar } from "../layout/scoreBoard/ScoreUserBar";
import PulsingReturnBtn from "../layout/components/PulsingReturnBtn";
import styles from "./ScoreBoard.module.scss";

type HighestRecord = {
	id: string;
	nick: string;
	points: number;
};

function ScoreBoard() {
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [highestRecords, setHighestRecords] = useState<HighestRecord[]>([]);

	useEffect(() => {
		const fetchScores = async () => {
			try {
				const q = query(
					collection(db, "scores"),
					orderBy("points", "desc"),
					limit(5)
				);
				const querySnapshot = await getDocs(q);

				const scores: HighestRecord[] = querySnapshot.docs.map(
					(doc, index) => ({
						id: doc.id,
						nick: doc.data().nick,
						points: doc.data().points,
					})
				);

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

			<PulsingReturnBtn marginExtra={styles.marginExtra} />
		</div> 
	);
}

export default ScoreBoard;
