import { useSelector } from "react-redux";
import styles from "./StartQuizTopBar.module.scss";

function StartQuizTopBar() {
	const { userName: nickname, selectedAvatar } = useSelector(
		(store) => store.user
	);

	return (
		<div className={styles.top_bar}>
			<div className={styles.left_box}>
				<div className={styles.left_box_img}>
					<div className={styles.item_shadow}></div>
					<img
						className={styles.img_avatar}
						src={selectedAvatar}
						alt="selected face avatar"
					/>
				</div>
				<div className={styles.left_box_nickname}>
					<em>{nickname}</em>
				</div>
			</div>

			<div className={styles.right_box}>
				<div className={styles.right_box_title}>SCORE</div>
				<div className={styles.right_box_points}>95</div>
			</div>
		</div>
	);
}

export default StartQuizTopBar;
