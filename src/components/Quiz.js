// Quiz.js is the main root component now 
import { useContext } from "react";
import Question from "./Question";
import { QuizContext } from "../contexts/quiz";

const Quiz = () => {
    const [quizState, dispatch] = useContext(QuizContext);
    console.log("quizState", quizState);
    const arrayLength = quizState.questions.length;
    return (
      <div className="quiz">
        {quizState.showResults && (
            <div className="results">
                <div className="congratulations">Congratulations</div>
                <div className="results-info">
                    <div>You have completed the quiz.</div>
                    <div>You've got {quizState.correctAnswersCount} out of {quizState.questions.length}</div>
                </div>
                <div className="next-button" onClick={()=>dispatch({type:"RESTART"})}>Restart</div>
            </div>
        )}
        {!quizState.showResults && (
          <div>
            <div className="score"> Question {quizState.currentQuestionIndex+1}/{arrayLength} </div>
            <Question />
            <div className="next-button" onClick={() => dispatch({type:'NEXT_QUESTION'})}> Next Question </div>
          </div>
        )}
      </div>
    );
};

export default Quiz;