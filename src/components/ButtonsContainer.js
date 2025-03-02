import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { changeActiveComponent } from "../store/uiSlice";
import DecodeButton from "./DecodeButton";
import styles from "./ButtonsContainer.module.scss";

const buttons = [
	{ key: "start", label: "START", path: "/enterTheQuiz" },
	{ key: "scoreBoard", label: "SCORE Board" },
	{ key: "aboutApp", label: "ABOUT App" },
	{ key: "aboutDev", label: "ABOUT Dev" },
];

export default function ButtonsContainer() {
	const dispatch = useDispatch;
	const [mountedBtn, setMountedBtn] = useState({});

	useEffect(() => {
		if (Object.keys(mountedBtn).length >= buttons.length) return;

		const timer = setTimeout(() => {
			setMountedBtn((prev) => ({
				...prev,
				[Object.keys(prev).length]: true,
			}));
		}, 150);

		return () => clearTimeout(timer);
	}, [mountedBtn]);

	return (
		<div className={styles.buttonsContainer}>
			{buttons.map(({ key, label, path }, index) =>
				mountedBtn[index] ? (
					path ? (
						<Link to={path} key={key}>
							<button className={styles.btn} data-action="goToSubPage">
								<DecodeButton>{label}</DecodeButton>
							</button>
						</Link>
					) : (
						<button
							className={styles.btn}
							data-action="goToSubPage"
							key={key}
							onClick={() => dispatch(changeActiveComponent(key))}
						>
							<DecodeButton>{label}</DecodeButton>
						</button>
					)
				) : null
			)}
		</div>
	);
}
