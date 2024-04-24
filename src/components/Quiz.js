// Quiz.js is the main root component now 
import { useReducer } from "react";
import Question from "./Question";

const initialState = {
    currentQuestionIndex: 0,
    questions: []
};

const reducer = (state, action)=>{
    if(action.type === "NEXT_QUESETION"){
        return { ...state, currentQuestionIndex: state.currentQuestionIndex+1};
    }
    return state;
};

const Quiz = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const testClick = () => {
        console.log('testClick');
    };
    return (
      <div className="quiz">
        <div>
          <div className="score"> Question 1/8 </div>
          <Question />
          <div className="next-button" onClick={testClick}>
            Next Question {state.currentQuestionIndex}
          </div>
        </div>
      </div>
    );
}

export default Quiz;