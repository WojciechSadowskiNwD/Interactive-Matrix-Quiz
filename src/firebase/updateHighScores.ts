import { db } from "./firebaseConfig";
import {
	collection,
	getDocs,
	query,
	orderBy,
	limit,
	addDoc,
	deleteDoc,
	doc,
	DocumentData,
} from "firebase/firestore";

export type HighScore = {
	id: string;
	nick: string;
	points: number;
};

export const updateHighScores = async (
	nick: string,
	newScore: number
): Promise<boolean> => {
	const scoresRef = collection(db, "scores");
	const q = query(scoresRef, orderBy("points", "desc"), limit(5));
	const querySnapshot = await getDocs(q);

	const currentTopScores: HighScore[] = querySnapshot.docs.map((docSnap) => {
		const data = docSnap.data() as DocumentData;
		return {
			id: docSnap.id,
			nick: String(data.nick),
			points: Number(data.points),
		};
	});

	// Check whether the new result deserves a place in the top 5.
	const minScore =
		currentTopScores.length > 0
			? Math.min(...currentTopScores.map((s) => s.points))
			: 0;

	if (newScore > minScore || currentTopScores.length < 5) {
		// Add new record
		await addDoc(scoresRef, {
			nick,
			points: newScore.toString(),
		});

		// If move than 5, delete the lower one
		if (currentTopScores.length === 5) {
			const lowest = currentTopScores.reduce((a, b) =>
				a.points < b.points ? a : b
			);
			const docRef = doc(db, "scores", lowest.id);
			await deleteDoc(docRef);
		}

		return true;
	}

	return false;
};

// Prev version .js:
// import { db } from './firebaseConfig';
// import { collection, getDocs, query, orderBy, limit, addDoc, deleteDoc, doc } from "firebase/firestore";
// export const updateHighScores = async (nick, newScore) => {
//     const scoresRef = collection(db, 'scores');
//     const q = query(scoresRef, orderBy('points', 'desc'), limit(5));
//     const querySnapshot = await getDocs(q);
//     const currentTopScores = querySnapshot.docs.map(doc => ({
//         id: doc.id,
//         ...doc.data(),
//         points: Number(doc.data().points),
//     }));
//     // Check whether the new result deserves a place in the top 5.
//     const minScore = Math.min(...currentTopScores.map(s => s.points));
//     if (newScore > minScore || currentTopScores.length < 5) {
//         // Dodaj nowy rekord
//         await addDoc(scoresRef, {
//             nick,
//             points: newScore.toString(),
//         });
//         // If there are more than 5 results, remove the weakest one.
//         if (currentTopScores.length === 5) {
//             const lowest = currentTopScores.reduce((a, b) => a.points < b.points ? a : b);
//             const docRef = doc(db, 'scores', lowest.id);
//             await deleteDoc(docRef);
//         }
//         return true;
//     }
//     return false;
// };