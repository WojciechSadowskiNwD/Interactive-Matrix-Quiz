// import { useEffect, useRef, useState } from "react";
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

// export default function ManualSlider() {
//   const dispatch = useAppDispatch();
//   const selectedAvatar = useAppSelector((store) => store.user.selectedAvatar);

//   const [shiftWidth, setShiftWidth] = useState<number>(0);
//   const [shiftStep, setShiftStep] = useState<number>(0);
//   const [index, setIndex] = useState<number>(0);
//   const [visibleCount, setVisibleCount] = useState<number>(1);

//   const itemRef = useRef<HTMLDivElement | null>(null);
//   const containerRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     const updateSizes = () => {
//       if (itemRef.current && containerRef.current) {
//         const item = itemRef.current;
//         const style = window.getComputedStyle(item);
//         const margin =
//           parseInt(style.marginLeft) + parseInt(style.marginRight);
//         const fullWidth = item.offsetWidth + margin;
//         setShiftStep(fullWidth);

//         const containerWidth = containerRef.current.offsetWidth;
//         const count = Math.floor(containerWidth / fullWidth) || 1;
//         setVisibleCount(count);
//       }
//     };

//     updateSizes();
//     window.addEventListener("resize", updateSizes);
//     return () => window.removeEventListener("resize", updateSizes);
//   }, []);

//   const handlePrev = () => {
//     if (index > 0) {
//       setIndex((i) => i - 1);
//       setShiftWidth((prev) => prev - shiftStep);
//     }
//   };

//   const handleNext = () => {
//     if (index < avatars.length - visibleCount) {
//       setIndex((i) => i + 1);
//       setShiftWidth((prev) => prev + shiftStep);
//     }
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 15 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8, ease: "easeOut" }}
//       className={styles.slider_wrapper}
//     >
//       <motion.button
//         className={`${styles.btn_nav} ${styles.btn_prev}`}
//         onClick={handlePrev}
//         whileHover={{
//           scale: 1.1,
//           backgroundColor: "rgb(0, 80, 166)",
//           boxShadow: "0 0 15px rgb(0, 80, 166)",
//           cursor: "none",
//         }}
//         transition={{ type: "spring", stiffness: 600 }}
//       >
//         &#9664;
//       </motion.button>

//       <div className={styles.slider_box} ref={containerRef}>
//         <div
//           className={styles.slider}
//           style={{
//             transform: `translateX(-${shiftWidth}px)`,
//           }}
//         >
//           {avatars.map((avatar, i) => (
//             <div
//               className={styles.slider_item}
//               key={i}
//               ref={i === 0 ? itemRef : null}
//               onClick={() => dispatch(setUserAvatar(avatar))}
//             >
//               <div
//                 className={`${styles.item_shadow} ${
//                   selectedAvatar === avatar ? styles.selected : ""
//                 }`}
//               ></div>
//               <img
//                 className={styles.item_img}
//                 src={avatar}
//                 alt={`avatar face number ${i}`}
//               />
//             </div>
//           ))}
//         </div>
//       </div>

//       <motion.button
//         className={`${styles.btn_nav} ${styles.btn_next}`}
//         onClick={handleNext}
//         whileHover={{
//           scale: 1.1,
//           backgroundColor: "rgb(185, 0, 0)",
//           boxShadow: "0 0 15px rgb(185, 0, 0)",
//           cursor: "none",
//         }}
//         transition={{ type: "spring", stiffness: 600 }}
//       >
//         &#9654;
//       </motion.button>
//     </motion.div>
//   );
// }

// import { useEffect, useRef, useState } from "react";
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

// export default function ManualSlider() {
//   const dispatch = useAppDispatch();
//   const selectedAvatar = useAppSelector((store) => store.user.selectedAvatar);

//   const [shiftWidth, setShiftWidth] = useState<number>(0);
//   const [shiftStep, setShiftStep] = useState<number>(0);
//   const [index, setIndex] = useState<number>(0);
//   const [visibleCount, setVisibleCount] = useState<number>(1);

//   const itemRef = useRef<HTMLDivElement | null>(null);
//   const containerRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     const updateSizes = () => {
//   if (itemRef.current && containerRef.current) {
//     const item = itemRef.current;
//     const style = window.getComputedStyle(item);

//     const margin = parseFloat(style.marginLeft) + parseFloat(style.marginRight);
//     const fullWidth = item.offsetWidth + margin;

//     setShiftStep(fullWidth);

//     const containerWidth = containerRef.current.offsetWidth;
//     const count = Math.floor(containerWidth / fullWidth) || 1;
//     setVisibleCount(count);

