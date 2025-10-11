import { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/redux";
import { setUserAvatar } from "../../store/userSlice";
import { motion } from "framer-motion";
import styles from "./ManualSlider.module.scss";

const avatars = [
  "img/avatars/avatar_1.webp",
  "img/avatars/avatar_2.webp",
  "img/avatars/avatar_3.webp",
  "img/avatars/avatar_4.webp",
  "img/avatars/avatar_5.webp",
  "img/avatars/avatar_6.webp",
  "img/avatars/avatar_7.webp",
  "img/avatars/avatar_8.webp",
  "img/avatars/avatar_9.webp",
  "img/avatars/avatar_10.webp",
];

export default function ManualSlider() {
  const dispatch = useAppDispatch();
  const selectedAvatar = useAppSelector((store) => store.user.selectedAvatar);

  const [shiftWidth, setShiftWidth] = useState<number>(0);
  const [shiftStep, setShiftStep] = useState<number>(0);
  const [index, setIndex] = useState<number>(0);
  const [visibleCount, setVisibleCount] = useState<number>(1);

  const itemRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const updateSizes = () => {
      if (itemRef.current && containerRef.current) {
        const item = itemRef.current;
        const style = window.getComputedStyle(item);
        const margin =
          parseInt(style.marginLeft) + parseInt(style.marginRight);
        const fullWidth = item.offsetWidth + margin;
        setShiftStep(fullWidth);

        const containerWidth = containerRef.current.offsetWidth;
        const count = Math.floor(containerWidth / fullWidth) || 1;
        setVisibleCount(count);
      }
    };

    updateSizes();
    window.addEventListener("resize", updateSizes);
    return () => window.removeEventListener("resize", updateSizes);
  }, []);

  const handlePrev = () => {
    if (index > 0) {
      setIndex((i) => i - 1);
      setShiftWidth((prev) => prev - shiftStep);
    }
  };

  const handleNext = () => {
    if (index < avatars.length - visibleCount) {
      setIndex((i) => i + 1);
      setShiftWidth((prev) => prev + shiftStep);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={styles.slider_wrapper}
    >
      <motion.button
        className={`${styles.btn_nav} ${styles.btn_prev}`}
        onClick={handlePrev}
        whileHover={{
          scale: 1.1,
          backgroundColor: "rgb(0, 80, 166)",
          boxShadow: "0 0 15px rgb(0, 80, 166)",
          cursor: "none",
        }}
        transition={{ type: "spring", stiffness: 600 }}
      >
        &#9664;
      </motion.button>

      <div className={styles.slider_box} ref={containerRef}>
        <div
          className={styles.slider}
          style={{
            transform: `translateX(-${shiftWidth}px)`,
          }}
        >
          {avatars.map((avatar, i) => (
            <div
              className={styles.slider_item}
              key={i}
              ref={i === 0 ? itemRef : null}
              onClick={() => dispatch(setUserAvatar(avatar))}
            >
              <div
                className={`${styles.item_shadow} ${
                  selectedAvatar === avatar ? styles.selected : ""
                }`}
              ></div>
              <img
                className={styles.item_img}
                src={avatar}
                alt={`avatar face number ${i}`}
              />
            </div>
          ))}
        </div>
      </div>

      <motion.button
        className={`${styles.btn_nav} ${styles.btn_next}`}
        onClick={handleNext}
        whileHover={{
          scale: 1.1,
          backgroundColor: "rgb(185, 0, 0)",
          boxShadow: "0 0 15px rgb(185, 0, 0)",
          cursor: "none",
        }}
        transition={{ type: "spring", stiffness: 600 }}
      >
        &#9654;
      </motion.button>
    </motion.div>
  );
}
