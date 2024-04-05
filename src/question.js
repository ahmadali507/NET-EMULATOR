let counter = 0;
let attempted = false;
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
    title: "Mathematics",
    noOfMcqs: 50,
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
        statement: "The second derivative of y = e^x is",
        key: "e^x",
        option1: "e^x",
        option2: "2e^x",
        option3: "e^(x+1)",
        option4: "e^(x-1)",
      },
      {
        statement: "The integral of sin(x) with respect to x is",
        key: "-cos(x) + C",
        option1: "-cos(x)",
        option2: "cos(x)",
        option3: "-sin(x) + C",
        option4: "-cos(x) + C",
      },
      {
        statement: "The derivative of y = x^3 + 2x^2 + 5x - 7 is",
        key: "3x^2 + 4x + 5",
        option1: "x^4 + 4x^3 + 5x^2",
        option2: "3x^2 + 4x + 5",
        option3: "3x^4 + 4x^3 + 5x^2",
        option4: "x^2 + 2x + 5",
      },
      {
        statement:
          "What is the equation of a circle with center (2, -3) and radius 5?",
        key: "(x - 2)^2 + (y + 3)^2 = 25",
        option1: "(x + 2)^2 + (y - 3)^2 = 25",
        option2: "(x - 2)^2 + (y + 3)^2 = 25",
        option3: "(x - 2)^2 + (y - 3)^2 = 5",
        option4: "(x + 2)^2 + (y + 3)^2 = 5",
      },
      {
        statement:
          "What are the coordinates of the focus of the parabola y^2 = 8x?",
        key: "(2, 0)",
        option1: "(0, 2)",
        option2: "(2, 0)",
        option3: "(0, -2)",
        option4: "(-2, 0)",
      },
      {
        statement:
          "What is the eccentricity of the ellipse with semi-major axis 6 and semi-minor axis 3?",
        key: "sqrt(3)/2",
        option1: "3/2",
        option2: "sqrt(3)",
        option3: "sqrt(3)/2",
        option4: "1/2",
      },
      {
        statement:
          "What is the equation of the asymptotes of the hyperbola x^2/9 - y^2/16 = 1?",
        key: "y = ±(4/3)x",
        option1: "y = ±(4/3)x",
        option2: "y = ±(3/4)x",
        option3: "y = ±(3/2)x",
        option4: "y = ±(2/3)x",
      },
      {
        statement:
          "What is the distance between the foci of the ellipse with major axis 10 and minor axis 6?",
        key: "2*sqrt(19)",
        option1: "10",
        option2: "6",
        option3: "2*sqrt(19)",
        option4: "4*sqrt(5)",
      },
      {
        statement:
          "What is the equation of the directrix of the parabola x^2 = 4py?",
        key: "y = -p",
        option1: "y = p",
        option2: "x = p",
        option3: "y = -p",
        option4: "x = -p",
      },
      {
        statement:
          "What is the focus-directrix property of the parabola y^2 = 12x?",
        key: "(3, 0)",
        option1: "(0, 3)",
        option2: "(3, 0)",
        option3: "(0, -3)",
        option4: "(-3, 0)",
      },
      {
        statement:
          "What is the eccentricity of the hyperbola with transverse axis 14 and conjugate axis 10?",
        key: "sqrt(29)/7",
        option1: "29/7",
        option2: "7/29",
        option3: "sqrt(29)/7",
        option4: "1/7",
      },
      {
        statement:
          "What is the slope of the line tangent to the ellipse x^2/16 + y^2/9 = 1 at the point (4, 0)?",
        key: "0",
        option1: "1",
        option2: "undefined",
        option3: "0",
        option4: "-1",
      },
      {
        statement: "What is the eccentricity of the parabola y^2 = 4ax?",
        key: "1",
        option1: "0",
        option2: "1/2",
        option3: "1",
        option4: "2",
      },
      {
        statement:
          "What is the equation of the parabola with focus (0, 3) and directrix y = -3?",
        key: "y = (1/4)x^2",
        option1: "y = (1/2)x^2",
        option2: "y = (1/4)x^2",
        option3: "y = 2x^2",
        option4: "y = 4x^2",
      },
      {
        statement:
          "What is the equation of the ellipse with foci (±4, 0) and major axis length 10?",
        key: "(x^2/25) + (y^2/9) = 1",
        option1: "(x^2/16) + (y^2/25) = 1",
        option2: "(x^2/9) + (y^2/25) = 1",
        option3: "(x^2/25) + (y^2/16) = 1",
        option4: "(x^2/25) + (y^2/9) = 1",
      },
      {
        statement:
          "What are the coordinates of the center of the hyperbola with vertices (±5, 0) and foci (±8, 0)?",
        key: "(0, 0)",
        option1: "(0, 0)",
        option2: "(5, 0)",
        option3: "(8, 0)",
        option4: "(3, 0)",
      },
      {
        statement:
          "What is the standard form equation of the ellipse with vertices (±3, 0) and co-vertices (0, ±2)?",
        key: "x^2/9 + y^2/4 = 1",
        option1: "x^2/4 + y^2/9 = 1",
        option2: "x^2/9 + y^2/4 = 1",
        option3: "x^2/3 + y^2/2 = 1",
        option4: "x^2/2 + y^2/3 = 1",
      },
      {
        statement: "What is the focus of the parabola y^2 = 16x?",
        key: "(4, 0)",
        option1: "(0, 4)",
        option2: "(4, 0)",
        option3: "(0, -4)",
        option4: "(-4, 0)",
      },
      {
        statement:
          "What is the eccentricity of the hyperbola x^2/16 - y^2/9 = 1?",
        key: "5/4",
        option1: "4/5",
        option2: "5/4",
        option3: "3/5",
        option4: "4/3",
      },
      {
        statement:
          "What is the standard equation of the ellipse with endpoints of the major axis (±5, 0) and endpoints of the minor axis (0, ±3)?",
        key: "x^2/25 + y^2/9 = 1",
        option1: "x^2/9 + y^2/25 = 1",
        option2: "x^2/25 + y^2/9 = 1",
        option3: "x^2/16 + y^2/9 = 1",
        option4: "x^2/9 + y^2/16 = 1",
      },
      {
        statement:
          "What is the equation of the ellipse with major axis along the y-axis, center (0, 0), and foci (0, ±√13)?",
        key: "x^2/4 + y^2/9 = 1",
        option1: "x^2/9 + y^2/4 = 1",
        option2: "x^2/4 + y^2/9 = 1",
        option3: "x^2/3 + y^2/2 = 1",
        option4: "x^2/2 + y^2/3 = 1",
      },
      {
        statement: "What is the focus of the hyperbola x^2/16 - y^2/25 = 1?",
        key: "(0, ±√41)",
        option1: "(±√41, 0)",
        option2: "(0, ±√41)",
        option3: "(±√16, 0)",
        option4: "(0, ±√16)",
      },
      {
        statement:
          "What is the equation of the parabola with vertex (0, 0) and focus (2, 0)?",
        key: "x = y^2/8",
        option1: "y = x^2/8",
        option2: "x = y^2/8",
        option3: "y = x^2/16",
        option4: "x = y^2/16",
      },
      {
        statement:
          "What is the formula to find the distance between two points (x1, y1) and (x2, y2) in a plane?",
        key: "√((x2 - x1)^2 + (y2 - y1)^2)",
        option1: "(x2 - x1) + (y2 - y1)",
        option2: "√((x2 - x1) * (y2 - y1))",
        option3: "|x2 - x1| + |y2 - y1|",
      },
      {
        statement:
          "What is the equation of a line passing through points (x1, y1) and (x2, y2)?",
        key: "y - y1 = (y2 - y1)/(x2 - x1) * (x - x1)",
        option1: "y = (y2 - y1)/(x2 - x1) * x",
        option2: "y = (x - x1) * (y - y1)",
        option3: "x = (x2 - x1)/(y2 - y1) * y",
      },
      {
        statement:
          "Which of the following is the midpoint formula for the line segment joining two points (x1, y1) and (x2, y2)?",
        key: "((x1 + x2)/2, (y1 + y2)/2)",
        option1: "((x2 - x1)/2, (y2 - y1)/2)",
        option2: "((x1 + x2), (y1 + y2))",
        option3: "((x1 - x2)/2, (y1 - y2)/2)",
      },
      {
        statement:
          "What is the slope of a line passing through points (x1, y1) and (x2, y2)?",
        key: "(y2 - y1)/(x2 - x1)",
        option1: "(x2 - x1)/(y2 - y1)",
        option2: "(x1 - x2)/(y1 - y2)",
        option3: "(y1 - y2)/(x1 - x2)",
      },
      {
        statement:
          "What is the y-intercept of a line with equation y = mx + c?",
        key: "c",
        option1: "m",
        option2: "x",
        option3: "mx",
      },
      {
        statement: "What is the slope of a horizontal line?",
        key: "0",
        option1: "1",
        option2: "∞",
        option3: "0",
      },
      {
        statement:
          "What is the equation of a vertical line passing through the point (a, b)?",
        key: "x = a",
        option1: "y = b",
        option2: "x = b",
        option3: "y = a",
      },
      {
        statement:
          "What is the condition for two lines with slopes m1 and m2 to be perpendicular?",
        key: "m1 * m2 = -1",
        option1: "m1 + m2 = 1",
        option2: "m1 * m2 = 1",
        option3: "m1 * m2 = -1",
      },
      {
        statement:
          "What is the equation of a line parallel to the x-axis passing through the point (a, b)?",
        key: "y = b",
        option1: "x = b",
        option2: "y = a",
        option3: "x = a",
      },
      {
        statement:
          "What is the distance between a point (x, y) and a line Ax + By + C = 0?",
        key: "|Ax + By + C|/√(A^2 + B^2)",
        option1: "|Ax + By|/√(A^2 + B^2)",
        option2: "|Ax + By + C|/(A^2 + B^2)",
        option3: "|Ax + By + C|/√(A + B)",
      },
      // Basic Level Trigonometry MCQs

      {
        statement: "What is the trigonometric ratio for sine?",
        key: "Opposite/Hypotenuse",
        option1: "Adjacent/Hypotenuse",
        option2: "Opposite/Adjacent",
        option3: "Hypotenuse/Adjacent",
      },
      {
        statement: "What is the trigonometric ratio for cosine?",
        key: "Adjacent/Hypotenuse",
        option1: "Opposite/Adjacent",
        option2: "Opposite/Hypotenuse",
        option3: "Hypotenuse/Adjacent",
      },
      {
        statement: "What is the trigonometric ratio for tangent?",
        key: "Opposite/Adjacent",
        option1: "Opposite/Hypotenuse",
        option2: "Adjacent/Hypotenuse",
        option3: "Hypotenuse/Adjacent",
      },
      {
        statement: "What is the value of sin(90°)?",
        key: "1",
        option1: "0",
        option2: "1",
        option3: "-1",
      },
      {
        statement: "What is the value of cos(0°)?",
        key: "1",
        option1: "0",
        option2: "1",
        option3: "-1",
      },

      // Intermediate Level Trigonometry MCQs

      {
        statement: "What is the value of tan(45°)?",
        key: "1",
        option1: "0",
        option2: "1",
        option3: "-1",
      },
      {
        statement: "What is the value of sin(30°)?",
        key: "1/2",
        option1: "1",
        option2: "1/2",
        option3: "√3/2",
      },
      {
        statement: "What is the value of cos(60°)?",
        key: "1/2",
        option1: "1",
        option2: "1/2",
        option3: "√3/2",
      },
      {
        statement: "What is the value of tan(60°)?",
        key: "√3",
        option1: "1",
        option2: "√3",
        option3: "1/√3",
      },
      {
        statement: "What is the value of sin(45°)?",
        key: "√2/2",
        option1: "1",
        option2: "√2/2",
        option3: "1/√2",
      },

      // Hard Level Trigonometry MCQs

      {
        statement: "What is the value of tan(30°)?",
        key: "1/√3",
        option1: "1/√3",
        option2: "√3",
        option3: "1/2",
      },
      {
        statement: "What is the value of cos(45°)?",
        key: "√2/2",
        option1: "1",
        option2: "√2/2",
        option3: "1/√2",
      },
      {
        statement: "What is the value of sin(60°)?",
        key: "√3/2",
        option1: "1",
        option2: "1/2",
        option3: "√3/2",
      },
      {
        statement: "What is the value of cos(30°)?",
        key: "√3/2",
        option1: "1",
        option2: "1/2",
        option3: "√3/2",
      }
    ],
  },
  //third subject
  {
    title: "Physics",
    noOfMcqs: 6,
    Questions: [
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
        statement:
          "Which law states that every object will remain at rest or in uniform motion in a straight line unless compelled to change its state by the action of an external force?",
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
        statement:
          "Which law states that for every action, there is an equal and opposite reaction?",
        key: "Newton's Third Law of Motion",
        option1: "Newton's First Law of Motion",
        option2: "Newton's Second Law of Motion",
        option3: "Newton's Third Law of Motion",
        option4: "Law of Gravitation",
      },
      {
        statement:
          "What is the acceleration due to gravity on the surface of the Earth?",
        key: "9.8 m/s^2",
        option1: "6.67 x 10^-11 Nm^2/kg^2",
        option2: "3.00 x 10^8 m/s",
        option3: "9.8 m/s^2",
        option4: "3.00 x 10^8 m/s^2",
      },
    ],
  },
  //fourth subject
  {
    title: "Chemistry",
    noOfMcqs: 4,
    Questions: [
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
        statement:
          "Which type of isomerism is exhibited by compounds having the same molecular formula but different arrangements of atoms in space?",
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
        option4: "Pb",
      },
    ],
  },
];

arrayofQuestions.forEach((subject, i) => {
  subject.Questions.forEach((question) => {
    question.id = counter++;
  });
});
// adding another property of attempted to the questions to check whether they have been previously attempted or not.
arrayofQuestions.forEach((subject, i) => {
  subject.Questions.forEach((question) => {
    question.attempted = false;
  });
});
export default arrayofQuestions;