//     // dodane: wycentrowanie startowe
//     const extraSpace = (containerWidth - count * fullWidth) / 2;
//     setShiftWidth(extraSpace > 0 ? extraSpace : 0);
//   }
// };

//     updateSizes();
//     window.addEventListener("resize", updateSizes);
//     return () => window.removeEventListener("resize", updateSizes);
//   }, []);

//   const handlePrev = () => {
//     if (index > 0) {
//       setIndex((i) => i - 1);
//       setShiftWidth((prev) => prev - shiftStep);
//     }
//   };

//   const handleNext = () => {
//     if (index < avatars.length - visibleCount) {
//       setIndex((i) => i + 1);
//       setShiftWidth((prev) => prev + shiftStep);
//     }
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 15 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8, ease: "easeOut" }}
//       className={styles.slider_wrapper}
//     >
//       <motion.button
//         className={`${styles.btn_nav} ${styles.btn_prev}`}
//         onClick={handlePrev}
//         whileHover={{
//           scale: 1.1,
//           backgroundColor: "rgb(0, 80, 166)",
//           boxShadow: "0 0 15px rgb(0, 80, 166)",
//           cursor: "none",
//         }}
//         transition={{ type: "spring", stiffness: 600 }}
//       >
//         &#9664;
//       </motion.button>

//       <div className={styles.slider_box} ref={containerRef}>
//         <div
//           className={styles.slider}
//           style={{
//             transform: `translateX(-${shiftWidth}px)`,
//           }}
//         >
//           {avatars.map((avatar, i) => (
//             <div
//               className={styles.slider_item}
//               key={i}
//               ref={i === 0 ? itemRef : null}
//               onClick={() => dispatch(setUserAvatar(avatar))}
//             >
//               <div
//                 className={`${styles.item_shadow} ${
//                   selectedAvatar === avatar ? styles.selected : ""
//                 }`}
//               ></div>
//               <img
//                 className={styles.item_img}
//                 src={avatar}
//                 alt={`avatar face number ${i}`}
//               />
//             </div>
//           ))}
//         </div>
//       </div>

//       <motion.button
//         className={`${styles.btn_nav} ${styles.btn_next}`}
//         onClick={handleNext}
//         whileHover={{
//           scale: 1.1,
//           backgroundColor: "rgb(185, 0, 0)",
//           boxShadow: "0 0 15px rgb(185, 0, 0)",
//           cursor: "none",
//         }}
//         transition={{ type: "spring", stiffness: 600 }}
//       >
//         &#9654;
//       </motion.button>
//     </motion.div>
//   );
// }

// import { useEffect, useMemo, useRef, useState, MutableRefObject } from "react";
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

// export default function ManualSlider() {
//   const dispatch = useAppDispatch();
//   const selectedAvatar = useAppSelector((s) => s.user.selectedAvatar);

//   // indeks aktualnie wyśrodkowanego elementu
//   const [index, setIndex] = useState(0);

//   // refs
//   const containerRef = useRef<HTMLDivElement | null>(null);
//   // referencje do poszczególnych itemów
//   const itemRefs = useRef<HTMLDivElement[]>([]) as MutableRefObject<HTMLDivElement[]>;

//   // gap i szerokość itemu kontrolujemy przez zmienne CSS — łatwiej potem dopasować w SCSS
//   // (możesz je zmienić jeśli chcesz inne proporcje)
//   const cssVars = useMemo(
//     () => ({
//       // odstęp między avatarami zależny od szerokości viewportu
//       // (na bardzo wąskich ekranach ~16px, rośnie do ~32px)
//       "--gap": "clamp(16px, 4vw, 32px)",
//       // szerokość avatara zależna od width kontenera/ekranu:
//       // minimum 140px, zwykle ~70vw na mobile, max 220px
//       "--item-w": "clamp(140px, 70vw, 220px)",
//       // wysokość koła (proporcjonalnie do width)
//       "--item-h": "clamp(140px, 70vw, 220px)",
//       // grubość obramowania zaznaczenia responsywna
//       "--ring": "clamp(8px, 2.5vw, 12px)",
//     } as React.CSSProperties),
//     []
//   );

//   // precyzyjne centrowanie i-tego elementu względem kontenera
//   const centerIndex = (i: number, smooth: boolean) => {
//     const c = containerRef.current;
//     const el = itemRefs.current[i];
//     if (!c || !el) return;

//     // Pozycja środka elementu względem scrollowanego kontenera
//     const itemCenter = el.offsetLeft + el.offsetWidth / 2;
//     const target = Math.max(0, itemCenter - c.clientWidth / 2);

