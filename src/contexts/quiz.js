import { createContext, useReducer } from "react";
import { shuffleAnswers, normaliseQuestions } from "../helpers";

const initialState = {
  currentQuestionIndex: 0,
  questions: [],
  showResults: false,
  answers: [],
  currentAnswer: "",
  correctAnswersCount:0,
  error:null
};

const reducer = (state, action) => {
  switch(action.type){
    case "SELECT_ANSWER":{
      const correctAnswersCount = action.payload === state.questions[state.currentQuestionIndex].correctAnswer ? state.correctAnswersCount+1 : state.correctAnswersCount;
      return{
        ...state,
        currentAnswer: action.payload,
        correctAnswersCount
      };
    }
    case "NEXT_QUESTION":{
      const showResults = state.currentQuestionIndex === state.questions.length -1;
      const currentQuestionIndex = showResults ? state.currentQuestionIndex : state.currentQuestionIndex+1;
      const answers = showResults ? [] : shuffleAnswers(state.questions[currentQuestionIndex]);
      return {
        ...state,
        currentQuestionIndex,
        showResults,
        answers,
        currentAnswer:""
      };
    }
    case "RESTART":{ return initialState;}
    case "LOADED_QUESTIONS":{
      const normalisedQuestions = normaliseQuestions(action.payload);
      return { 
        ...state,
        questions: normalisedQuestions,
        answers:shuffleAnswers(normalisedQuestions[0])
      };
    }
    case "SERVER_ERROR": { return { ...state, error:action.payload}; }
    case "429_TOO_MANY_REQUESTS": { return { ...state, error:action.payload}; }
    default:{return state;}
  }
};

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const value = useReducer(reducer, initialState);
  console.log("state", value);
  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
