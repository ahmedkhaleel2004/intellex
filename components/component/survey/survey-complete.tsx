import React from "react";
import { ThankSurvey } from "./thanks-survey";

const FormComplete = () => {
	return (
		<div>
			<h1 className="text-3xl font-bold justify-center">Thank you!</h1>
			<p className="text-muted-foreground">
				Thank you for completing the survey. Below is a summary of your
				responses.
			</p>
			<ThankSurvey />
		</div>
	);
};

export default FormComplete;