//     c.scrollTo({
//       left: target,
//       behavior: smooth ? "smooth" : "auto",
//     });
//   };

//   // na starcie oraz przy zmianie rozmiaru ekranu centrowanie aktywnego elementu
//   useEffect(() => {
//     const onResize = () => centerIndex(index, false);
//     // initial center
//     centerIndex(0, false);

//     // ResizeObserver lepiej łapie zmiany szerokości kontenera niż samo "resize"
//     let ro: ResizeObserver | null = null;
//     if (containerRef.current && "ResizeObserver" in window) {
//       ro = new ResizeObserver(() => onResize());
//       ro.observe(containerRef.current);
//     } else {
//       window.addEventListener("resize", onResize);
//     }
//     return () => {
//       if (ro) ro.disconnect();
//       else window.removeEventListener("resize", onResize);
//     };
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   const handlePrev = () => {
//     const next = Math.max(0, index - 1);
//     setIndex(next);
//     centerIndex(next, true);
//   };

//   const handleNext = () => {
//     const next = Math.min(avatars.length - 1, index + 1);
//     setIndex(next);
//     centerIndex(next, true);
//   };

//   const handlePick = (i: number, avatar: string) => {
//     setIndex(i);
//     dispatch(setUserAvatar(avatar));
//     centerIndex(i, true);
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 15 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6, ease: "easeOut" }}
//       className={styles.slider_wrapper}
//       style={cssVars}
//     >
//       <motion.button
//         className={`${styles.btn_nav} ${styles.btn_prev}`}
//         onClick={handlePrev}
//         whileHover={{
//           scale: 1.06,
//           backgroundColor: "rgb(0, 80, 166)",
//           boxShadow: "0 0 15px rgb(0, 80, 166)",
//           cursor: "pointer",
//         }}
//         transition={{ type: "spring", stiffness: 600 }}
//         aria-label="Poprzedni avatar"
//       >
//         &#9664;
//       </motion.button>

//       <div className={styles.slider_box} ref={containerRef}>
//         <div className={styles.slider} aria-live="polite">
//           {avatars.map((avatar, i) => (
//             <div
//               key={avatar}
//               className={styles.slider_item}
//               ref={(el) => {
//                 if (el) itemRefs.current[i] = el;
//               }}
//               role="button"
//               tabIndex={0}
//               onClick={() => handlePick(i, avatar)}
//               onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && handlePick(i, avatar)}
//               aria-label={`Wybierz avatar ${i + 1} z ${avatars.length}`}
//               aria-current={i === index}
//             >
//               <div
//                 className={`${styles.item_shadow} ${
//                   selectedAvatar === avatar ? styles.selected : ""
//                 }`}
//               />
//               <img className={styles.item_img} src={avatar} alt={`Avatar ${i + 1}`} />
//             </div>
//           ))}
//         </div>
//       </div>

//       <motion.button
//         className={`${styles.btn_nav} ${styles.btn_next}`}
//         onClick={handleNext}
//         whileHover={{
//           scale: 1.06,
//           backgroundColor: "rgb(185, 0, 0)",
//           boxShadow: "0 0 15px rgb(185, 0, 0)",
//           cursor: "pointer",
//         }}
//         transition={{ type: "spring", stiffness: 600 }}
//         aria-label="Następny avatar"
//       >
//         &#9654;
//       </motion.button>
//     </motion.div>
//   );
// }

// import { useEffect, useRef, useState, MutableRefObject, useMemo } from "react";
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

// export default function ManualSlider() {
//   const dispatch = useAppDispatch();
//   const selectedAvatar = useAppSelector((s) => s.user.selectedAvatar);

//   const [index, setIndex] = useState(0);
//   const containerRef = useRef<HTMLDivElement | null>(null);
//   const itemRefs = useRef<HTMLDivElement[]>([]) as MutableRefObject<HTMLDivElement[]>;

//   // Zmienne CSS – mobilne domyślne
//   const cssVars = useMemo(
//     () =>
//       ({
//         "--gap": "clamp(60px, 40vw, 200px)", // mobilne odstępy
//         "--item-w": "clamp(120px, 60vw, 160px)",
//         "--item-h": "clamp(120px, 60vw, 160px)",
//         "--ring": "clamp(6px, 2vw, 10px)",
//         "--side-padding": "0px",
//       } as React.CSSProperties),
//     []
//   );

