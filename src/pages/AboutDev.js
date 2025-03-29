import AboutAvatarFrame from "../components/AboutAvatarFrame";
import AboutIconsContainer from "../components/AboutIconsContainer";
import AboutIconSkill from "../components/AboutIconSkill";
import AboutSectionInfo from "../components/AboutSectionInfo";
import AboutTitle from "../components/AboutTitle";
import PulsingReturnBtn from "../components/PulsingReturnBtn";
import styles from "./AboutDev.module.scss";

function AboutDev({ onBack }) {
	return (
		<div className={styles.about_container}>
			<div className={styles.about_frame}>
				<AboutTitle>
					About dev
				</AboutTitle>
				<AboutAvatarFrame />
				<AboutSectionInfo />
				<AboutIconsContainer>
					<AboutIconSkill img="img/JSIcon.jpg" text="JavaScript" />
					<AboutIconSkill img="img/reactIcon.jpg" text="React" />
					<AboutIconSkill img="img/SassIcon.jpg" text="Sass" />
					<AboutIconSkill img="img/restApiIcon.jpg" text="Rest API" />
					<AboutIconSkill img="img/TSIcon2.png" text="TypeScript" />
					<AboutIconSkill img="img/GitIcon.jpg" text="Git" />
				</AboutIconsContainer>

				<PulsingReturnBtn onBack={onBack} />
			</div>
		</div>
	);
}

export default AboutDev;
