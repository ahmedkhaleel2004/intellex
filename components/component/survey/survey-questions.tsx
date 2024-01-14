import React, { useState } from "react";
import { Card } from "../../ui/card";
import { FormQuestion } from "./input-form";
import { auth, db } from "@/lib/firebase";
import questions from "@/lib/questions";
import { doc, setDoc, updateDoc } from "firebase/firestore";

interface SurveyQuestionsProps {
	onSurveyComplete: () => void;
}

const SurveyQuestions: React.FC<SurveyQuestionsProps> = ({
	onSurveyComplete,
}) => {
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const currentQuestion = questions[currentQuestionIndex];

	const nextQuestion = () => {
		if (currentQuestionIndex < questions.length - 1) {
			setCurrentQuestionIndex(currentQuestionIndex + 1);
		} else {
			onSurveyComplete();
		}
	};

	const userInput = async (userResponse: string) => {
		if (auth.currentUser) {
			// Create or update the document with the user's UID
			const docRef = doc(db, "users", auth.currentUser.uid);

			// Prepare the update object
			let updateData: { [key: string]: string | string[] } = {};

			// Check if it's question 4 or 5
			if (currentQuestionIndex === 3 || currentQuestionIndex === 4) {
				// Split the user response by comma and take the first three items
				const responses = userResponse.split(",").slice(0, 3);
				updateData[`Q${currentQuestionIndex + 1}`] = responses;
			} else {
				updateData[`Q${currentQuestionIndex + 1}`] = userResponse;
			}

			// Update the document with the new response
			await setDoc(docRef, updateData, { merge: true });

			// Check if this was the last question
			if (currentQuestionIndex === 4) {
				// Update the user document to indicate the survey is done
				const userDocRef = doc(db, "users", auth.currentUser.uid);
				await updateDoc(userDocRef, {
					doneForm: true,
				});
			} else {
				// Move to the next question
				nextQuestion();
			}
		}
	};

	return (
		<Card className="p-4">
			<FormQuestion
				title={currentQuestion.title}
				placeholder={currentQuestion.placeholder}
				desc={currentQuestion.desc}
				onSuccessfulSubmit={nextQuestion}
				valueOfUser={userInput}
			/>
		</Card>
	);
};

export default SurveyQuestions;
