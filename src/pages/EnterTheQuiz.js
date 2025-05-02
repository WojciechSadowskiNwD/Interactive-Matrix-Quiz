import MatrixRain from "../components/canvas/MatrixRain";
import DesktopReflection from "../components/DesktopReflection";
import CustomCursor from "../components/CustomCursor";

// Uruchomienie quizu - później
function EnterTheQuiz() {
    return (
        <div className="quizContainer">
            <MatrixRain/>
            <DesktopReflection/>
            <CustomCursor/>
        </div>
    )
}

export default EnterTheQuiz;




// DIALOGI
// 1. Wake up user... Will you repeat what your nickname was?
// Pojawia się pole do wpisania nicku usera, który zostaje zapisany w state: userNick
// * Tutaj mam pomysł aby chwilę migał punkt, następnie zrobię efekt pojawiania się kolejno liter całego powyższego zdania. Po zatwierdzeniu komponent zaniknie w pełną przeźroczystość...

// Komponent wyłania się z pełnej niewidzialności...
// 2. Wybór avatara:
// I don't remember what avatar you had, will you point out which one it was?
// * Również ten sam efekt wpisywania, poniżej pojawi się pula avaratów np 4 szt.
// Następuje zapisanie avatara w state: userAvatar
// Również komponent przejdzie w niewidzialność...
