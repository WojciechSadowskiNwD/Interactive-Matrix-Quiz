import { useEffect, useState } from "react";
import AboutAvatarFrame from "../components/AboutAvatarFrame";
import { AboutIconsContainer } from "../components/AboutIconsContainer";
import { AboutIconSkill } from "../components/AboutIconSkill";
import AboutSectionInfo from "../components/AboutSectionInfo";
import { AboutTitle } from "../components/AboutTitle";
import PulsingReturnBtn from "../components/PulsingReturnBtn";
import styles from "./About.module.scss";

// function AboutDev({ onBack }) {
function AboutDev() {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setIsLoading(false);
		}, 500);

		return () => clearTimeout(timeout);
	}, []);

	if (isLoading) {
		return (
			<div className="allSpace">
				<div className="loader"></div>
			</div>
		);
	}
	return (
		<div className={styles.about_container}>
			<div className={styles.about_frame}>
				<AboutTitle marginTitle={styles.marginTitleB}>About dev</AboutTitle>
				<AboutAvatarFrame />
				<AboutSectionInfo />
				<AboutIconsContainer>
					<AboutIconSkill img="img/JSIcon.webp" text="JavaScript" />
					<AboutIconSkill img="img/reactIcon.webp" text="React" />
					<AboutIconSkill img="img/SassIcon.webp" text="Sass" />
					<AboutIconSkill img="img/restApiIcon.webp" text="Rest API" />
					<AboutIconSkill img="img/TSIcon2.webp" text="TypeScript" />
					<AboutIconSkill img="img/GitIcon.webp" text="Git" />
				</AboutIconsContainer>

				{/* <PulsingReturnBtn onBack={onBack} marginExtra={styles.marginExtraAD} /> */}
				<PulsingReturnBtn marginExtra={styles.marginExtraAD} />
			</div>
		</div>
	);
}

export default AboutDev;