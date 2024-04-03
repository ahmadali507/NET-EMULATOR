import React from 'react'
import './ThirdSection.css'

import { useContext, useState } from "react";
import myContext from "../Context/conttext.js";
const ThirdSection = () => {


    const { arrayofQuestions,  setSelectedChoice, attemptedChoice } = useContext(myContext);
    const { questionNo,  setSavebutton , selectedChoice} = useContext(myContext);

    let filteredOptions = arrayofQuestions.map((subject) =>
        subject.Questions.filter((question) => question)
    );

    if (attemptedChoice === 'Attempted') {
        filteredOptions = arrayofQuestions.map((subject) =>
        subject.Questions.filter((question) => question.attempted === true)
        );
    }
    if (attemptedChoice === 'Unattempted') {
        filteredOptions = arrayofQuestions.map((subject) =>
        subject.Questions.filter((question) => question.attempted === false)
        );
    }
    filteredOptions = filteredOptions.flat();

  if(filteredOptions.length === 0){
    filteredOptions = arrayofQuestions.map((subject) =>
    subject.Questions.filter((question) => question)
  );
  filteredOptions = filteredOptions.flat();
  }

    const inputcheck = (e) => {
        const value = e.target.value;
        setSelectedChoice(value);
    }
    console.log(selectedChoice)
    return (
        <div>
            <section id="options-section">
                <div className="option">
                    <input type="radio" name="options" onChange={inputcheck} value={filteredOptions[questionNo]?.option1} />
                    <textarea className="option-text-area" rows="3" spellcheck="false" readonly="" value={filteredOptions[questionNo]?.option1}>

                        {filteredOptions[questionNo]?.option1}
                    </textarea>
                </div>
                <div className="option">
                    <input type="radio" name="options" onChange={inputcheck} value={filteredOptions[questionNo]?.option2} />
                    <textarea className="option-text-area" rows="3" spellcheck="false" readonly="" value={filteredOptions[questionNo]?.option2}>
                        {filteredOptions[questionNo]?.option2}</textarea>
                </div>
                <div className="option">
                    <input type="radio" name="options" onChange={inputcheck} value={filteredOptions[questionNo]?.option3} />
                    <textarea className="option-text-area" rows="3" spellcheck="false" readonly="" value={filteredOptions[questionNo]?.option3}>
                        {filteredOptions[questionNo]?.option3}
                    </textarea>
                </div>
                <div className="option">
                    <input type="radio" name="options" onChange={inputcheck} value={filteredOptions[questionNo]?.option4} />
                    <textarea className="option-text-area" rows="3" spellcheck="false" readonly="" value={filteredOptions[questionNo]?.option4}>{filteredOptions[questionNo]?.option4}</textarea>
                </div>

            </section>

        </div>
    )
}

export default ThirdSection
