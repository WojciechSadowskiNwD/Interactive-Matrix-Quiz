import PulsingReturnBtn from "../components/PulsingReturnBtn";
import ScoreLabelInfo from "../components/ScoreLabelInfo";
import ScoreTitleBanner from "../components/ScoreTitleBanner";
import ScoreUserBar from "../components/ScoreUserBar";
import styles from "./ScoreBoard.module.scss";
// DO wyników scoreboard:
// Własne API w Firebase (łatwe i szybkie)
// "Jeśli chcesz przechowywać wyniki graczy, możesz użyć Firebase Firestore jako bazy danych. Nie musisz pisać backendu, wystarczy kilka zapytań do Firestore.

// 🔹 Dodawanie wyniku do bazy Firebase..." - ok do zorientowania się w temacie na później i wdrożenia wewn. projektu

// Czyli komponent będzie przyjmował nazwę usera oraz liczbę punktów.
function ScoreBoard({ onBack }) {

	// table best record, top 5 users
	const highestRecords = [
		{
			id: 0,
			nick: "Adam16",
			points: 998,
		},
		{
			id: 1,
			nick: "DimestioBM4",
			points: 871,
		},
		{
			id: 2,
			nick: "Nerupbis111",
			points: 747,
		},
		{
			id: 3,
			nick: "Katrio001",
			points: 690,
		},
		{
			id: 4,
			nick: "Xavier219",
			points: 438,
		},
	];

	return (
		<div className={styles.scoreBoard}>
			<ScoreTitleBanner />

			<div className={styles.green_frame}>
				<ScoreLabelInfo />

				{highestRecords.map((record, index) => (
					<ScoreUserBar
						key={record.id}
						number={index + 1}
						nick={record.nick}
						points={record.points}
					/>
				))}
			</div>

			<PulsingReturnBtn onBack={onBack} />
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
