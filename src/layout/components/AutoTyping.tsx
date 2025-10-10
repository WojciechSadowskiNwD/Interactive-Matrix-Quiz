import { FC, useEffect, useState } from "react";
import styles from "./AutoTyping.module.scss";

type Props = {
	children: string;
	customFontSize?: string;
};

export const AutoTyping: FC<Props> = ({
	children,
	customFontSize = "",
}) => {
	const [displayedText, setDisplayedText] = useState<string>("");
	const [showCursor, setShowCursor] = useState<boolean>(true);
	const [startTyping, setStartTyping] = useState<boolean>(false);

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
			<em className={customFontSize || styles.displayedText}>
				{displayedText}
			</em>
			{<span className={styles.cursor_box} />}
		</div>
	);
};