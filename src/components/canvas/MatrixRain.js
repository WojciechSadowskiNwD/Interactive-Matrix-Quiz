import { useEffect, useRef } from "react";

const MatrixRain = () => {
    const canvasRef = useRef(null);
    const startTimeRef = useRef(Date.now());
    const animationRef = useRef(null);
    const lastUpdateTimeRef = useRef(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

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
        const dropsCloser = Array(columnsCloser).fill(0);
        const dropsSmaller = Array(columnsSmaller).fill(0);

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Fall down speed lvl. for letters
        const fallSpeed = 60;
        const draw = (timestamp) => {
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
                const text = matrixSymbols.charAt(Math.floor(Math.random() * matrixSymbols.length));
                // centering all chars
                const x = index * fontSize + fontSize / 2;

                if (y > 0) {
                    // test gradient
                    const gradient = ctx.createLinearGradient(x, y * fontSize - 10, x, y * fontSize + 10);
                    
                    // test 1 zielony jaśniejszy gradient:
                    // gradient.addColorStop(0, "#00ff00");
                    // gradient.addColorStop(0.5, "#008000");
                    // gradient.addColorStop(1, "#008000");
                    
                    // wersja basic kolorystyczna bez gradientu
                    ctx.fillStyle = "#0F0";
                    // ctx.fillStyle = gradient;
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
                const text = matrixSymbols.charAt(Math.floor(Math.random() * matrixSymbols.length));
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
            cancelAnimationFrame(animationRef.current);
            window.removeEventListener("resize", handleResize);
        };
    }, []);




    return <canvas ref={canvasRef} />;
};


export default MatrixRain;