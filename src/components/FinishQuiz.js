import { useSelector } from "react-redux";

import ScoreTitleBanner from "./ScoreTitleBanner";
import SummaryTable from "./SummaryTable";
import styles from "./FinishQuiz.module.scss";
import SummaryButtons from "./SummaryButtons";


export default function FinishQuiz() {
	const {
		userName: nickname,
		selectedAvatar,
		currentScore,
		secondsRemaining,
	} = useSelector((store) => store.user);
	

	return (
		<div className={styles.finishQuiz_wrapper}>
			<ScoreTitleBanner setMarginTop={40}>Final Score</ScoreTitleBanner>

			{/* Info block */}
			<h2>Congratulations</h2>

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

			<SummaryTable/>
			
			{/* Buttony hiperłącza: */}
			<SummaryButtons/>
		</div>
	);
}


