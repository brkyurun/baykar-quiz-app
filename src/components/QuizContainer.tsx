import { useQuizQuestions } from "../hooks/useQuizQuestions";
import { useEffect, useState } from "react";
import { Question } from "./Question";
import { ResultsTable } from "./ResultsTable";

export function QuizContainer() {
  const [questionNumber, setQuestionNumber] = useState<number>(1);
  const [time, setTime] = useState<number>(30);
  const [canAnswer, setCanAnswer] = useState<boolean>(false);
  const [stopTimer, setStopTimer] = useState<boolean>(false);
  const questions = useQuizQuestions();
  const [userAnswers, setUserAnswers] = useState<
    { questionNumber: number; answer: string; isCorrect: boolean }[]
  >([]);

  useEffect(() => {
    if (time === 0) {
      setQuestionNumber((prev) => prev + 1);
      setTime(30);
      setCanAnswer(false);
      setUserAnswers((prev) => [
        ...prev,
        {
          questionNumber: prev.length + 1,
          answer: "",
          isCorrect: false,
        },
      ]);
    }

    if (time < 20) {
      setCanAnswer(true);
    }

    const interval = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);

    if (userAnswers.length > 0 && userAnswers.length === questions.length) {
      clearInterval(interval);
      setStopTimer(true);
    }

    return () => clearInterval(interval);
  }, [time]);

  const handleAnswer = (answer: string) => {
    setUserAnswers((prev) => [
      ...prev,
      {
        questionNumber: prev.length + 1,
        answer,
        isCorrect: answer === questions[questionNumber - 1].correct_answer,
      },
    ]);
    setQuestionNumber((prev) => prev + 1);
    setCanAnswer(false);
    setTime(30);
  };

  return (
    <section className="mx-auto flex w-full max-w-[35rem] flex-col items-center justify-center gap-4 rounded-xl bg-neutral-200 p-6 text-neutral-900">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl font-bold leading-none">Quiz Yourself</h1>
        {stopTimer === false ? (
          <div
            className={`grid h-12 w-12 place-items-center rounded-full border-2 p-3 text-lg leading-none transition-all duration-500 ${time >= 20 ? "border-yellow-500" : time <= 5 ? "border-red-500" : "border-green-500"}`}
          >
            {time}
          </div>
        ) : null}
      </div>
      <hr className="w-full border-neutral-800" />
      {questions.length > 0 && userAnswers.length < questions.length && (
        <Question
          question={questions[questionNumber - 1].question}
          answers={questions[questionNumber - 1].answers}
          canAnswer={canAnswer}
          handleAnswer={handleAnswer}
        />
      )}
      {questions.length === 0 ? <p className="">Loading questions...</p> : null}
      {questions.length > 0 && userAnswers.length < questions.length && (
        <p className="text-center text-lg font-medium">
          Question {questionNumber} of {questions.length}
        </p>
      )}
      {userAnswers.length !== 0 && userAnswers.length === questions.length && (
        <ResultsTable results={userAnswers} />
      )}
    </section>
  );
}
