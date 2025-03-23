import { motion } from "framer-motion";
import styles from "./ScoreBoard.module.scss";
// DO wyników scoreboard:
// Własne API w Firebase (łatwe i szybkie)
// "Jeśli chcesz przechowywać wyniki graczy, możesz użyć Firebase Firestore jako bazy danych. Nie musisz pisać backendu, wystarczy kilka zapytań do Firestore.

// 🔹 Dodawanie wyniku do bazy Firebase..." - ok do zorientowania się w temacie na później i wdrożenia wewn. projektu

// Czyli komponent będzie przyjmował nazwę usera oraz liczbę punktów.
function ScoreBoard({ onBack }) {
	return (
		<div className={styles.scoreBoard}>
			<div className={styles.titleBanner}>
				<div className={styles.frames}></div>Score board
			</div>

			<div className={styles.green_frame}>
				<div className={styles.label_informations}>
					<div className={styles.label_rank}>
						<p className={styles.label_paragraph}>rank</p>
					</div>
					<div className={styles.label_info}>
						<p className={`${styles.label_name} ${styles.label_paragraph}`}>
							nick
						</p>
						<p className={styles.label_paragraph}>
							<i class="fas fa-bolt"></i>
						</p>
					</div>
				</div>

				<div className={styles.score_box}>
					<div className={styles.position_rank}>
						<p>1</p>
					</div>
					<div className={styles.position_info}>
						<p className={styles.user_name}>Adam16</p>
						<p>200</p>
					</div>
				</div>
				<div className={styles.score_box}>
					<div className={styles.position_rank}>
						<p>2</p>
					</div>
					<div className={styles.position_info}>
						<p className={styles.user_name}>DimestioBM4</p>
						<p>833</p>
					</div>
				</div>
				<div className={styles.score_box}>
					<div className={styles.position_rank}>
						<p>3</p>
					</div>
					<div className={styles.position_info}>
						<p className={styles.user_name}>Nerupbis111</p>
						<p>892</p>
					</div>
				</div>
				<div className={styles.score_box}>
					<div className={styles.position_rank}>
						<p>4</p>
					</div>
					<div className={styles.position_info}>
						<p className={styles.user_name}>Katrio001</p>
						<p>355</p>
					</div>
				</div>
				<div className={styles.score_box}>
					<div className={styles.position_rank}>
						<p>5</p>
					</div>
					<div className={styles.position_info}>
						<p className={styles.user_name}>Xavier219</p>
						<p>521</p>
					</div>
				</div>
			</div>

			<motion.button
				onClick={onBack}
				data-action="goBack"
				className={styles.btn_back}
				initial={{
					backgroundColor: "rgba(0,128,0,0.626)",
					boxShadow: "0px 0px 115px #ccff00",
				}}
				animate={{
					backgroundColor: [
						"rgba(0,128,0,0.626)",
						"#00aa00",
						"rgba(0,128,0,0.626)",
					],
					boxShoadow: [
						"0px 0px 5px #00ff00",
						"0px 0px 20px #00ff00",
						"0px 0px 5px #00ff00",
					],
				}}
				transition={{
					duration: 4,
					repeat: Infinity,
					repeatType: "loop",
					ease: "easeInOut",
				}}
			>
				<i className={`fa-solid fa-backward-fast ${styles.back_icon}`}></i>
				<em className={styles.em}>Back</em>
			</motion.button>
		</div>
	);
}

export default ScoreBoard;

// Jak ma to wyglądać?
//1. Nagłówek, tytuł - SCORE BOARD
//2. Tabela wyników - wygląd?
//3. Dane o userach: name/nick + points
//#. Wyliczenie wyników moja koncepcja. Jeżeli będziemy mieć losowe generowanie pytań, to można wprowadzić system nagrody w zamian za wielokrotność podawania poprawnych odpowiedzi po sobie bez żadnej pomyłki:
// Jedna odpowiedź poprawna - 100% punktów, dwie bez pomyłki 110%, trzy bez pomyłki 120%, itd.
// Ponadto wartoby na końcu wziąć pod uwagę czas wyrażony w sekundach, jaki pozostał userowi po zakończonym quizie. Można go przeliczyć na dodatkową punktację oraz dodać do zgromadzonych punktów. W ten sposób mamy już bardziej złożony sytem i wyższą motywację do powtórzenia przez niego samej zabawy.
// Gdyby gromadzić osobno różne typy punktów w innych zmiennych, można je fajnie zaprezentować na podsupowaniu pokazując userowi ile zebrał podstawowych pkt, ile zdobył bonusowych za strzelanie bez pomyłek, oraz jaką dostał premię za niewykorzystany czas + ewentualnie za niewykorzystane koła ratunkowe, a na dole łączna ich suma.
