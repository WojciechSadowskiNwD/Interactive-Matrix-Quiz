import { useState, useEffect } from "react";
import {motion} from "framer-motion";
import styles from "./CustomCursor.module.scss";


export default function CustomCursor() {
    const [position, setPosition] = useState({ x: 1000, y: 440 });
    const [isHoveringBtn, setIsHoveringBtn] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseEnter = () => setIsHoveringBtn(true);
        const handleMouseLeave = () => setIsHoveringBtn(false);

        // Catch all the buttons to listen them, to animate the cursor when user hover on and off the selected button
        const buttons = document.querySelectorAll("button");
        buttons.forEach((btn) => {
            btn.addEventListener("mouseenter", handleMouseEnter);
            btn.addEventListener("mouseleave", handleMouseLeave);
        });

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            buttons.forEach((btn) => {
                btn.removeEventListener("mouseenter", handleMouseEnter);
                btn.removeEventListener("mouseleave", handleMouseLeave);
            });
        };
    }, []);

    return (
        <motion.div
        className={styles.customCursor}
        style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
        }}
        animate={{
            borderLeftColor: isHoveringBtn ? "#ffffff" : "#00ff00",
            filter: isHoveringBtn
                ? "drop-shadow(0 0 5px white) drop-shadow(0 0 10px white)"
                : "drop-shadow(0 0 5px white) drop-shadow(0 0 10px #00ff00)"
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
    ></motion.div>
    );
}