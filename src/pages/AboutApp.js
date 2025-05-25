import { useEffect, useState } from "react";
import AboutTitle from "../components/AboutTitle";
import AboutText from "../components/AboutText";
import PulsingReturnBtn from "../components/PulsingReturnBtn";
import AboutMoviesCarousel from "../components/AboutMoviesCarousel";
import styles from "./About.module.scss";

function AboutApp({ onBack }) {

	return (
		<div className={styles.about_container}>
			<div className={styles.about_frame}>
				<AboutTitle marginTitle={styles.marginTitle}>About App</AboutTitle>
				<AboutText />
				<AboutMoviesCarousel />
				<PulsingReturnBtn onBack={onBack} marginExtra={styles.marginExtra} />
			</div> 
		</div>
	);
}

export default AboutApp;