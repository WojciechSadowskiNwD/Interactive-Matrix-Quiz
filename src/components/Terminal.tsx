import { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/redux";
import { setUserName } from "../store/userSlice";
import TerminalBar from "./TerminalBar";
import {TerminalAutoTyping} from "./TerminalAutoTyping";
import { InputUserName } from "./InputUserName";
import ManualSlider from "./ManualSlider";
import BtnAccept from "./BtnAccept";

function Terminal() {
	const [showInput, setShowInput] = useState<boolean>(false);
	const [showMoreInfo, setShowMoreInfo] = useState<boolean>(false);
	const [showSlider, setShowSlider] = useState<boolean>(false);
	const [disableInput, setDisableInput] = useState<boolean>(false);

	const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
	const dispatch = useAppDispatch();
	const selectedAvatar = useAppSelector((store) => store.user.selectedAvatar);

	useEffect(() => {
		const finishTyping = setTimeout(() => {
			setShowInput(true);
		}, 5500);

		return () => clearTimeout(finishTyping);
	}, []);

	useEffect(() => {
		if (showMoreInfo) {
			const timer = setTimeout(() => {
				setShowSlider(true);
			}, 5200);

			return () => clearTimeout(timer);
		}
	}, [showMoreInfo]);

	useEffect(() => {
		return () => {
			if (timerRef.current) clearTimeout(timerRef.current);
		};
	}, []);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		dispatch(setUserName(value));

		//* reset timer block after any click letter/number on input
		if (timerRef.current) clearTimeout(timerRef.current);
		setDisableInput(false);

		// Lock input after 3 sec inaction
		timerRef.current = setTimeout(() => {
			setDisableInput(true);
		}, 3000);

		// if user type 3+ chars, show next part text
		if (value.length >= 3) {
			setTimeout(() => {
				setShowMoreInfo(true);
			}, 2200);
		}
	};

	return (
		<>
			<TerminalBar />
			<TerminalAutoTyping>
				Wake up user... Will you repeat what your nickname was?
			</TerminalAutoTyping>
			{showInput && (
				<InputUserName onChange={handleChange} disabled={disableInput} />
			)}

			{showMoreInfo && (
				<TerminalAutoTyping>
					Will you remind me which avatar is yours?
				</TerminalAutoTyping>
			)}
			{showSlider && <ManualSlider />}
			{selectedAvatar && <BtnAccept />}
		</>
	);
}

export default Terminal;