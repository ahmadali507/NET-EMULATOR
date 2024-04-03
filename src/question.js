let counter = 0 ;
let attempted =  false; 
const arrayofQuestions = [
  // first subject
  {
    title: "English",
    noOfMcqs: 4,
    Questions: [
      // this array will contain the questions as objects having different options.
      {
        statement: "This _ my watch.",
        key: "is",
        option1: "is",
        option2: "are",
        option3: "was",
        option4: "how",
      },
      {
        statement: "I usually go to bed _ 11 p.m.",
        key: "at",
        option1: "at",
        option2: "in",
        option3: "on",
        option4: "for",
      },
      {
        statement: "He _ to the movies every weekend.",
        key: "goes",
        option1: "goes",
        option2: "go",
        option3: "went",
        option4: "going",
      },
      {
        statement: "My sister _ a doctor.",
        key: "is",
        option1: "is",
        option2: "am",
        option3: "are",
        option4: "be",
      },
    ],
  },
  // second subject
  {
    title: "Maths",
    noOfMcqs: 6,
    Questions: [
      {
        statement: "The graph of logarithm lies in which quadrant/quadrants",
        key: "both a and b",
        option1: "I quadrant",
        option2: "IV quadrant",
        option3: "both a and b",
        option4: "II quadrant",
      },
      {
        statement:
          "The slope of the tangent to the curve y = x^2 at the point (3, 9) is",
        key: "6",
        option1: "9",
        option2: "3",
        option3: "6",
        option4: "12",
      },
      {
        statement: "The definite integral of 2x from 0 to 5 is",
        key: "25",
        option1: "10",
        option2: "20",
        option3: "15",
        option4: "25",
      },
      {
        statement: 'The second derivative of y = e^x is',
        key: 'e^x',
        option1: 'e^x',
        option2: '2e^x',
        option3: 'e^(x+1)',
        option4: 'e^(x-1)'
      },
      {
        statement: 'The integral of sin(x) with respect to x is',
        key: '-cos(x) + C',
        option1: '-cos(x)',
        option2: 'cos(x)',
        option3: '-sin(x) + C',
        option4: '-cos(x) + C'
      },
      {
        statement: 'The derivative of y = x^3 + 2x^2 + 5x - 7 is',
        key: '3x^2 + 4x + 5',
        option1: 'x^4 + 4x^3 + 5x^2',
        option2: '3x^2 + 4x + 5',
        option3: '3x^4 + 4x^3 + 5x^2',
        option4: 'x^2 + 2x + 5'
      },
    ],
  },
  //third subject
  {
    title : 'physics', 
    noOfMcqs : 6, 
    Questions : [
        {
          statement: "Which of the following is a vector quantity?",
          key: "Force",
          option1: "Mass",
          option2: "Speed",
          option3: "Temperature",
          option4: "Force",
        },
        {
          statement: "What is the SI unit of force?",
          key: "Newton",
          option1: "Joule",
          option2: "Watt",
          option3: "Pascal",
          option4: "Newton",
        },
        {
          statement: "Which law states that every object will remain at rest or in uniform motion in a straight line unless compelled to change its state by the action of an external force?",
          key: "Newton's First Law of Motion",
          option1: "Newton's First Law of Motion",
          option2: "Newton's Second Law of Motion",
          option3: "Newton's Third Law of Motion",
          option4: "Law of Gravitation",
        },
        {
          statement: "What is the SI unit of energy?",
          key: "Joule",
          option1: "Newton",
          option2: "Watt",
          option3: "Pascal",
          option4: "Joule",
        },
        {
          statement: "Which law states that for every action, there is an equal and opposite reaction?",
          key: "Newton's Third Law of Motion",
          option1: "Newton's First Law of Motion",
          option2: "Newton's Second Law of Motion",
          option3: "Newton's Third Law of Motion",
          option4: "Law of Gravitation",
        },
        {
          statement: "What is the acceleration due to gravity on the surface of the Earth?",
          key: "9.8 m/s^2",
          option1: "6.67 x 10^-11 Nm^2/kg^2",
          option2: "3.00 x 10^8 m/s",
          option3: "9.8 m/s^2",
          option4: "3.00 x 10^8 m/s^2",
        },
      ]

    
  },
  //fourth subject
  {
    title : 'Chemistry', 
    noOfMcqs : 4, 
    Questions : [
        {
          statement: "Which functional group is present in alcohols?",
          key: "Hydroxyl (-OH)",
          option1: "Carbonyl (C=O)",
          option2: "Hydroxyl (-OH)",
          option3: "Amino (-NH2)",
          option4: "Ester (R-COO-R')",
        },
        {
          statement: "What is the general formula for alkanes?",
          key: "CnH2n+2",
          option1: "CnH2n",
          option2: "CnH2n+2",
          option3: "CnH2n-2",
          option4: "CnH2n+1",
        },
        {
          statement: "Which type of isomerism is exhibited by compounds having the same molecular formula but different arrangements of atoms in space?",
          key: "Stereoisomerism",
          option1: "Structural Isomerism",
          option2: "Functional Isomerism",
          option3: "Positional Isomerism",
          option4: "Stereoisomerism",
        },
        {
            statement: "What is the chemical symbol for gold?",
            key: "Au",
            option1: "Ag",
            option2: "Fe",
            option3: "Au",
            option4: "Pb"
        }
      ]
  },
];

arrayofQuestions.forEach((subject, i) => 
{
    subject.Questions.forEach((question) =>{
        question.id = counter++; 
    })
}); 
// adding another property of attempted to the questions to check whether they have been previously attempted or not.
arrayofQuestions.forEach((subject, i) =>{
  subject.Questions.forEach((question) =>{
      question.attempted = false; 
  })
})
export default arrayofQuestions ; 
