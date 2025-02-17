import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DecodeButton from "./DecodeButton";
import styles from "./ButtonsPanel.module.scss";

const buttons = [
	{path: "/", label: "START"},
	{path: "scoreBoard", label: "SCORE Board"},
	{path: "aboutApp", label: "ABOUT App"},
	{path: "aboutDev", label: "ABOUT Dev"},
];

export default function ButtonsPanel() {
	const [mountedBtn, setMountedBtn] = useState({});


	useEffect(()=>{
		 if(Object.keys(mountedBtn).length >= buttons.length) return;

		const timer = setTimeout(()=>{
			setMountedBtn((prev)=> ({
				...prev,
				[Object.keys(prev).length]: true,
			}));
		}, 150);
		
		return ()=> clearTimeout(timer);
	},[mountedBtn])

	return (
		<div className={styles.buttonPanelContainer}>

			{buttons.map(({path, label},index) =>
				mountedBtn[index] ? (
					<Link to={path} key={path}>
						<DecodeButton>{label}</DecodeButton>
					</Link>
					) : null
				)
			}
		</div>
	);
}