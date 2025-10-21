import { useRef, useState } from "react";
import YouTube, { YouTubeEvent, YouTubeProps } from "react-youtube";
import { motion } from "framer-motion";
import styles from "./YTmusic.module.scss";

export default function YTmusic() {
	const [isPlaying, setIsPlaying] = useState(false);
	let playerRef = useRef<any>(null);

	const opts: YouTubeProps["opts"] = {
		height: "40",
		width: "40",
		playerVars: {
			autoplay: 0,
			controls: 1,
		},
	};

	const togglePlay = () => {
		const player = playerRef.current;
		if (!player) return;

		if (isPlaying) {
			player.pauseVideo();
		} else {
			player.playVideo();
		}
		setIsPlaying(!isPlaying);
	};

	const handleReady = (e: YouTubeEvent<any>) => {
		playerRef.current = e.target;
	};

	return (
		<div className={styles.YTmusic_wrapper}>
			<motion.button
				className={styles.YT_btn}
				initial={{
					opacity: 1,
				}}
				animate={{
					opacity: [.7, 0.3, .7],
				}}
				transition={{
					duration: 4,
					repeat: Infinity,
					ease: "easeInOut",
				}}
				onClick={togglePlay}
			>
				{isPlaying ? (
					"⏸ Pause"
				) : (
					<>
						<i className="fa-solid fa-phone-volume"></i>Song
					</>
				)}
			</motion.button>
			<div className={styles.YT_iframe}>
				<YouTube videoId="Dy080SqIEMU" opts={opts} onReady={handleReady} />
			</div>
		</div>
	);
}
