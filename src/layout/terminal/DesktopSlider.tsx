// import { useEffect, useRef, useState, useMemo } from "react";
// import { useAppDispatch, useAppSelector } from "../../store/redux";
// import { setUserAvatar } from "../../store/userSlice";
// import { motion } from "framer-motion";
// import styles from "./ManualSlider.module.scss";

// const avatars = [
//   "img/avatars/avatar_1.webp",
//   "img/avatars/avatar_2.webp",
//   "img/avatars/avatar_3.webp",
//   "img/avatars/avatar_4.webp",
//   "img/avatars/avatar_5.webp",
//   "img/avatars/avatar_6.webp",
//   "img/avatars/avatar_7.webp",
//   "img/avatars/avatar_8.webp",
//   "img/avatars/avatar_9.webp",
//   "img/avatars/avatar_10.webp",
// ];

// export default function DesktopSlider() {
//   const dispatch = useAppDispatch();
//   const selectedAvatar = useAppSelector((s) => s.user.selectedAvatar);
//   const [index, setIndex] = useState(0);

//   const containerRef = useRef<HTMLDivElement | null>(null);
//   const itemRefs = useRef<HTMLDivElement[]>([]);

//   const cssVars = useMemo(
//     () =>
//       ({
//         "--gap": "80px",
//         "--item-w": "180px",
//         "--item-h": "180px",
//         "--ring": "10px",
//       } as React.CSSProperties),
//     []
//   );

//   const centerIndex = (i: number) => {
//     const container = containerRef.current;
//     const el = itemRefs.current[i];
//     if (!container || !el) return;

//     const itemCenter = el.offsetLeft + el.offsetWidth / 2;
//     const nextEl = itemRefs.current[i + 1];
//     if (nextEl) {
//       const nextCenter = nextEl.offsetLeft + nextEl.offsetWidth / 2;
//       const midPoint = (itemCenter + nextCenter) / 2;
//       const target = Math.max(0, midPoint - container.clientWidth / 2);
//       container.scrollTo({ left: target, behavior: "smooth" });
//     }
//   };

//   useEffect(() => {
//     centerIndex(index);
//   }, [index]);

//   const handlePrev = () => {
//     const prev = Math.max(0, index - 1);
//     setIndex(prev);
//     centerIndex(prev);
//   };

//   const handleNext = () => {
//     const next = Math.min(avatars.length - 2, index + 1);
//     setIndex(next);
//     centerIndex(next);
//   };

//   const handlePick = (i: number, avatar: string) => {
//     setIndex(i);
//     dispatch(setUserAvatar(avatar));
//     centerIndex(i);
//   };

//   return (
//     <motion.div
//       className={`${styles.slider_wrapper} ${styles.desktop}`}
//       style={cssVars}
//       initial={{ opacity: 0, y: 30 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 1, ease: "easeOut" }}
//     >
//       <motion.button
//         className={`${styles.btn_nav} ${styles.btn_prev}`}
//         onClick={handlePrev}
//       >
//         &#9664;
//       </motion.button>

//       <div className={styles.slider_box} ref={containerRef}>
//         <div className={styles.slider}>
//           {avatars.map((avatar, i) => (
//             <div
//               key={avatar}
//               className={styles.slider_item}
//               ref={(el) => {
//                 if (el) itemRefs.current[i] = el;
//               }}
//               onClick={() => handlePick(i, avatar)}
//             >
//               <div
//                 className={`${styles.item_shadow} ${
//                   selectedAvatar === avatar ? styles.selected : ""
//                 }`}
//               />
//               <img
//                 className={styles.item_img}
//                 src={avatar}
//                 alt={`User avatar ${i + 1}`}
//               />
//             </div>
//           ))}
//         </div>
//       </div>

//       <motion.button
//         className={`${styles.btn_nav} ${styles.btn_next}`}
//         onClick={handleNext}
//       >
//         &#9654;
//       </motion.button>
//     </motion.div>
//   );
// }



//old version

import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/redux";
import { setUserAvatar } from "../../store/userSlice";
import { motion } from "framer-motion";
import styles from "./DesktopSlider.module.scss";

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

// How many avatars do we have in the photo collection?
// console.log(avatars.length);

export default function DesktopSlider() {
	const dispatch = useAppDispatch();
	const selectedAvatar = useAppSelector((store) => store.user.selectedAvatar);

	const [shiftWidth, setShiftWidth] = useState<number>(0);
	const [shiftStep, setShiftStep] = useState<number>(200); //default value
	const [x, setX] = useState<number>(1); // value for function btn: handleNext
	const [index, setIndex] = useState<number>(0);

	useEffect(() => {
		const updateShiftStep = () => {
			if (window.innerWidth >= 992) {
				setShiftStep(190);
        setX(2)
			}
		};

		updateShiftStep();

		// listening change desktop view
		window.addEventListener("resize", updateShiftStep);
		return () => window.removeEventListener("resize", updateShiftStep);
	}, []);

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
					cursor: "none",
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
					cursor: "none",
				}}
				transition={{ type: "spring", stiffness: 600 }}
			>
				&#9654;
			</motion.button>
		</motion.div>
	);
}






// const updateShiftStep = () => {
// 			if (window.innerWidth === 360) {
// 				setShiftStep(200);
// 			} else if (window.innerWidth === 375) {
// 				setShiftStep(205);
// 				console.log("tick 375");
// 			} else if (window.innerWidth === 390) {
// 				setShiftStep(206);
// 				console.log("tick 390");
// 			} else if (window.innerWidth === 412) {
// 				setShiftStep(220);
// 			} else if (window.innerWidth === 576) {
// 				setShiftStep(220);
// 			} else if (window.innerWidth === 768) {
// 				setShiftStep(221);
// 			} else if (window.innerWidth >= 992) {
// 				setShiftStep(190);
// 				setX(2);
// 			}
// 		};