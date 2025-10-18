import {motion} from "framer-motion";
import styles from "./WelcomeImg.module.scss";

export default function WelcomeImg() {
	return ( 
		<motion.div className={styles.welcomeImg_wrapper}
            initial={{opacity: 1}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 2.5}}
        >
			<div className={styles.img_box}>
				<img
					className={styles.image} 
					src={process.env.PUBLIC_URL + "/img/openApp.webp"}
					alt="Man in black coat holding two pills in open hands"
				/>
                <motion.em className={styles.text}
                    initial={{opacity: .2}}
                    animate={{opacity: [.3,1,.3]}}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}

                >Initialize</motion.em>
			</div>
		</motion.div>
	);
}