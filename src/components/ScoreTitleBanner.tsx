import { FC, ReactNode } from "react";
import styles from "./ScoreTitleBanner.module.scss";

type ScoreTitleBannerProps = {
	children: ReactNode;
	customMarginTop?: number;
};

export const ScoreTitleBanner: FC<ScoreTitleBannerProps> = ({
	children,
	customMarginTop = "",
}) => {
	return (
		<div
			className={styles.titleBanner}
			style={{ marginTop: `${customMarginTop}px` }}
		>
			<div className={styles.frames}></div>
			{children}
		</div>
	);
};