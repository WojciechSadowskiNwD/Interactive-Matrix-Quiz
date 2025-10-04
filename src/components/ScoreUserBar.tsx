import { FC } from "react";
import styles from "./ScoreUserBar.module.scss";

type ScoreUserBarProps = {
	number: number;
	nick: string;
	points: number;
};

export const ScoreUserBar: FC<ScoreUserBarProps> = ({
	number,
	nick,
	points,
}) => {
	return (
		<div className={styles.score_box}>
			<div className={styles.position_rank}>
				<p>{number}</p>
			</div>
			<div className={styles.position_info}>
				<p className={styles.user_name}>{nick}</p>
				<p>{points}</p>
			</div>
		</div>
	);
};