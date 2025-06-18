import { useSelector } from "react-redux";
import SummaryTable from "./SummaryTable";
import { motion } from "framer-motion";

import styles from "./ContentLayout.module.scss";

export default function ContentLayout() {
	const { userName: nickname, selectedAvatar } = useSelector(
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
					<img
						className={styles.img_avatar}
						src={selectedAvatar}
						alt="selected face avatar" 
					/>
				</div>
				<div className={styles.nickname_box}>
					<em className={styles.nickname}>{nickname}</em>
				</div>
			</motion.div>

			<SummaryTable />
		</div>
	);
}
