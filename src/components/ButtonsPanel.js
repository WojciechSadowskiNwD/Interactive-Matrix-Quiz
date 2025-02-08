import { useEffect, useState } from "react";
import styles from "./ButtonsPanel.module.css";
import DecodeButton from "./DecodeButton";


export default function ButtonsPanel() {
	// const [isMounted, setIsMounted] = useState(false);

	// useEffect(() => {
	// 	const timer = setTimeout(() => {
	// 		setIsMounted(true);
	// 	}, 3000);

	// 	return () => clearTimeout(timer);
	// }, []);

	return (
		<div className={styles.buttonPanelContainer}>
			<DecodeButton>START</DecodeButton>
			<DecodeButton>SCORE Board</DecodeButton>
			<DecodeButton>ABOUT App</DecodeButton>
			<DecodeButton>ABOUT Dev</DecodeButton>
		</div>
	);
}
