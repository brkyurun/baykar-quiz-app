import { useEffect, useState } from "react";

type Question = {
  category: string;
  difficulty: string;
  type: string;
  question: string;
  answers: string[];
  correct_answer: string;
  incorrect_answers: string[];
  id: number;
};

type RequestResponse = {
  response_code: number;
  results: Question[];
};

export function useQuizQuestions() {
  const QUESTION_REQUEST_URL =
    "https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple";
  const [questions, setQuestions] = useState<Question[]>([]);

  const fetchQuestions = async (): Promise<RequestResponse> => {
    const response = await fetch(QUESTION_REQUEST_URL);
    const data = await response.json();
    return data;
  };

  // Shuffle the array by generating a random number
  const shuffle = (array: string[]) => {
    return array.sort(() => Math.random() - 0.5);
  };

  useEffect(() => {
    fetchQuestions().then((data) => {
      const { results } = data;
      setQuestions(
        results.map((question, index) => ({
          ...question,
          id: index + 1,
          answers: shuffle([
            ...question.incorrect_answers,
            question.correct_answer,
          ]),
        })),
      );
    });
  }, []);

  return questions;
}
