import AboutTitle from "../components/AboutTitle";
import PulsingReturnBtn from "../components/PulsingReturnBtn";

function AboutApp({onBack}){
    return (
        <div>
            <AboutTitle>
                About App
            </AboutTitle>

            <PulsingReturnBtn onBack={onBack} />
        </div>
    )
}

export default AboutApp;