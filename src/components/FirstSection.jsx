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
  const {filtered, setfiltered} = useContext(myContext);

  // settotalMcqs(filtered.length);
  // useEffect(()=>{
    
  //   settotalMcqs(TotalMcqs - NoAttempted);
    
  // }, [])
  settotalMcqs(filtered.length);


  return (
    <div>
      <section id="first-section">

        <div className="question">
          <div className="question-number">
            <h4>Question No:</h4>
            <span className="question-number-out-of"> {questionNo + 1} of {filtered.length}</span>
          </div>
          <div className="question-statement">
            <span>Question</span>
            <textarea
              readOnly=""
              className="question-text-area"
              rows="7"
              spellCheck="false"
              value={filtered[questionNo]?.statement}
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