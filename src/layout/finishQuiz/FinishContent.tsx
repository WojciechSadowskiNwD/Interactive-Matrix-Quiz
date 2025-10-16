import { useAppSelector } from "../../store/redux";
import SummaryTable from "./SummaryTable";
import { motion } from "framer-motion";
import styles from "./FinishContent.module.scss";

export default function FinishContent() {
	const { userName: nickname, selectedAvatar } = useAppSelector(
		(store) => store.user
	); 

	return (
		<div className={styles.content_layout}>
			<motion.div
				className={styles.avatar_box}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5 }}
			>
				<div className={styles.circle_frame}>
					<div className={styles.shadow_frame}></div>
					{selectedAvatar ? (
						<img
							className={styles.img_avatar}
							src={selectedAvatar}
							alt="selected face avatar"
						/>
					) : null}
				</div>
				<div className={styles.nickname_box}>
					<em className={styles.nickname}>{nickname}</em>
				</div>
			</motion.div>

			<SummaryTable />
		</div>
	);
}
