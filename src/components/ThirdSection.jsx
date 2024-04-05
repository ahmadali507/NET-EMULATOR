import React from 'react'
import './ThirdSection.css'

import { useContext, useState } from "react";
import myContext from "../Context/conttext.js";
const ThirdSection = () => {


    const { arrayofQuestions,  setSelectedChoice, attemptedChoice } = useContext(myContext);
    const { questionNo,  setSavebutton , selectedChoice , filtered, Setfiltered} = useContext(myContext);

//     let filtered = arrayofQuestions.map((subject) =>
//         subject.Questions.filter((question) => question)
//     );

//     if (attemptedChoice === 'Attempted') {
//         filtered = arrayofQuestions.map((subject) =>
//         subject.Questions.filter((question) => question.attempted === true)
//         );
//     }
//     if (attemptedChoice === 'Unattempted') {
//         filtered = arrayofQuestions.map((subject) =>
//         subject.Questions.filter((question) => question.attempted === false)
//         );
//     }
//     filtered = filtered.flat();

//   if(filtered.length === 0){
//     filtered = arrayofQuestions.map((subject) =>
//     subject.Questions.filter((question) => question)
//   );
//   filtered = filtered.flat();
//   }

    const inputcheck = (e) => {
        const value = e.target.value;
        setSelectedChoice(value);
        filtered[questionNo].attempted = true; 
    }
    console.log(selectedChoice)
    return (
        <div>
            <section id="options-section">
                <div className="option">
                    <input type="radio" name="options" onChange={inputcheck} value={filtered[questionNo]?.option1} />
                    <textarea className="option-text-area" rows="3" spellcheck="false" readonly="" value={filtered[questionNo]?.option1}>

                        {filtered[questionNo]?.option1}
                    </textarea>
                </div>
                <div className="option">
                    <input type="radio" name="options" onChange={inputcheck} value={filtered[questionNo]?.option2} />
                    <textarea className="option-text-area" rows="3" spellcheck="false" readonly="" value={filtered[questionNo]?.option2}>
                        {filtered[questionNo]?.option2}</textarea>
                </div>
                <div className="option">
                    <input type="radio" name="options" onChange={inputcheck} value={filtered[questionNo]?.option3} />
                    <textarea className="option-text-area" rows="3" spellcheck="false" readonly="" value={filtered[questionNo]?.option3}>
                        {filtered[questionNo]?.option3}
                    </textarea>
                </div>
                <div className="option">
                    <input type="radio" name="options" onChange={inputcheck} value={filtered[questionNo]?.option4} />
                    <textarea className="option-text-area" rows="3" spellcheck="false" readonly="" value={filtered[questionNo]?.option4}>{filtered[questionNo]?.option4}</textarea>
                </div>

            </section>

        </div>
    )
}

export default ThirdSection
