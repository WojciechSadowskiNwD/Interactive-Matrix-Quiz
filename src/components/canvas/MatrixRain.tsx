import { useEffect, useRef } from "react";

const MatrixRain = () => {
	const canvasRef = useRef<HTMLCanvasElement | null>(null);
	const startTimeRef = useRef<number>(Date.now());
	const animationRef = useRef<number | null>(null);
	const lastUpdateTimeRef = useRef<number>(0);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
		if (!ctx) return;

		const katakana =
			"イホアカミサモタテナヌヨメオツハマルヤネラワユヒトリヰヱヲンチウエロ";
		const latinChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
		const numbers = "0123456789";
		const symbols = "@#$%^&*()-=+[]{}|<>?";
		const matrixSymbols = katakana + latinChars + numbers + symbols;
		const fontSize = 22;
		const fontSizeSmall = 15;
		const columnsCloser = Math.ceil(window.innerWidth / fontSize);
		const columnsSmaller = Math.ceil(window.innerWidth / fontSizeSmall);
		const dropsCloser: number[] = Array(columnsCloser).fill(0);
		const dropsSmaller: number[] = Array(columnsSmaller).fill(0);

		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;

		// Fall down speed lvl. for letters
		const fallSpeed = 60;
		const draw = (timestamp: number) => {
			if (timestamp - lastUpdateTimeRef.current < fallSpeed) {
				animationRef.current = requestAnimationFrame(draw);
				return;
			}
			lastUpdateTimeRef.current = timestamp;

			const elapsedTime = Date.now() - startTimeRef.current;
			ctx.fillStyle =
				elapsedTime < 2000 ? "rgba(0, 0, 0, 0.5)" : "rgba(0, 0, 0, 0.06)";
			ctx.fillRect(0, 0, canvas.width, canvas.height);
			ctx.font = `bold ${fontSize}px 'Source Code Pro', serif`;
			ctx.textAlign = "center";
			ctx.shadowBlur = 10;

			// First layer rain, random letters generate
			dropsCloser.forEach((y, index) => {
				const text = matrixSymbols.charAt(
					Math.floor(Math.random() * matrixSymbols.length)
				);
				// centering all chars
				const x = index * fontSize + fontSize / 2;

				if (y > 0) {
					// test gradient
					const gradient = ctx.createLinearGradient(
						x,
						y * fontSize - 10,
						x,
						y * fontSize + 10
					);
					ctx.fillStyle = "#0F0";
					ctx.fillText(text, x, y * fontSize);
				}

				if (y * fontSize > canvas.height && Math.random() > 0.975) {
					dropsCloser[index] = 0;
				} else {
					dropsCloser[index]++;
				}
			});

			// Second layer rain, smaller letters generate
			dropsSmaller.forEach((y, index) => {
				const text = matrixSymbols.charAt(
					Math.floor(Math.random() * matrixSymbols.length)
				);
				const x = index * fontSizeSmall + fontSizeSmall / 2;

				if (y > 0) {
					ctx.fillStyle = "rgb(156, 255, 80,.12)";
					ctx.fillText(text, x, y * fontSizeSmall);
				}

				if (y * fontSize > canvas.height && Math.random() > 0.975) {
					dropsSmaller[index] = 0;
				} else {
					dropsSmaller[index]++;
				}
			});

			animationRef.current = requestAnimationFrame(draw);
		};

		animationRef.current = requestAnimationFrame(draw);

		const handleResize = () => {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		};

		window.addEventListener("resize", handleResize);

		return () => {
			if (animationRef.current !== null) {
				cancelAnimationFrame(animationRef.current);
			}
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return <canvas ref={canvasRef} />;
};

export default MatrixRain;