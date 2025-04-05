import { useEffect, useState } from "react";
import AboutMoviesCarouselDesktop from "./AboutMoviesCarouselDesktop";
import AboutMoviesCarouselMobile from "./AboutMoviesCarouselMobile";

const API_KEY = "198446cdebc58256718c7bdcd84bfbc4";
const MATRIX_COLLECTION_ID = 2344;

function AboutMoviesCarousel() {
	const [matrixMovies, setMatrixMovies] = useState([]);
	const [isDesktopWidth, setIsDesktopWidth] = useState(
		window.innerWidth >= 992
	);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		const fetchMatrixMovies = async () => {
			try {
				const response = await fetch(
					`https://api.themoviedb.org/3/collection/${MATRIX_COLLECTION_ID}?api_key=${API_KEY}&language=en-US`
				);
				const data = await response.json();
				console.log(data);
				setMatrixMovies(data.parts);
			} catch (error) {
				console.error("Error downloading API data:", error);
			} finally {
				setLoading(false);
			}
		};

		fetchMatrixMovies();
	}, []);

	return (
		<>
			{loading ? (
				<p>Loading data...</p>
			) : isDesktopWidth ? (
				<AboutMoviesCarouselDesktop movies={matrixMovies} />
			) : (
				<AboutMoviesCarouselMobile movies={matrixMovies} />
			)}
		</>
	);
}
export default AboutMoviesCarousel;




