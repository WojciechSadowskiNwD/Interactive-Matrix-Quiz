import { useEffect, useState } from 'react';
import styles from './AboutMoviesCarousel.module.scss';

const API_KEY = "198446cdebc58256718c7bdcd84bfbc4";
const MATRIX_COLLECTION_ID = 2344;


function AboutMoviesCarousel() {
    const [matrixMovies, setMatrixMovies] = useState([]);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [loading, setLoading] = useState(true);

	useEffect(() => {

		const fetchMatrixMovies = async () => {
			try {
				const response = await fetch(
					`https://api.themoviedb.org/3/collection/${MATRIX_COLLECTION_ID}?api_key=${API_KEY}&language=en-US`
				);
				const data = await response.json();
                // console.log(data);
				setMatrixMovies(data.parts);
			} catch (error) {
				console.error("Error downloading API data:", error);
			} finally {
				setLoading(false);
			}
		};

		fetchMatrixMovies();
	}, []);

	const handlePrev = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? matrixMovies.length - 1 : prevIndex - 1
		);
	};

	const handleNext = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === matrixMovies.length - 1 ? 0 : prevIndex + 1
		);
	};

	const currentMovie = matrixMovies[currentIndex];


    return (
     <>
     {loading ? (
					<p>Loading data...</p>
				) : (
					<div className={styles.about_carousel_container}>
						<button className={styles.nav_btn} onClick={handlePrev}>
							&#9664;
						</button>

						<div className={styles.movie_display}>
							<img
								src={`https://image.tmdb.org/t/p/w300${currentMovie.poster_path}`}
								alt={currentMovie.title}
								className={styles.poster}
							/>
							<h3>{currentMovie.title}</h3>
							<p>{new Date(currentMovie.release_date).getFullYear()}</p>
						</div>

						<button className={styles.nav_btn} onClick={handleNext}>
							&#9654;
						</button>
					</div>
				)}
     </>   
    )
}

export default AboutMoviesCarousel;