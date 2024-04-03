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
  // creating another stae for the save button because it will be shared between first, final and third section.
  const [review , setReview] = useState(false);
 const [selectedChoice , setSelectedChoice] = useState(''); 
  // in attempted state i will use the numbers 0 , 1, 2, 3 for all , reveiwable , attempted, unattempted.
 const [attemptedChoice , setAttemptedChoice] = useState("");
 const [NoAttempted, setNoAttempted] = useState(0); 
 const [TotalMcqs, settotalMcqs] = useState(0); 

 // creating a state of an array of objects that will contain the resullts based on segregation on different subjects. ......

 const [results, setResults] = useState([
     { subject : 'Mathematics' , score : 0},
     { subject : 'English' , score : 0},
     { subject : 'Physics' , score : 0},
     { subject : 'Chemistry' , score : 0}
    ]);
console.log(results)

  return (
    <>
      <myContext.Provider

        value={{ arrayofQuestions, questionNo, setQuestionNo, TotalMcqs, settotalMcqs, results, setResults,
         review, setReview , attemptedChoice, setAttemptedChoice, NoAttempted,setNoAttempted,
         selectedChoice, setSelectedChoice, marks, setmarks}}>

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
