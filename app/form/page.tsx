"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import SurveyQuestions from "@/components/component/survey/survey-questions";
import SurveyComplete from "@/components/component/survey/survey-complete";
import { useAuth } from "@/lib/hooks/use-auth";

const Survey = () => {
	const router = useRouter();
	const userData = useAuth(router);
	const [surveyCompleted, setSurveyCompleted] = useState(false);

	return (
		<main className="max-w-2xl mx-auto">
			{!surveyCompleted ? (
				<div className="mb-4 px-4">
					<h1 className="text-3xl font-bold">Survey</h1>
					<p>Please answer the following questions</p>
					<SurveyQuestions
						onSurveyComplete={() => setSurveyCompleted(true)}
					/>
				</div>
			) : (
				<SurveyComplete />
			)}
		</main>
	);
};

export default Survey;
