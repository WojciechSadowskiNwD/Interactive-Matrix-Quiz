import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import ScoreTitleBanner from "./ScoreTitleBanner";
import SummaryTable from "./SummaryTable";
import SummaryButtons from "./SummaryButtons";
import styles from "./FinishQuiz.module.scss";

export default function FinishQuiz() {
	const [titleMarginValue, setTitleMarginValue] = useState(40);
	const { userName: nickname, selectedAvatar } = useSelector(
		(store) => store.user
	);

	useEffect(() => {
		// only for iPhone SE
		if (window.innerWidth === 375) {
			setTitleMarginValue(20);
		} else if (window.innerHeight) {
			setTitleMarginValue(30);
		} else {
			setTitleMarginValue(40);
		}
	}, []);

	return (
		<div className={styles.finishQuiz_wrapper}>
			<ScoreTitleBanner setMarginTop={titleMarginValue}>
				Final Score
			</ScoreTitleBanner>

			{/* Info block */}
			<h2 className={styles.congrats}>Congratulations</h2>

			<div className={styles.avatar_box}>
				<div className={styles.circle_frame}>
					<div className={styles.shadow_frame}></div>
					<img
						className={styles.img_avatar}
						src={selectedAvatar}
						alt="selected face avatar"
					/>
				</div>
				<div className={styles.nickname_box}>
					<em className={styles.nickname}>{nickname}</em>
				</div>
			</div>

			<SummaryTable />
			<SummaryButtons />
		</div>
	);
}
