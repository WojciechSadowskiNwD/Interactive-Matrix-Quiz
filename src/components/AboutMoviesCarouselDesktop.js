import { useState } from "react";
import styles from "./AboutMoviesCarouselDesktop.module.scss";

export default function AboutMoviesCarouselDesktop({ movies }) {
	const [currentIndex, setCurrentIndex] = useState(0);
	const[randomActive, setRandomActive] = useState(true);
	const currentMovie = movies[currentIndex];
	const secondMovie = movies[currentIndex+1];

	const handleFirst = () => {
		setRandomActive(true);
		setCurrentIndex((prev) => prev = 0);
	}	
	const handleSecond = () => {
		setRandomActive(false);
		setCurrentIndex((prev) => (prev = 2));
	}
		


	return (
		<div className={styles.carousel_container}>
			<div className={styles.movie_display}>
				<img
					className={styles.poster}
					src={`https://image.tmdb.org/t/p/w300${currentMovie.poster_path}`}
					alt={currentMovie.title}
				/>
				<h3>{currentMovie.title}</h3>
				<p>{new Date(currentMovie.release_date).getFullYear()}</p>
				<button className={`${styles.movies_btn} ${randomActive ? styles.btn_active : ""}`} onClick={handleFirst}>
					0
				</button>
			</div>

			<div className={styles.movie_display}>
				<img
					className={styles.poster}
					src={`https://image.tmdb.org/t/p/w300${secondMovie.poster_path}`}
					alt={secondMovie.title}
				/>
				<h3>{secondMovie.title}</h3>
				<p>{new Date(secondMovie.release_date).getFullYear()}</p>
				<button className={`${styles.movies_btn} ${!randomActive ? styles.btn_active : ""}`} onClick={handleSecond}>
					1
				</button>
			</div>
		</div>
	);
}
