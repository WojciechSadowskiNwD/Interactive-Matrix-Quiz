import { useEffect, useState } from "react";
import styles from './TerminalAutoTyping.module.scss';

const TerminalAutoTyping = ({ children }) => {
	const [displayedText, setDisplayedText] = useState("");
	const [showCursor, setShowCursor] = useState(true);
	const [startTyping, setStartTyping] = useState(false);

	useEffect(() => {
		const cursorBlink = setInterval(() => {
			setShowCursor((prev) => !prev);
		}, 500);

		const typingDelay = setTimeout(() => {
			setStartTyping(true);
		}, 2000);

		return () => {
			clearInterval(cursorBlink);
			clearTimeout(typingDelay);
		};
	}, []);


	useEffect(() => {
		if (startTyping && displayedText.length < children.length) {
			const typingInterval = setInterval(() => {
				setDisplayedText((prev) => children.slice(0, prev.length + 1));
			}, 50);
			return () => clearInterval(typingInterval);
		}
	}, [startTyping, displayedText, children]);

	return (
		<div className={styles.terminal}>
			{displayedText}
			{<span className={styles.cursor_box} />}
		</div>
	);
};

export default TerminalAutoTyping;