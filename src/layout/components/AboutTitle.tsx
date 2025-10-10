import { FC, ReactNode } from "react";
import styles from "./AboutTitle.module.scss";

type AboutTitleProps = {
	children: ReactNode;
	marginTitle?: string;
};

export const AboutTitle: FC<AboutTitleProps> = ({
	children,
	marginTitle = "",
}) => {
	return (
		<div className={`${styles.aboutTitleBox} ${marginTitle}`}>
			<h1>{children}</h1>
		</div>
	);
};