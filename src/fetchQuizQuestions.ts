import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebaseConfig";

export type QuizQuestion = {
	id: string;
	correctAnswer: string;
	options: string[];
	question: string;
};

export const fetchQuizQuestions = async (): Promise<QuizQuestion[]> => {
	const quizRef = collection(db, "quizQuestions");
	const snapshot = await getDocs(quizRef);

	return snapshot.docs.map((doc) => {
		const data = doc.data() as Omit<QuizQuestion, "id">;
		return {
			id: doc.id,
			...data,
		};
	});
};



// Prev version:
// import {collection, getDocs } from "firebase/firestore";
// import {db} from "./firebaseConfig";

// export const fetchQuizQuestions = async () => {
//     const quizRef = collection(db, "quizQuestions");  //reference -> which collection do I use
//     const snapshot = await getDocs(quizRef); //get all docs -> questions from collection
//     return snapshot.docs.map(doc => ({
//         id: doc.id,
//         ...doc.data(),
//     }));
// };