//   const centerIndex = (i: number, smooth: boolean) => {
//     const c = containerRef.current;
//     const el = itemRefs.current[i];
//     if (!c || !el) return;
//     const itemCenter = el.offsetLeft + el.offsetWidth / 2;
//     const target = Math.max(0, itemCenter - c.clientWidth / 2);
//     c.scrollTo({ left: target, behavior: smooth ? "smooth" : "auto" });
//   };

//   useEffect(() => {
//     const onResize = () => {
//       centerIndex(index, false);

//       // tylko dla mobile – dynamiczne paddingi
//       if (containerRef.current && itemRefs.current[0]) {
//         if (window.innerWidth < 768) {
//           const cW = containerRef.current.clientWidth;
//           const iW = itemRefs.current[0].offsetWidth;
//           const pad = (cW - iW) / 2;
//           containerRef.current.style.setProperty("--side-padding", `${pad}px`);
//         } else {
//           containerRef.current.style.setProperty("--side-padding", `0px`);
//         }
//       }
//     };

//     onResize();

//     let ro: ResizeObserver | null = null;
//     if (containerRef.current && "ResizeObserver" in window) {
//       ro = new ResizeObserver(() => onResize());
//       ro.observe(containerRef.current);
//     } else {
//       window.addEventListener("resize", onResize);
//     }
//     return () => {
//       if (ro) ro.disconnect();
//       else window.removeEventListener("resize", onResize);
//     };
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [index]);

//   const handlePrev = () => {
//     const next = Math.max(0, index - 1);
//     setIndex(next);
//     centerIndex(next, true);
//   };

//   const handleNext = () => {
//     const next = Math.min(avatars.length - 1, index + 1);
//     setIndex(next);
//     centerIndex(next, true);
//   };

//   const handlePick = (i: number, avatar: string) => {
//     setIndex(i);
//     dispatch(setUserAvatar(avatar));
//     centerIndex(i, true);
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 15 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6, ease: "easeOut" }}
//       className={styles.slider_wrapper}
//       style={cssVars}
//     >
//       <motion.button
//         className={`${styles.btn_nav} ${styles.btn_prev}`}
//         onClick={handlePrev}
//         whileHover={{
//           scale: 1.06,
//           backgroundColor: "rgb(0, 80, 166)",
//           boxShadow: "0 0 15px rgb(0, 80, 166)",
//         }}
//         transition={{ type: "spring", stiffness: 600 }}
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
//               <img className={styles.item_img} src={avatar} alt={`Avatar ${i + 1}`} />
//             </div>
//           ))}
//         </div>
//       </div>

//       <motion.button
//         className={`${styles.btn_nav} ${styles.btn_next}`}
//         onClick={handleNext}
//         whileHover={{
//           scale: 1.06,
//           backgroundColor: "rgb(185, 0, 0)",
//           boxShadow: "0 0 15px rgb(185, 0, 0)",
//         }}
//         transition={{ type: "spring", stiffness: 600 }}
//       >
//         &#9654;
//       </motion.button>
//     </motion.div>
//   );
// }





// DEluxe ver.
// import { useEffect, useRef, useState, useMemo } from "react";
// import { useAppDispatch, useAppSelector } from "../../store/redux";
// import { setUserAvatar } from "../../store/userSlice";
// import { motion } from "framer-motion";
// import styles from "./ManualSlider.module.scss";

// const avatars = [
// 	"img/avatars/avatar_1.webp",
// 	"img/avatars/avatar_2.webp",
// 	"img/avatars/avatar_3.webp",
// 	"img/avatars/avatar_4.webp",
// 	"img/avatars/avatar_5.webp",
// 	"img/avatars/avatar_6.webp",
// 	"img/avatars/avatar_7.webp",
// 	"img/avatars/avatar_8.webp",
// 	"img/avatars/avatar_9.webp",
// 	"img/avatars/avatar_10.webp",
// ];

// export default function ManualSlider() {
// 	const dispatch = useAppDispatch();
// 	const selectedAvatar = useAppSelector((s) => s.user.selectedAvatar);
// 	const [index, setIndex] = useState(0);

// 	const containerRef = useRef<HTMLDivElement | null>(null);
// 	const itemRefs = useRef<HTMLDivElement[]>([]);

// 	const cssVars = useMemo(
// 		() =>
// 			({
// 				"--gap": "clamp(60px, 40vw, 200px)",
// 				"--item-w": "clamp(120px, 60vw, 160px)",
// 				"--item-h": "clamp(120px, 60vw, 160px)",
// 				"--ring": "clamp(6px, 2vw, 10px)",
// 				"--side-padding": "0px",
// 			} as React.CSSProperties),
// 		[]
// 	);

