import React from "react";
import './firstsection.css';
import { student } from '../assets'
import { useContext, useState } from "react";
import myContext from '../Context/conttext'
import { useEffect } from "react";
const FirstSection = () => {

  const { arrayofQuestions, attemptedChoice, NoAttempted } = useContext(myContext);
  const { questionNo, setQuestionNo, marks} = useContext(myContext);
  const {TotalMcqs, settotalMcqs} = useContext(myContext);

  let filteredQuestions = arrayofQuestions.map((subject) =>
  subject.Questions.filter((question) => question)); 

  // if user selected that only attempted questions are to be displayed.   
  if(attemptedChoice === 'Attempted'){
    filteredQuestions = arrayofQuestions.map((subject) => 
      subject.Questions.filter((question) => question.attempted === true)
    )

  }
  // for the unattempted questions by the user. 
  else if (attemptedChoice === 'Unattempted'){
    filteredQuestions = arrayofQuestions.map((subject) =>
     subject.Questions.filter((question) => question.attempted === false)
    )
  }

  filteredQuestions = filteredQuestions.flat(); 


   
  if(filteredQuestions.length === 0){
    filteredQuestions = arrayofQuestions.map((subject) =>
    subject.Questions.filter((question) => question)
  );
  filteredQuestions = filteredQuestions.flat();
  }
 

  settotalMcqs(filteredQuestions.length);
  useEffect(()=>{
    
    settotalMcqs(TotalMcqs - NoAttempted);
    
  }, [])
  
  console.log(marks);


  return (
    <div>
      <section id="first-section">

        <div className="question">
          <div className="question-number">
            <h4>Question No:</h4>
            <span className="question-number-out-of"> {questionNo + 1} of {filteredQuestions.length}</span>
          </div>
          <div className="question-statement">
            <span>Question</span>
            <textarea
              readOnly=""
              className="question-text-area"
              rows="7"
              spellCheck="false"
              value={filteredQuestions[questionNo]?.statement}
            />
          </div>
        </div>

        <div className="image">
          <span className="photograph-span">Photograph</span>
          <img
            className="student-image"
            src={student}
            alt="tasvir"
          />
        </div>
      </section>
    </div>
  );
};

export default FirstSection;