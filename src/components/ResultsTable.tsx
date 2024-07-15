type ResultsTableProps = {
  results: { questionNumber: number; answer: string; isCorrect: boolean }[];
};

export function ResultsTable({ results }: ResultsTableProps) {
  return (
    <>
      <table className="w-full">
        <thead className="bg-neutral-900 text-neutral-100">
          <tr>
            <th>Question Number</th>
            <th>Answer</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result) => (
            <tr key={crypto.randomUUID()}>
              <td className="border border-neutral-700">
                {result.questionNumber}
              </td>
              <td
                className="border border-neutral-700"
                dangerouslySetInnerHTML={{ __html: result.answer }}
              />
              <td className="border border-neutral-700">
                {result.isCorrect ? "Correct" : "Incorrect"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4">
        <p className="text-lg">
          Total Correct Answers:{" "}
          {results.filter((result) => result.isCorrect).length}
        </p>
      </div>
    </>
  );
}
