import { useState } from 'react'
import FirstSection from './components/FirstSection'
import Header from './components/Header'
import SecondSection from './components/SecondSection'
import ThirdSection from './components/ThirdSection'
import FinalSection from './components/FinalSection'
import arrayofQuestions from './question'
import myContext from './Context/conttext'
function App() {
  // this state will keep track of the question to be displayed
  const [questionNo, setQuestionNo] = useState(0);
  const [marks, setmarks] = useState(0);

  const [subjectNo, setsubjectNo] = useState(0);
  // creating another stae for the save button because it will be shared between first, final and third section.
  const [review , setReview] = useState(false);
 
 const [selectedChoice , setSelectedChoice] = useState(''); 
  // in attempted state i will use the numbers 0 , 1, 2, 3 for all , reveiwable , attempted, unattempted.
 const [attemptedChoice , setAttemptedChoice] = useState("");
 const [NoAttempted, setNoAttempted] = useState(0); 

 const [displayNo, setdisplayNo ] = useState(-1); 
 const [TotalMcqs, settotalMcqs] = useState(0); 

  return (
    <>
      <myContext.Provider
        value={{ arrayofQuestions, questionNo, setQuestionNo, subjectNo, setsubjectNo, TotalMcqs, settotalMcqs,
         review, setReview , attemptedChoice, setAttemptedChoice, NoAttempted,setNoAttempted,
         selectedChoice, setSelectedChoice, marks, setmarks, displayNo, setdisplayNo}}>
        <Header></Header>
        <FirstSection></FirstSection>
        <SecondSection></SecondSection>
        <ThirdSection></ThirdSection>
        <FinalSection></FinalSection>

      </myContext.Provider>
    </>
  )
}

export default App; 
