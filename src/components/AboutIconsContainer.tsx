import { FC, ReactNode } from "react";
import styles from "./AboutIconsContainer.module.scss";

type AboutIconsContainerProps = {
	children: ReactNode;
};

export const AboutIconsContainer: FC<AboutIconsContainerProps> = ({
	children,
}) => {
	return <div className={styles.about_icons_container}>{children}</div>;
};