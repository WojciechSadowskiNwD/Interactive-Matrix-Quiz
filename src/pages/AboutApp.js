import AboutTitle from "../components/AboutTitle";
import AboutText from "../components/AboutText";
import PulsingReturnBtn from "../components/PulsingReturnBtn";
import styles from "./About.module.scss";
import AboutMoviesCarousel from "../components/AboutMoviesCarousel";


function AboutApp({ onBack }) {
	return (
		<div className={styles.about_container}>
			<div className={styles.about_frame}>
				<AboutTitle>About App</AboutTitle>
				<AboutText />
                <AboutMoviesCarousel/>
				<PulsingReturnBtn onBack={onBack} />
			</div>
		</div>
	);
}

export default AboutApp;