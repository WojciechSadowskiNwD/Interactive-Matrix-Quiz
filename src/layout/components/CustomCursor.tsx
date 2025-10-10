import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/redux";
import {
	changePosition,
	toggleActive,
	toggleHoveringOnBtn,
} from "../../store/cursorSlice";
import { motion } from "framer-motion";
import styles from "./CustomCursor.module.scss";

export default function CustomCursor() {
	const dispatch = useAppDispatch();
	const { position, isHoveringBtn } = useAppSelector((store) => store.cursor);

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			dispatch(changePosition({ x: e.clientX, y: e.clientY }));
		};
		const initPosition = (e: MouseEvent) => {
			dispatch(changePosition({ x: e.clientX, y: e.clientY }));
			window.removeEventListener("mousemove", initPosition);
		};

		window.addEventListener("mousemove", initPosition);
		window.addEventListener("mousemove", handleMouseMove);

		const handleMouseEnter = () => dispatch(toggleHoveringOnBtn(true)); //change cursor on white
		const handleMouseLeave = () => dispatch(toggleHoveringOnBtn(false));

		const handleClickBtn = (e: MouseEvent) => {
			dispatch(toggleHoveringOnBtn(false)); //change cursor on green
			dispatch(toggleActive()); //unmound cursor
		};

		// Catch all the buttons to listen them, to animate the cursor when user hover on and leave the selected button
		const buttons = document.querySelectorAll("button");
		buttons.forEach((btn) => {
			btn.addEventListener("mouseenter", handleMouseEnter);
			btn.addEventListener("mouseleave", handleMouseLeave);
			btn.addEventListener("click", handleClickBtn);
		});

		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
			window.removeEventListener("mousemove", initPosition);

			buttons.forEach((btn) => {
				btn.removeEventListener("mouseenter", handleMouseEnter);
				btn.removeEventListener("mouseleave", handleMouseLeave);
				btn.removeEventListener("click", handleClickBtn);
			});
		};
	}, [dispatch]);

	return (
		<motion.div
			className={styles.customCursor}
			style={{
				left: `${position.x}px`,
				top: `${position.y}px`,
			}}
			animate={{
				borderLeftColor: isHoveringBtn ? "#ffffff" : "#00ff00",
				filter: isHoveringBtn
					? "drop-shadow(0 0 5px white) drop-shadow(0 0 10px white)"
					: "drop-shadow(0 0 5px white) drop-shadow(0 0 10px #00ff00)",
			}}
			transition={{ duration: 0.4, ease: "easeInOut" }}
		></motion.div>
	);
}
