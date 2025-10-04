import { AboutTitle } from "../components/AboutTitle";
import AboutText from "../components/AboutText";
import PulsingReturnBtn from "../components/PulsingReturnBtn";
import AboutMoviesCarousel from "../components/AboutMoviesCarousel";
import styles from "./About.module.scss";

// function AboutApp({ onBack }) {
export default function AboutApp() {
	return (
		<div className={styles.about_container}>
			<div className={styles.about_frame}>
				<AboutTitle marginTitle={styles.marginTitle}>About App</AboutTitle>
				<AboutText />
				<AboutMoviesCarousel />
				<PulsingReturnBtn marginExtra={styles.marginExtra} />
				{/* <PulsingReturnBtn onBack={onBack} marginExtra={styles.marginExtra} /> */}
			</div>
		</div>
	);
}