// 	const centerIndex = (i: number) => {
// 		const container = containerRef.current;
// 		const el = itemRefs.current[i];
// 		if (!container || !el) return;

// 		//tu liczymy srodek avatara
// 		const itemCenter = el.offsetLeft + el.offsetWidth / 2;
// 		const target = Math.max(0, itemCenter - container.clientWidth / 2);
// 		container.scrollTo({ left: target, behavior: "smooth" });
// 	};

// 	useEffect(() => {
// 		const onResize = () => {
// 			centerIndex(index);

// 			// tylko dla mobile – padding boczny dla wyśrodkowania
// 			if (containerRef.current && itemRefs.current[0]) {
// 				if (window.innerWidth < 768) {
// 					const cW = containerRef.current.clientWidth;
// 					const iW = itemRefs.current[0].offsetWidth;
// 					//calculate empty space
// 					const pad = (cW - iW) / 2;

// 					//add side padding only in mobile view
// 					containerRef.current.style.setProperty("--side-padding", `${pad}px`);
// 				} else {
// 					//** here in esktops we don't have side padding around avatar
// 					containerRef.current.style.setProperty("--side-padding", `0px`);
// 				}
// 			}
// 		};

// 		onResize();

// 		let ro: ResizeObserver | null = null;
// 		if (containerRef.current && "ResizeObserver" in window) {
// 			ro = new ResizeObserver(() => onResize());
// 			ro.observe(containerRef.current);
// 		} else {
// 			window.addEventListener("resize", onResize);
// 		}
// 		return () => {
// 			if (ro) ro.disconnect();
// 			else window.removeEventListener("resize", onResize);
// 		};
// 	}, [index]);

// 	const handlePrev = () => {
// 		const prev = Math.max(0, index - 1);
// 		setIndex(prev);
// 		centerIndex(prev);
// 	};

// 	const handleNext = () => {
// 		const next = Math.min(avatars.length - 1, index + 1);
// 		setIndex(next);
// 		centerIndex(next);
// 	};

// 	const handlePick = (i: number, avatar: string) => {
// 		setIndex(i);
// 		dispatch(setUserAvatar(avatar));
// 		centerIndex(i);
// 	};

// 	return (
// 		<motion.div
// 			initial={{ opacity: 0, y: 30 }}
// 			animate={{ opacity: 1, y: 0 }}
// 			transition={{ duration: 1, ease: "easeOut" }}
// 			className={styles.slider_wrapper}
// 			style={cssVars}
// 		>
// 			<motion.button
// 				className={`${styles.btn_nav} ${styles.btn_prev}`}
// 				onClick={handlePrev}
// 				whileHover={{
// 					scale: 1.1,
// 					backgroundColor: "rgb(0, 80, 166)",
// 					boxShadow: "0 0 15px rgb(0, 80, 166)",
// 					cursor: "pointer",
// 				}}
// 				transition={{ type: "spring", stiffness: 600 }}
// 			>
// 				&#9664;
// 			</motion.button>

// 			<div className={styles.slider_box} ref={containerRef}>
// 				<div className={styles.slider}>
// 					{avatars.map((avatar, i) => (
// 						<div
// 							key={avatar}
// 							className={styles.slider_item}
// 							ref={(el) => {
// 								if (el) itemRefs.current[i] = el;
// 							}}
// 							onClick={() => handlePick(i, avatar)}
// 						>
// 							<div
// 								className={`${styles.item_shadow} ${
// 									selectedAvatar === avatar ? styles.selected : ""
// 								}`}
// 							/>
// 							<img
// 								className={styles.item_img}
// 								src={avatar}
// 								alt={`User avatar ${i + 1}`}
// 							/>
// 						</div>
// 					))}
// 				</div>
// 			</div>

// 			<motion.button
// 				className={`${styles.btn_nav} ${styles.btn_next}`}
// 				onClick={handleNext}
// 				whileHover={{
// 					scale: 1.1,
// 					backgroundColor: "rgb(185, 0, 0)",
// 					boxShadow: "0 0 15px rgb(185, 0, 0)",
// 					cursor: "pointer",
// 				}}
// 				transition={{ type: "spring", stiffness: 600 }}
// 			>
// 				&#9654;
// 			</motion.button>
// 		</motion.div>
// 	);
// }



import { useEffect, useState } from "react";
import MobileSlider from "./MobileSlider";
import DesktopSlider from "./DesktopSlider";

export default function ManualSlider() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 992);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile ? <MobileSlider /> : <DesktopSlider />;
}