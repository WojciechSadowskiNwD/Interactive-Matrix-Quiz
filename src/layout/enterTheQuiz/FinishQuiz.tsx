import { useEffect, useState } from "react";
import { ScoreTitleBanner } from "../scoreBoard/ScoreTitleBanner";
import FinishContent from "../finishQuiz/FinishContent";
import SummaryButtons from "../finishQuiz/SummaryButtons";
import styles from "./FinishQuiz.module.scss";

export default function FinishQuiz() {
	const [titleMarginValue, setTitleMarginValue] = useState<number>(40);

	useEffect(() => {
		// only for iPhone SE
		if (window.innerWidth === 375) {
			setTitleMarginValue(20);
		} else if (window.innerWidth === 768) {
			setTitleMarginValue(0);
		} else if (window.innerWidth > 992 && window.innerHeight <= 560) {
			setTitleMarginValue(0);
		} else {
			setTitleMarginValue(40);
		}
	}, []);

	return (
		<div className={styles.finishQuiz_wrapper}>
			<div className={styles.banner_box}>
				<ScoreTitleBanner customMarginTop={titleMarginValue}>
					Final Score
				</ScoreTitleBanner>
			</div> 

			{/* Info block */}
			<h2 className={styles.congrats}>Congratulations</h2>

			<FinishContent />
			<SummaryButtons />
		</div>
	);
}
