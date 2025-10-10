import { AboutTitle } from "../layout/components/AboutTitle";
import AboutText from "../layout/components/AboutText";
import MoviesCarousel from "../layout/aboutApp/MoviesCarousel";
import PulsingReturnBtn from "../layout/components/PulsingReturnBtn";
import styles from "./About.module.scss";

export default function AboutApp() {
	return (
		<div className={styles.about_container}>
			<div className={styles.about_frame}>
				<AboutTitle marginTitle={styles.marginTitle}>About App</AboutTitle>
				<AboutText />
				<MoviesCarousel />
				<PulsingReturnBtn marginExtra={styles.marginExtra} />
			</div>
		</div>
	);
}
