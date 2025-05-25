import { db } from './firebaseConfig';
import { collection, getDocs, query, orderBy, limit, addDoc, deleteDoc, doc } from "firebase/firestore";

/**
 * Aktualizuje tablicę wyników, jeśli wynik `newScore` kwalifikuje się do top 5.
 * @param {string} nick - Nazwa użytkownika
 * @param {number} newScore - Nowy wynik (np. currentScore + secondsRemaining)
 */
export const updateHighScores = async (nick, newScore) => {
    const scoresRef = collection(db, 'scores');
    const q = query(scoresRef, orderBy('points', 'desc'), limit(5));
    const querySnapshot = await getDocs(q);

    const currentTopScores = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        points: Number(doc.data().points), // konwertuj na liczbę
    }));

    // Sprawdź czy nowy wynik zasługuje na miejsce w top 5
    const minScore = Math.min(...currentTopScores.map(s => s.points));

    if (newScore > minScore || currentTopScores.length < 5) {
        // Dodaj nowy rekord
        await addDoc(scoresRef, {
            nick,
            points: newScore.toString(), // przechowujesz jako string
        });

        // Jeśli jest więcej niż 5 wyników, usuń najsłabszy
        if (currentTopScores.length === 5) {
            const lowest = currentTopScores.reduce((a, b) => a.points < b.points ? a : b);
            const docRef = doc(db, 'scores', lowest.id);
            await deleteDoc(docRef);
        }

        return true; // Zaktualizowano
    }

    return false; // Nie zaktualizowano
};
