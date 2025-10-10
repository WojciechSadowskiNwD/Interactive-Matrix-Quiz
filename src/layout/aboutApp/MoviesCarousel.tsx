import { useEffect, useState } from "react";
import MoviesCarouselDesktop from "./CarouselDesktop";
import MoviesCarouselMobile from "./CarouselMobile";

const API_KEY = "198446cdebc58256718c7bdcd84bfbc4";
const MATRIX_COLLECTION_ID = 2344;
//final link: https://api.themoviedb.org/3/collection/2344?api_key=198446cdebc58256718c7bdcd84bfbc4&language=en-US

export type Movie = {
	id: number;
	title: string;
	poster_path: string | null;
	release_date: string;
};

function MoviesCarousel() {
	const [matrixMovies, setMatrixMovies] = useState<Movie[]>([]);
	const [isDesktopWidth, setIsDesktopWidth] = useState<boolean>(
		typeof window !== "undefined" && window.innerWidth >= 992
	);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	useEffect(() => {
		const fetchMatrixMovies = async () => {
			try {
				const response = await fetch(
					`https://api.themoviedb.org/3/collection/${MATRIX_COLLECTION_ID}?api_key=${API_KEY}&language=en-US`
				);
				const data = await response.json();
				// console.log(data);
				setMatrixMovies(data.parts as Movie[]);
			} catch (error) {
				console.error("Error downloading API data:", error);
			} finally {
				setIsLoading(false);
			}
		};

		fetchMatrixMovies();
	}, []);

	return (
		<>
			{isLoading ? (
				<div className="allSpace">
					<div className="loader"></div>
				</div>
			) : isDesktopWidth ? (
				<MoviesCarouselDesktop movies={matrixMovies} />
			) : (
				<MoviesCarouselMobile movies={matrixMovies} />
			)}
		</>
	);
}

export default MoviesCarousel;
