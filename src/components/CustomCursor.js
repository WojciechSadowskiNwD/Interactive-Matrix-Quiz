import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./CustomCursor.module.scss";

export default function CustomCursor({ onWhereIsCursor, onActiveCursor }) {
	const [position, setPosition] = useState({ x: 0, y: 0 });
	const [isHoveringBtn, setIsHoveringBtn] = useState(false);

	useEffect(() => {
		const handleMouseMove = (e) => {
			setPosition({ x: e.clientX, y: e.clientY });
		};

        const initializedPosition =(e)=>{
            setPosition({x: e.clientX, y: e.clientY});
            window.removeEventListener("mousemove", initializedPosition);
        }

        window.addEventListener("mousemove", initializedPosition);
        window.addEventListener("mousemove", handleMouseMove);

		const handleMouseEnter = () => setIsHoveringBtn(true); //change kursor on white
		const handleMouseLeave = () => setIsHoveringBtn(false);

		const handleClickBtn = (e) => {
			setIsHoveringBtn(false); //change cursor on green
			onActiveCursor(false);

			const action = e.target.dataset.action;

			if (action === "goToSubPage") {
				onWhereIsCursor((curr) => (curr = "goToSubPage"));
			} else if (action === "goBack") {
				onWhereIsCursor((curr) => (curr = "backToOptions"));
			}
		};

		// Catch all the buttons to listen them, to animate the cursor when user hover on and off the selected button
		const buttons = document.querySelectorAll("button");
		buttons.forEach((btn) => {
			btn.addEventListener("mouseenter", handleMouseEnter);
			btn.addEventListener("mouseleave", handleMouseLeave);
			btn.addEventListener("click", handleClickBtn);
		});

		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
			window.removeEventListener("mousemove", initializedPosition);
			buttons.forEach((btn) => {
				btn.removeEventListener("mouseenter", handleMouseEnter);
				btn.removeEventListener("mouseleave", handleMouseLeave);
				btn.removeEventListener("click", handleClickBtn);
			});
		};
	}, [onWhereIsCursor, onActiveCursor]);

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