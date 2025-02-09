import MatrixRain from "./components/canvas/MatrixRain";
import BlackBoard from "./components/BlackBoard";
import "./App.css";

const App = () => {
	return (
		<div className="App">
			<MatrixRain />
			<BlackBoard />
		</div>
	);
};

export default App;

// RWD:
// 360px/ 375px/ 

// UWAGA
// 1.5 odtwarzacz, pamiętać dodać po wykonaniu animacji logotypu

// INFORMACJE, ZARYS PROJEKTU
// 1. na czarnym ekranie od góry zaczynają spadać zielone znaki kodu matrixa +
// * 1.5 ***na  później ---->> uruchamia się odtworzacz muzyki z utworem openingu pierwszego matrixa
// 2. po kilku sekundach tło ciemnieje aż do pełnej czerni
// 3. teraz ucruchamia się animacja generująca/uzupełniająca widoczność liter tytułu aplikacji the matrix. Literki jedna po drugiej pojawiają się ale w różnej niemal przypadkowej kolejności
// 4. Po uzupełnieniu całego tytułu 'the matrix' rozpocznie się druga animacja. Zza tego tyzułu wysuną się dwa wyrazy. Pierwszy "interactive" pójdzie nad logo. Drugi 'quiz' pójdzie pod logo, przesunięcie bedzie pływające.
// 5. Po zakończeniu tych sekwencji pojawi się też panel dostępnych opcji- linków poniżej.
// Prawdopodobnie będą to bloczki zielonego koloru z następującymi wartościami: 'START', 'ABOUT DEVELOPER', 'ABOUT THIS APP', "SCORE BOARD"

// *. O dostępnych przyciskach: START - uruchamia aplikację, ABOUT DEVELOPER - informacje o mnie oraz link do portfolio, również kontakt, ABOUT THIS APP - informacja że przeznaczenie apki jest wyłącznie w celach edukacyjnych oraz poglądowych dla zaprezentowania moich umiejętności, stanowiąc również formę chołdu dla twórców serii tych filmów. Dodatkowo wymienienie jakich rozwiązań użyłem w kodzie, SCORE BOARD - tablica wyników z pobitymi rekordami
// 6. Logo albo trafia na samą górę i prawdopodobnie się zmiejsza, albo znika.
// Zobaczymy w widocznym miejscu migający kwadratowy zielony kursor jak w terminalu. Po krótkiej chwili uruchomi się animacja efektu wpisywanych liter, jakie utworzą wstępną informację dotyczącą samej gry w quiz. Niech będzie to tekst treścią sugerujący, że jako user właśnie stoisz przed być może najważniejszym jak dotąd wyborem. Mogę tobie zaoferować odpowiedź, prawdę... i poddać cię próbie, albo sprawić że zapomnisz o tej rozmowie i wrócisz do swojego życia, dalej dusząc w sobie pytanie które na okrągło trzymasz w sobie. Czerwona to odpowiedzi, przejście poza kurtynę która przesłania tobie prawdziwy obraz. Niebieska zaś stanowi pozostanie w nieświadomości oraz brak zmian. Czas żebyś wybrał pigułkę...
// Poniżej tego tekstu pojawi się postać Morfeusza z wyciągniętymi w naszą stronę otwartymi dłońmi, a w nich rzecz jasna słynne pigułki.
// Rolą usera będzie kliknąć jedną z dwóch pigułek czerwona z lewej, czy niebieska po prawiej
// Niebieska pigułka spowoduje zrestartowanie całej aplikacji
// Po kliknięciu w czerwoną pigułkę wyłączam odtwarzacz z openingiem matrixa pierwszego, a w jego miejsce uruchamiam inny z utworem navras czyli muzyce towarzyszącej najsłynniejszemu pojedynkowi finałowemu Neo ze zbuntowanym agentem Smithem.
// W tym samym momencie następuje przejście do panelu quizu oraz uruchomienie procesu odliczania czasu równego czasowi trwania samego utworu. Koniec czasu == zakończeniu quizu z aktualnym wynikiem zebranych punktów.
// Jeżeli użytkownik nie zmieści się w czasie oraz zbierze za mało punktów, ekran zgaśnie z zielonym poziomym paskiem na środku, po czym nagle wyświetli się zdjęcie wściekłego Smitcha oraz informacja iż "Nareszcie dorwałem Pana! Trzeba było grzecznie siedzieć i nie wsadzać nosa tam gdzie nie należy!"
// Co dalej, potem dopiszę...
