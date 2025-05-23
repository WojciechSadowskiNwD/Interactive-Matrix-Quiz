import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { setUserAvatar } from "../store/userSlice";
import styles from "./ManualSlider.module.scss";

// było 12 wcześniej
const avatars = [
	"img/avatars/avatar_1.webp",
	"img/avatars/avatar_2.webp",
	"img/avatars/avatar_3.webp",
	"img/avatars/avatar_4.webp",
	"img/avatars/avatar_5.webp",
	"img/avatars/avatar_6.webp",
	"img/avatars/avatar_7.webp",
	"img/avatars/avatar_8.webp",
	"img/avatars/avatar_9.webp",
	"img/avatars/avatar_10.webp",
];


// ile mamy avatarów w kolekcji foto?
console.log(avatars.length);



function ManualSlider() {
	const dispatch = useDispatch();
	const selectedAvatar = useSelector((store) => store.user.selectedAvatar);

	const [shiftWidth, setShiftWidth] = useState(0);
	const [shiftStep, setShiftStep] = useState(200); //default value
	const [x, setX] = useState(1); // value for function btn: handleNext

	useEffect(() => {
		const updateShiftStep = () => {
			if (window.innerWidth < 375) {
				setShiftStep(200);
			} else if (window.innerWidth === 375) {
				setShiftStep(205);
			} else if (window.innerWidth === 412) {
				setShiftStep(215);
			} else if(window.innerWidth >= 992) {
				// console.log("obecna szerokość: 992px");
				setShiftStep(190);
				setX(2);
			}
		};
		updateShiftStep();

		// listening change desktop view
		window.addEventListener("resize", updateShiftStep);
		return () => window.removeEventListener("resize", updateShiftStep);
	}, []);

	const [index, setIndex] = useState(0);

	const handlePrev = () => {
		if (index > 0) {
			setIndex((i) => i - 1);
			setShiftWidth((prev) => prev - shiftStep);
		}
	};
	const handleNext = () => {
		if (index < avatars.length - x) {
			setIndex((i) => i + 1);
			setShiftWidth((prev) => prev + shiftStep);
		}
	};

	return (
		<motion.div
			initial={{ opacity: 0, y: 15 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8, ease: "easeOut" }}
			className={styles.slider_wrapper}
		>
			<motion.button
				className={`${styles.btn_nav} ${styles.btn_prev}`}
				onClick={handlePrev}
				whileHover={{
					scale: 1.1,
					backgroundColor: "rgb(0, 80, 166)",
					boxShadow: "0 0 15px rgb(0, 80, 166)",
					cursor: "none"
				}}
				transition={{ type: "spring", stiffness: 600 }}
			>
				&#9664;
			</motion.button>

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

			<motion.button
				className={`${styles.btn_nav} ${styles.btn_next}`}
				onClick={handleNext}
				whileHover={{
					scale: 1.1,
					backgroundColor: "rgb(185, 0, 0)",
					boxShadow: "0 0 15px rgb(185, 0, 0)",
					cursor: "none"
				}}
				transition={{ type: "spring", stiffness: 600 }}
			>
				&#9654;
			</motion.button>
		</motion.div>
	);
}

export default ManualSlider;
