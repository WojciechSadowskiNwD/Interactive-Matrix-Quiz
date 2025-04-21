import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { setUserAvatar } from "../store/userSlice";
import styles from "./ManualSlider.module.scss";

const avatars = [
	"img/avatars/avatar_agent_1.webp",
	"img/avatars/avatar_agent_2.webp",
	"img/avatars/avatar_architect.webp",
	"img/avatars/avatar_guard_1.webp",
	"img/avatars/avatar_guard_2.webp",
	"img/avatars/avatar_india_woman.webp",
	"img/avatars/avatar_zion_man_1.webp",
	"img/avatars/avatar_zion_man_2.webp",
	"img/avatars/avatar_zion_man_3.webp",
	"img/avatars/avatar_zion_man_4.webp",
	"img/avatars/avatar_zion_woman_1.webp",
	"img/avatars/avatar_zion_woman_2.webp",
];

console.log(avatars.length);

function ManualSlider() {
	const dispatch = useDispatch();
	const selectedAvatar = useSelector((store)=> store.user.selectedAvatar);

	const [shiftWidth, setShiftWidth] = useState(0);
	const [index, setIndex] = useState(0);


	const handlePrev = () => {
		if (index > 0) {
			setIndex((i) => i - 1);
			setShiftWidth((prev) => prev - 200);
		}
	};
	const handleNext = () => {
		if (index < avatars.length - 1) {
			setIndex((i) => i + 1);
			setShiftWidth((prev) => prev + 200);
		}
	};

	return (
		<motion.div
			initial={{ opacity: 0, y: 15 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8, ease: "easeOut" }}
			className={styles.slider_wrapper}
		>
			<button
				className={`${styles.btn_nav} ${styles.btn_prev}`}
				onClick={handlePrev}
			>
				&#9664;
			</button>

			<div className={styles.slider_box}>
				<div
					className={styles.slider}
					style={{
						// transform: `translateX(-200px)`
						transform: `translateX(-${shiftWidth}px)`,
					}}
				>
					{avatars.map((avatar, i) => (
						<div
							className={styles.slider_item}
							key={i}
							onClick={() => dispatch(setUserAvatar(avatar))}
						>

							<div
								className={`${styles.item_shadow} ${
									selectedAvatar === avatar ? styles.selected : ""
								}`}
							></div>
							<img
								className={styles.item_img}
								src={avatar}
								alt={`avatar face number ${i}`}
							/>
						</div>
					))}
				</div>
			</div>

			<button
				className={`${styles.btn_nav} ${styles.btn_next}`}
				onClick={handleNext}
			>
				&#9654;
			</button>
		</motion.div>
	);
}

export default ManualSlider;
