import TerminalAutoTyping from "./TerminalAutoTyping";
import styles from "./DesktopReflection.module.scss";

export default function DesktopReflection() {
	return (
		<div className={styles.blackDesktop}>
			<div className={styles.terminalContainer}>
				<TerminalAutoTyping>
					Wake up user... Will you repeat what your nickname was?
				</TerminalAutoTyping>
			</div>
			<img
				className={styles.blackDesktop_img}
				src="img/DesktopFace.png"
				alt="man face reflection in black desktop"
			/>
		</div>
	);
}

