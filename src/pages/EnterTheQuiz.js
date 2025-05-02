import MatrixRain from "../components/canvas/MatrixRain";
import DesktopReflection from "../components/DesktopReflection";
import CustomCursor from "../components/CustomCursor";

// Uruchomienie quizu - później
function EnterTheQuiz() {
	return (
		<div className="quizContainer">
			<MatrixRain />
			<DesktopReflection />
			<CustomCursor />
		</div>
	);
}

export default EnterTheQuiz;

// PYTANIA DO QUIZU

const quizQuestions = [
    {
      question: "Which pill allows Neo to learn the truth about the Matrix?",
      options: {
        A: "Green",
        B: "Red",
        C: "Blue",
        D: "Yellow",
      },
      correctAnswer: "B",
    },
    {
      question: "Who played the role of Neo?",
      options: {
        A: "Brad Pitt",
        B: "Johnny Depp",
        C: "Keanu Reeves",
        D: "Tom Cruise",
      },
      correctAnswer: "C",
    },
    {
      question: "What is the name of the agent program, the main antagonist in the first film?",
      options: {
        A: "Agent John",
        B: "Agent Blackwell",
        C: "Agent Smith",
        D: "Mr. Operator",
      },
      correctAnswer: "C",
    },
    {
      question: "Who created the Matrix according to the trilogy?",
      options: {
        A: "The Oracle",
        B: "The Architect",
        C: "Morpheus",
        D: "Smith",
      },
      correctAnswer: "B",
    },
    {
      question: "What is the name of the human city in the real world?",
      options: {
        A: "New Earth",
        B: "Eden",
        C: "Zion",
        D: "Omega",
      },
      correctAnswer: "C",
    },
    {
      question: "In what year was the first Matrix movie released?",
      options: {
        A: "1997",
        B: "1998",
        C: "1999",
        D: "2000",
      },
      correctAnswer: "C",
    },
    {
      question: "What does the Oracle symbolize in the Matrix series?",
      options: {
        A: "The creator of the system",
        B: "A prophet and guide",
        C: "A hacker from Zion",
        D: "The Architect's opponent",
      },
      correctAnswer: "B",
    },
    {
      question: "What abilities does Neo gain in the Matrix?",
      options: {
        A: "Immortality",
        B: "Flight and reality manipulation",
        C: "Teleportation",
        D: "Transformation into a machine",
      },
      correctAnswer: "B",
    },
    {
      question: "What is the name of the ship commanded by Morpheus?",
      options: {
        A: "Nebuchadnezzar",
        B: "Osiris",
        C: "Icarus",
        D: "Gnosis",
      },
      correctAnswer: "A",
    },
    {
      question: "Which character betrays the crew in the first Matrix movie?",
      options: {
        A: "Apoc",
        B: "Cypher",
        C: "Tank",
        D: "Mouse",
      },
      correctAnswer: "B",
    },
    {
      question: "What hacker alias does Neo use before being unplugged?",
      options: {
        A: "The One",
        B: "Anderson",
        C: "Trinity",
        D: "Thomas A. Anderson",
      },
      correctAnswer: "A",
    },
    {
      question: "What is the name of the program that protects the Oracle?",
      options: {
        A: "Seraph",
        B: "Merovingian",
        C: "Link",
        D: "Dozer",
      },
      correctAnswer: "A",
    },
    {
      question: "Who was the Merovingian in the Matrix world?",
      options: {
        A: "A rogue program, collector",
        B: "Commander of Zion",
        C: "Council member",
        D: "System agent",
      },
      correctAnswer: "A",
    },
    {
      question: "How does the fight between Neo and Smith end in The Matrix: Revolutions?",
      options: {
        A: "Neo kills Smith with his bare hands",
        B: "Smith escapes to Matrix 2.0",
        C: "Neo allows himself to be assimilated, then destroys Smith from within",
        D: "The Oracle destroys Smith",
      },
      correctAnswer: "C",
    },
  ];