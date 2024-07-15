type QuestionProps = {
  question: string;
  answers: string[];
  canAnswer: boolean;
  handleAnswer: (answer: string) => void;
};

export function Question({
  question,
  answers,
  canAnswer,
  handleAnswer,
}: QuestionProps) {
  return (
    <div>
      <h2
        className="text-center text-xl font-medium text-neutral-900"
        dangerouslySetInnerHTML={{ __html: question }}
      />
      <ul className="mt-6 flex flex-col gap-4">
        {answers.map((answer) => (
          <button
            type="button"
            key={crypto.randomUUID()}
            disabled={!canAnswer}
            onClick={() => handleAnswer(answer)}
            className="flex w-full items-center justify-between rounded-lg border-2 border-neutral-900 p-3 text-lg leading-none transition-all duration-500 disabled:cursor-not-allowed disabled:bg-neutral-300"
          >
            <li
              className="w-full text-left"
              dangerouslySetInnerHTML={{ __html: answer }}
            />
          </button>
        ))}
      </ul>
    </div>
  );
}
