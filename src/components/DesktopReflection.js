import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserName } from "../store/userSlice";

import TerminalBar from "./TerminalBar";
import TerminalAutoTyping from "./TerminalAutoTyping";
import InputUserName from "./InputUserName";
import ManualSlider from "./ManualSlider";
import BtnAccept from "./BtnAccept";

import styles from "./DesktopReflection.module.scss";

export default function DesktopReflection() {
	const dispatch = useDispatch();
	const selectedAvatar = useSelector((store) => store.user.selectedAvatar);

	const [showInput, setShowInput] = useState(false);
	const [showMoreInfo, setShowMoreInfo] = useState(false);
	const [showSlider, setShowSlider] = useState(false);
	const [dispableInput, setDispableInput] = useState(false);
	const timerRef = useRef(null);


	useEffect(() => {
		const finishTyping = setTimeout(() => {
			setShowInput(true);
		}, 5500);

		return () => clearTimeout(finishTyping);
	}, []);

	const handleChange = (e) => {
		const value = e.target.value;
		dispatch(setUserName(value));

		//* reset timer block after any click letter/number on input
		if (timerRef.current) clearTimeout(timerRef.current);
		setDispableInput(false);

		// Lock input after 3 sec inaction
		timerRef.current = setTimeout(() => {
			setDispableInput(true);
		}, 3000);

		// if user type 3+ chars, show next part text
		if (value.length >= 3) {
			setTimeout(() => {
				setShowMoreInfo(true);
			}, 2200);
		}
	};

	useEffect(() => {
		if (showMoreInfo) {
			const timer = setTimeout(() => {
				setShowSlider(true);
			}, 5200);

			return () => clearTimeout(timer);
		}
	}, [showMoreInfo]);

	useEffect(() => {
		return () => clearTimeout(timerRef.current);
	}, []);

	return (
		<div className={styles.blackDesktop}>
			<TerminalBar />

			<TerminalAutoTyping>
				Wake up user... Will you repeat what your nickname was?
			</TerminalAutoTyping>
			{showInput && (
				<InputUserName
					onChange={handleChange}
					disabled={dispableInput}
				/>
			)}

			{showMoreInfo && (
				<TerminalAutoTyping>
					Will you remind me which avatar is yours?
				</TerminalAutoTyping>
			)}

			{showSlider && <ManualSlider />}
			{selectedAvatar && <BtnAccept />}

			<img
				className={styles.blackDesktop_img}
				src="img/DesktopFaceShadow.png"
				alt="man face reflection in black desktop"
			/>
		</div>
	);
}
