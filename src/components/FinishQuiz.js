import { useEffect, useState } from "react";
import ScoreTitleBanner from "./ScoreTitleBanner";
import ContentLayout from "./ContentLayout";
import SummaryButtons from "./SummaryButtons";

import styles from "./FinishQuiz.module.scss";



export default function FinishQuiz() {
	const [titleMarginValue, setTitleMarginValue] = useState(40);

	useEffect(() => {
		// only for iPhone SE
		if (window.innerWidth === 375) { 
			setTitleMarginValue(20);
		} else if (window.innerWidth === 768) {
			setTitleMarginValue(0);
		} else if (window.innerHeight) { 
			setTitleMarginValue(30);
		} else {
			setTitleMarginValue(40);
		}
	}, []);

	return (
		<div className={styles.finishQuiz_wrapper}>
			<div className={styles.banner_box}>
				<ScoreTitleBanner setMarginTop={titleMarginValue}>
					Final Score
				</ScoreTitleBanner>
			</div>

			{/* Info block */}
			<h2 className={styles.congrats}>Congratulations</h2>

			<ContentLayout />
			<SummaryButtons />
		</div> 
	);
}
