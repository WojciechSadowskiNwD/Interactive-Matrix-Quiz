import { useEffect, useState } from "react";
import { useAppDispatch } from "../../store/redux";
import { Link } from "react-router-dom";
import { changeActiveComponent, isFirstLaunch } from "../../store/uiSlice";
import type { ActiveComponent } from "../../store/uiSlice";
import DecodeButton from "./DecodeButton";
import styles from "./ButtonsContainer.module.scss";

type Button = {
	key: ActiveComponent;
	label: "START" | "SCORE Board" | "ABOUT App" | "ABOUT Dev";
	path?: string;
};

const buttons: Button[] = [
	{ key: "start", label: "START", path: "/enterTheQuiz" },
	{ key: "scoreBoard", label: "SCORE Board" },
	{ key: "aboutApp", label: "ABOUT App" },
	{ key: "aboutDev", label: "ABOUT Dev" },
];

export default function ButtonsContainer() {
	const dispatch = useAppDispatch();
	const [mountedBtn, setMountedBtn] = useState<Record<number, boolean>>({});

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

	// after click any btn on optionsPanel:
	const handleClick = (key: ActiveComponent) => {
		dispatch(isFirstLaunch(false));
		dispatch(changeActiveComponent(key));
	};

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
							onClick={() => handleClick(key)}
						>
							<DecodeButton>{label}</DecodeButton>
						</button>
					)
				) : null
			)}
		</div>
	);
}
