import styles from "./AboutIconsContainer.module.scss";

export default function AboutIconsContainer({ children }) {
	return <div className={styles.about_icons_container}>{children}</div>;
}
