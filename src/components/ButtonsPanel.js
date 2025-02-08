import { useEffect, useState } from "react";
import styles from "./ButtonsPanel.module.css";
import DecodeButton from "./DecodeButton";


export default function ButtonsPanel() {
	const [mountedBtn, setMountedBtn] = useState(
		Array(4).fill(false)
	);
	const [count, setCount] = useState(0);
	

	useEffect(()=>{

		const timer = setTimeout(()=>{
			if(count<mountedBtn.length){
				setMountedBtn((prev)=>{
					const newState = [...prev];
					newState[count] = true;
					return newState;
				})
				setCount((prev) => prev + 1);
			}
		},150);

		return ()=>clearTimeout(timer);


	},[count])

	return (
		<div className={styles.buttonPanelContainer}>
			{mountedBtn[0] && <DecodeButton>START</DecodeButton>}
			{mountedBtn[1] && <DecodeButton>SCORE Board</DecodeButton>}
			{mountedBtn[2] && <DecodeButton>ABOUT App</DecodeButton>}
			{mountedBtn[3] && <DecodeButton>ABOUT Dev</DecodeButton>}
		</div>
	);
}
