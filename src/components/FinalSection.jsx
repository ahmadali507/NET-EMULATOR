import React from "react";
import "./FinalSection.css";
import { Link } from "react-router-dom";
// importing images from assets/photos/paths of the images.....
import { First, active_prev } from "../assets/index.js";
import { Help } from "../assets/index.js";
import { Last } from "../assets/index.js";
import { NEXT } from "../assets/index.js";
import { NextSection } from "../assets/index.js";
import { active_prevsection } from "../assets/index.js";
import { Prev } from "../assets/index.js";
import { PrevSection } from "../assets/index.js";
import { Save } from "../assets/index.js";
import { Review } from "../assets/index.js";
import { useContext, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import myContext from "../Context/conttext.js";
import { ActiveSave } from '../assets/index.js'
import { ActiveReview } from '../assets/index.js'
import TestScores from './TestScores.jsx'

const FinalSection = () => {
  const { results, setresults } = useContext(myContext);
  console.log(results)
  // getting the count out to set it ,
  const { questionNo, setQuestionNo } = useContext(myContext);
  const { NoAttempted, setNoAttempted } = useContext(myContext);
  const { review, setReview, attemptedChoice, setAttemptedChoice } = useContext(myContext);
  const { selectedChoice, marks, setmarks } = useContext(myContext);
  const { TotalMcqs } = useContext(myContext);
  const {filtered, dropdown} = useContext(myContext);
  const { arrayofQuestions } = useContext(myContext);

  // let filtered = arrayofQuestions.map((subject) =>
  //   subject.Questions.filter((question) => question)
  // );

  // let dropdown = 'All'

  // if (attemptedChoice === 'Attempted') {
  //   filtered = arrayofQuestions.map((subject) =>
  //     subject.Questions.filter((question) => question.attempted === true)
  //   );
  //   dropdown = 'Attempted';
  // }
  // if (attemptedChoice === 'Unattempted') {
  //   filtered = arrayofQuestions.map((subject) =>
  //     subject.Questions.filter((question) => question.attempted === false)
  //   );
  //   dropdown = 'Unattempted'
  // }

  // filtered = filtered.flat();

  // if (filtered.length === 0) {
  //   filtered = arrayofQuestions.map((subject) =>
  //     subject.Questions.filter((question) => question)
  //   );
  //   filtered = filtered.flat();
  //   setAttemptedChoice("All")
  //   dropdown = 'All'
  // }

  // segregating the current question then getting the title from the questions 
  const question = filtered[questionNo];
  // Finding the subject title associated with the question
  const subjectIndex = arrayofQuestions.findIndex((subject) =>
    subject.Questions.some((q) => q.id === question?.id)
  );
  const subjectTitle = arrayofQuestions[subjectIndex]?.title;
  console.log(subjectTitle)

  // writing the onclick to move the counter.
  const handlenextClick = () => {
    if (questionNo === TotalMcqs - 1) {
      setQuestionNo(0);
    }
    else {
      // if (questionNo >= 0) {
      //   setPrevStatus(true);
      // }
      // setPrevSectionstatus(true);
      setQuestionNo(questionNo + 1);
    }

  };
  // to handle the last click we defint almost the similar function
  const handleprevClick = () => {
    if ((questionNo !== (TotalMcqs)) && questionNo !== 0) {
      if (questionNo === 1) {
        setQuestionNo(questionNo - 1);
        // setPrevStatus(false);
        // setPrevSectionstatus(false);
      }
      setQuestionNo(questionNo - 1);
    }
  };
  // to handle the section shifter where 
  const handdleNextSection = () => {
    if (questionNo <= 19 && TotalMcqs > 20) {
      setQuestionNo(20);
    }
    else if (questionNo > 19 && questionNo <= 99 && TotalMcqs > 100) {
      setQuestionNo(100);
    }
    else if (questionNo > 99 && questionNo <= 159 && TotalMcqs > 160) {
      setQuestionNo(160);
    }
    else if (questionNo > 159 && questionNo <= 189 && TotalMcqs > 189) {
      setQuestionNo(190);
    }
    else if (questionNo > 189 && questionNo <= 199 && TotalMcqs > 199) {
      setQuestionNo(0);
    }
    // to set the prevsection buttons to on light we make their state true on each press on next section..
    // setPrevSectionstatus(true);
    // setPrevStatus(true);
  }
  // bringing the user back to the first section.



  const handlePrevSection = () => {
    if (questionNo <= 19) {
      setQuestionNo(0);
      // setPrevSectionstatus(false);
      // setPrevStatus(false);
    }
    if (questionNo > 19 && questionNo <= 99) {
      setQuestionNo(0);
    }
    if (questionNo > 99 && questionNo <= 159) {
      setQuestionNo(20);
    }
    if (questionNo > 159 && questionNo <= 189) {
      setQuestionNo(100);
    }
    if (questionNo > 189 && questionNo <= 199) {
      setQuestionNo(160);
    }
  }
  // to set the prevsection buttons to on light we make their state true on each press on next section..

  const handlefirst = () => {
    setQuestionNo(0);
    // setPrevSectionstatus(false)
    // setPrevStatus(false);
  };

  const handlelast = () => {
    // setPrevSectionstatus(true)
    // setPrevStatus(true);
    setQuestionNo(TotalMcqs - 1);
  };
  // write a handler function for the savebutton 

  const handlesave = () => {
    setReview(true);
    setNoAttempted(NoAttempted + 1)
    // the user gets the mark only if the mcqs is not attempte first
    if ((filtered[questionNo].key === selectedChoice)) {
      setmarks(marks + 1);
      const subjectIndex = results.findIndex(
        (result) => result.subject === subjectTitle
      );

      // Create a copy of the results array to update the score
      const updatedResults = [...results];

      // Increment the score for the corresponding subject
      updatedResults[subjectIndex] = {
        ...updatedResults[subjectIndex],
        score: updatedResults[subjectIndex].score + 1,
      };
      // Update the state with the new results array
      setresults(updatedResults);

    }
    if (selectedChoice === '' && !(filtered[questionNo].attempted)) {
      filtered[questionNo].attempted = false;
    }
    else
      filtered[questionNo].attempted = true;

  }

  // console.log(results);


  const handleReview = () => {
    setReview(false);

  }

  const handlechange = (e) => {
    setAttemptedChoice(e.target.value);
    setQuestionNo(0);
    e.target.value = dropdown;

  }

  const handleoptionNo = (e) => {
    setQuestionNo(e.target.value - 1);
  }
  // write  a function to generate the 76 options in js


  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 0,
    seconds: 0
  })

  const navigate = useNavigate();
  // now we have to update time in the box 
  useEffect(() => {
    const interval = setInterval(() => {
      // Calculate the total remaining time in seconds
      const totalRemainingSeconds = (timeLeft.hours * 3600) + (timeLeft.minutes * 60) + timeLeft.seconds;

      // Decrease the total remaining time by one second
      const newTotalRemainingSeconds = totalRemainingSeconds - 1;

      // Calculate the new hours, minutes, and seconds
      const newHours = Math.floor(newTotalRemainingSeconds / 3600);
      const newMinutes = Math.floor((newTotalRemainingSeconds % 3600) / 60);
      const newSeconds = newTotalRemainingSeconds % 60;

      const routepro = '/TestScores';

      // Update the state with the new remaining time
      setTimeLeft({
        hours: newHours,
        minutes: newMinutes,
        seconds: newSeconds
      });

      // If the remaining time reaches 0, clear the interval
      if (newTotalRemainingSeconds === 0) {
        clearInterval(interval);
        navigate('/testscores');
      }
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, [timeLeft]); // Run the effect whenever timeLeft changes
  // No dependencies, runs only once when component mounts
  console.log(timeLeft);





  return (
    <div>
      <section id="final-section">
        <div className="functionalities">
          <div className="dropdown-container">
            <div className="countdown-container">
              <div className="countdown-box">
                <div className="countdown-number">{timeLeft.hours}</div>
              </div>
              <div className="countdown-separator">:</div>
              <div className="countdown-box">
                <div className="countdown-number">{timeLeft.minutes}</div>
              </div>
              <div className="countdown-separator">:</div>
              <div className="countdown-box">
                <div className="countdown-number">{timeLeft.seconds}</div>
              </div>
            </div>
            <select name="status" className="dropdown allDropdown" onChange={handleoptionNo}>
              {Array(20)
                .fill(" ")
                .map((_, i) => {
                  return <option key={i}>{i + 1}</option>;
                })}
            </select>
            <select name="status" className="dropdown" onChange={handlechange}>
              {/* Attach onClick event to each option */}
              <option value="All" >All</option>
              <option value="Attempted" >Attempted</option>
              <option value="Unattempted" >Unattempted</option>
            </select>

          </div>
          <div className="buttons-container">

            <div className="buttons-list">

              <input
                type="image"
                src={(filtered[questionNo]?.attempted) ? ActiveSave : Save}
                alt="save"
                onClick={handlesave}
                disabled=""
              />
              <input
                type="image"
                src={(questionNo > 0) ? active_prev : Prev}
                onClick={handleprevClick}
                alt="save"
              />
              <input
                type="image"
                src={(questionNo > 0) ? active_prevsection : PrevSection}
                onClick={handlePrevSection}
                alt="save"
                disabled=""
              />
              <input
                type="image"
                src={(review) ? ActiveReview : Review}
                alt="save"
                onClick={handleReview}
                disabled="" />
              <input
                type="image"
                src={NextSection}
                onClick={handdleNextSection}
                alt="save"
              />
              <input
                type="image"
                src={NEXT}
                onClick={handlenextClick}
                alt="save"
                disabled=""
              />
              <input
                type="image"
                src={First}
                onClick={handlefirst}
                alt="save"
              />
              <input type="image" src={Last} onClick={handlelast} alt="save" />
            </div>
          </div>
        </div>

        <div className="finish-test">
          <p className="finishing-paragraph">
            Click here to <Link to="/TestScores"><span>FINISH</span></Link> your test!
          </p>
        </div>

      </section>
      <h3 id="ending">
        This demo test is provided solely for demonstration purposes to aid
        students and is not an <span>OFFICIAL</span> entry test of NUST.
      </h3>
    </div>
  );
};

export default FinalSection;
