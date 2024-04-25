export const shuffleAnswers = (question) => {
  const unshuffledAnswers = [
    question.correctAnswer,
    ...question.incorrectAnswers,
  ];

  return unshuffledAnswers
    .map((unshuffledAnswer) => ({
      sort: Math.random(),
      value: unshuffledAnswer,
    }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value);
};

// export const normaliseQuestions = (backendQuestions) => {
//   return backendQuestions.map((backendQuestion) => {
//     const incorrectAnswers = backendQuestion.incorrect_answers.map((incorrectAnswer) => decodeURIComponent(incorrectAnswer));
//     return {
//       correctAnswer: decodeURIComponent(backendQuestion.correct_answer),
//       question: decodeURIComponent(backendQuestion.question),
//       incorrectAnswers,
//     };
//   });
// };

export const normaliseQuestions = (backendQuestions) => {
  const x =  backendQuestions.map((backendQuestion) => {
    // const incorrectAnswers = backendQuestion.incorrect_answers.map((incorrectAnswer) => decodeURIComponent(incorrectAnswer));
    return {
      correctAnswer: "",
      question: [],
      incorrectAnswers: [],
    };
  });

  return x;
};