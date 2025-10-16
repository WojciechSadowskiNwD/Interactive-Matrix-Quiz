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

// export default function MobileSlider() {
//   const dispatch = useAppDispatch();
//   const selectedAvatar = useAppSelector((s) => s.user.selectedAvatar);
//   const [index, setIndex] = useState(0);

//   const containerRef = useRef<HTMLDivElement | null>(null);
//   const itemRefs = useRef<HTMLDivElement[]>([]);

//   const cssVars = useMemo(
//     () =>
//       ({
//         "--gap": "clamp(60px, 40vw, 200px)",
//         "--item-w": "clamp(120px, 60vw, 160px)",
//         "--item-h": "clamp(120px, 60vw, 160px)",
//         "--ring": "clamp(6px, 2vw, 10px)",
//       } as React.CSSProperties),
//     []
//   );

//   const centerIndex = (i: number) => {
//     const container = containerRef.current;
//     const el = itemRefs.current[i];
//     if (!container || !el) return;

//     const itemCenter = el.offsetLeft + el.offsetWidth / 2;
//     const target = Math.max(0, itemCenter - container.clientWidth / 2);
//     container.scrollTo({ left: target, behavior: "smooth" });
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
//     const next = Math.min(avatars.length - 1, index + 1);
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
//       className={styles.slider_wrapper}
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


import { useEffect, useRef, useState, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "../../store/redux";
import { setUserAvatar } from "../../store/userSlice";
import { motion } from "framer-motion";
import styles from "./MobileSlider.module.scss";

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

export default function ManualSlider() {
	const dispatch = useAppDispatch();
	const selectedAvatar = useAppSelector((s) => s.user.selectedAvatar);
	const [index, setIndex] = useState(0);

	const containerRef = useRef<HTMLDivElement | null>(null);
	const itemRefs = useRef<HTMLDivElement[]>([]);

	const cssVars = useMemo(
		() =>
			({
				"--gap": "clamp(60px, 40vw, 200px)",
				"--item-w": "clamp(120px, 60vw, 160px)",
				"--item-h": "clamp(120px, 60vw, 160px)",
				"--ring": "clamp(6px, 2vw, 10px)",
				"--side-padding": "0px",
			} as React.CSSProperties),
		[]
	);

	const centerIndex = (i: number) => {
		const container = containerRef.current;
		const el = itemRefs.current[i];
		if (!container || !el) return;

		//tu liczymy srodek avatara
		const itemCenter = el.offsetLeft + el.offsetWidth / 2;
		const target = Math.max(0, itemCenter - container.clientWidth / 2);
		container.scrollTo({ left: target, behavior: "smooth" });
	};

	useEffect(() => {
		const onResize = () => {
			centerIndex(index);

			// tylko dla mobile – padding boczny dla wyśrodkowania
			if (containerRef.current && itemRefs.current[0]) {
				if (window.innerWidth <= 768) {
					const cW = containerRef.current.clientWidth;
					const iW = itemRefs.current[0].offsetWidth;
					//calculate empty space
					const pad = (cW - iW) / 2;

					//add side padding only in mobile view
					containerRef.current.style.setProperty("--side-padding", `${pad}px`);
				} else {
					console.log("error in mobileSlider code!");
				}
			}
		};

		onResize();

		let ro: ResizeObserver | null = null;
		if (containerRef.current && "ResizeObserver" in window) {
			ro = new ResizeObserver(() => onResize());
			ro.observe(containerRef.current);
		} else {
			window.addEventListener("resize", onResize);
		}
		return () => {
			if (ro) ro.disconnect();
			else window.removeEventListener("resize", onResize);
		};
	}, [index]);

	const handlePrev = () => {
		const prev = Math.max(0, index - 1);
		setIndex(prev);
		centerIndex(prev);
	};

	const handleNext = () => {
		const next = Math.min(avatars.length - 1, index + 1);
		setIndex(next);
		centerIndex(next);
	};

	const handlePick = (i: number, avatar: string) => {
		setIndex(i);
		dispatch(setUserAvatar(avatar));
		centerIndex(i);
	};

	return (
		<motion.div
			initial={{ opacity: 0, y: 30 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 1, ease: "easeOut" }}
			className={styles.slider_wrapper}
			style={cssVars}
		>
			<motion.button
				className={`${styles.btn_nav} ${styles.btn_prev}`}
				onClick={handlePrev}
				whileHover={{
					scale: 1.1,
					backgroundColor: "rgb(0, 80, 166)",
					boxShadow: "0 0 15px rgb(0, 80, 166)",
					cursor: "pointer",
				}}
				transition={{ type: "spring", stiffness: 600 }}
			>
				&#9664;
			</motion.button>

			<div className={styles.slider_box} ref={containerRef}>
				<div className={styles.slider}>
					{avatars.map((avatar, i) => (
						<div
							key={avatar}
							className={styles.slider_item}
							ref={(el) => {
								if (el) itemRefs.current[i] = el;
							}}
							onClick={() => handlePick(i, avatar)}
						>
							<div
								className={`${styles.item_shadow} ${
									selectedAvatar === avatar ? styles.selected : ""
								}`}
							/>
							<img
								className={styles.item_img}
								src={avatar}
								alt={`User avatar ${i + 1}`}
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
					cursor: "pointer",
				}}
				transition={{ type: "spring", stiffness: 600 }}
			>
				&#9654;
			</motion.button>
		</motion.div>
	);
}