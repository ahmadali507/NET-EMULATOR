
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FirstSection from './components/FirstSection'
import Header from './components/Header'
import SecondSection from './components/SecondSection'
import ThirdSection from './components/ThirdSection'
import FinalSection from './components/FinalSection'
import arrayofQuestions from './question'
import myContext from './Context/conttext'
import TestScores from './components/TestScores'
import Home from './Home';

function App() {

  const [questionNo, setQuestionNo] = useState(0);
  const [marks, setmarks] = useState(0);
  // creating another stae for the save button because it will be shared between first, final and third section.
  const [review, setReview] = useState(false);
  const [selectedChoice, setSelectedChoice] = useState('');
  // in attempted state i will use the numbers 0 , 1, 2, 3 for all , reveiwable , attempted, unattempted.
  const [attemptedChoice, setAttemptedChoice] = useState("");
  const [NoAttempted, setNoAttempted] = useState(0);
  const [TotalMcqs, settotalMcqs] = useState(0);
  const [results, setresults] = useState([
    { subject: 'Mathematics', score: 0, total : 6 , checked : false},
    { subject: 'English', score: 0    , total : 4 , checked : false},
    { subject: 'Physics', score: 0    , total : 6 , checked : false},
    { subject: 'Chemistry', score: 0  , total : 3 , checked : false}
  ])
  const [dropdown, setdropdown] = useState('All'); 
  
  const [filtered, Setfiltered] = useState([]);
  
  useEffect(() => {
    let newFilteredOptions = arrayofQuestions.map((subject) =>
      subject.Questions.filter((question) => question)
    ).flat();
  
    if (attemptedChoice === 'Attempted') {
      newFilteredOptions = newFilteredOptions.filter((question) => question.attempted === true);
      setdropdown('Attempted');
    } else if (attemptedChoice === 'Unattempted') {
      newFilteredOptions = newFilteredOptions.filter((question) => question.attempted === false);
      setdropdown('Unattempted');
    }
  
    if (newFilteredOptions.length === 0) {
      newFilteredOptions = arrayofQuestions.map((subject) =>
        subject.Questions.filter((question) => question)
      ).flat();
      setAttemptedChoice('All');
      setdropdown('All');
    }
  
    Setfiltered(newFilteredOptions);
  }, [filtered, attemptedChoice]); // Only trigger effect when filteredOptions or attemptedChoice changes
  



  return (

    <myContext.Provider
    value={{
      arrayofQuestions, questionNo, setQuestionNo, TotalMcqs, settotalMcqs, dropdown, setdropdown,
      review, setReview, attemptedChoice, setAttemptedChoice, NoAttempted, setNoAttempted,
      selectedChoice, setSelectedChoice, marks, setmarks, results, setresults, filtered, Setfiltered
    }}>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/testscores" element={<TestScores />} />
      </Routes>
    </Router>
      </myContext.Provider>
  );
}

export default App;