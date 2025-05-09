import {collection, getDocs } from "firebase/firestore";
import {db} from "./firebaseConfig";

export const fetchQuizQuestions = async () => {
    const quizRef = collection(db, "quizQuestions");  //reference -> which collection do I use
    const snapshot = await getDocs(quizRef); //get all docs -> questions from collection
    return snapshot.docs.map(doc => ({ 
        id: doc.id,
        ...doc.data(),
    }));
};