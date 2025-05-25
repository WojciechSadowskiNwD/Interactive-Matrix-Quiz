import { useState } from "react";
import styles from "./AboutMoviesCarouselMobile.module.scss";

function AboutMoviesCarouselMobile({ movies }) {
	const [currentIndex, setCurrentIndex] = useState(0);
	const currentMovie = movies[currentIndex];

	const handlePrev = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? movies.length - 1 : prevIndex - 1
		);
	};

	const handleNext = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === movies.length - 1 ? 0 : prevIndex + 1
		);
	};

	return (
				<div className={styles.about_carousel_container}>
					<button className={styles.nav_btn} onClick={handlePrev}>
						&#9664;
					</button>

					<div className={styles.movie_display}>
						<img
							className={styles.poster}
							src={`https://image.tmdb.org/t/p/w300${currentMovie.poster_path}`}
							alt={currentMovie.title}
						/>
						<h3>{currentMovie.title}</h3>
						<p>{new Date(currentMovie.release_date).getFullYear()}</p>
					</div>

					<button className={styles.nav_btn} onClick={handleNext}>
						&#9654;
					</button>
				</div>
	);
}

export default AboutMoviesCarouselMobile;
