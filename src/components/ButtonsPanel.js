import { useEffect, useState } from "react";
import styles from "./ButtonsPanel.module.css";
import DecodeButton from "./DecodeButton";
import { Link } from "react-router-dom";

export default function ButtonsPanel() {
	const [mountedBtn, setMountedBtn] = useState(Array(4).fill(false));
	const [count, setCount] = useState(0);

	useEffect(() => {
		const timer = setTimeout(() => {
			if (count < mountedBtn.length) {
				setMountedBtn((prev) => {
					const newState = [...prev];
					newState[count] = true;
					return newState;
				});
				setCount((prev) => prev + 1);
			}
		}, 150);

		return () => clearTimeout(timer);
	}, [count]);

	return (
		<div className={styles.buttonPanelContainer}>
			{mountedBtn[0] && (
				<Link to="/">
					<DecodeButton>START</DecodeButton>
				</Link>
			)}
			{mountedBtn[1] && (
				<Link to="scoreBoard">
					<DecodeButton>SCORE Board</DecodeButton>
				</Link>
			)}
			{mountedBtn[2] && (
				<Link to="aboutApp">
					<DecodeButton>ABOUT App</DecodeButton>
				</Link>
			)}
			{mountedBtn[3] && (
				<Link to="aboutDev">
					<DecodeButton>ABOUT Dev</DecodeButton>
				</Link>
			)}
		</div>
	);
}
