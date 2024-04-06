let counter = 0;
let attempted = false;
const arrayofQuestions = [
  // first subject
  {
    title: "English",
    noOfMcqs: 20,
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
      // Synonyms Based MCQs

{
  statement: "Choose the synonym for the word 'ubiquitous':",
  key: "omnipresent",
  option1: "sporadic",
  option2: "ephemeral",
  option3: "omnipresent",
  option4: "transient"
},
{
  statement: "Select the synonym for the term 'prolific':",
  key: "fecund",
  option1: "fecund",
  option2: "barren",
  option3: "sparse",
  option4: "meager"
},
{
  statement: "Identify the synonym for the word 'penchant':",
  key: "inclination",
  option1: "aversion",
  option2: "repulsion",
  option3: "antipathy",
  option4: "inclination"
},
{
  statement: "Choose the synonym for 'efficacious':",
  key: "potent",
  option1: "ineffectual",
  option2: "potent",
  option3: "feeble",
  option4: "impotent"
},

// Analogy Based MCQs

{
  statement: "Complete the analogy: Dog is to bark as cat is to ________.",
  key: "meow",
  option1: "chirp",
  option2: "growl",
  option3: "meow",
  option4: "squeak"
},
{
  statement: "Fill in the analogy: Ocean is to water as desert is to ________.",
  key: "sand",
  option1: "sand",
  option2: "snow",
  option3: "mud",
  option4: "rocks"
},
{
  statement: "Complete the analogy: Night is to darkness as day is to ________.",
  key: "light",
  option1: "shadow",
  option2: "light",
  option3: "dusk",
  option4: "gloom"
},
{
  statement: "Fill in the analogy: Bird is to nest as spider is to ________.",
  key: " web",
  option1: "burrow",
  option2: "hive",
  option3: "hole",
  option4: "web"
}, 
{
  statement: "Complete the sentence: The cat sat on the ________.",
  key: "mat",
  option1: "rug",
  option2: "chair",
  option3: "table",
  option4: "mat"
},
{
  statement: "Fill in the blank: She ________ to the store to buy some groceries.",
  key: "went",
  option1: "go",
  option2: "went",
  option3: "going",
  option4: "gone"
},
{
  statement: "Choose the correct word to complete the sentence: The children are playing ________ in the park.",
  key: "happily",
  option1: "happily",
  option2: "happy",
  option3: "happiness",
  option4: "happier"
},
{
  statement: "Fill in the blank with the appropriate pronoun: Sarah said she would bring ________ own lunch.",
  key: "her",
  option1: "her",
  option2: "his",
  option3: "its",
  option4: "their"
},
{
  statement: "Complete the sentence with the correct preposition: The book is ________ the table.",
  key: "on",
  option1: "in",
  option2: "at",
  option3: "on",
  option4: "under"
},
{
  statement: "Read the following paragraph and answer the question: The sun rises in the ________ and sets in the ________. [Paragraph] Every morning, as dawn breaks, the sky is painted in hues of orange and pink. This magnificent sight marks the beginning of a new day. As the sun emerges from the horizon, it casts its golden rays across the land, bringing warmth and light to all. At dusk, the sky transforms once again, as the sun bids farewell, sinking below the horizon in a breathtaking display of colors.",
  key: "east, west",
  option1: "south, north",
  option2: "west, east",
  option3: "east, west",
  option4: "north, south"
},
{
  statement: "Read the following paragraph and complete the sentence: The main character of the story was a young boy named ________. [Paragraph] In the heart of the enchanted forest, there lived a young boy who possessed a rare gift. His name was Jack, and he had the ability to communicate with animals. Jack spent his days exploring the depths of the forest, accompanied by his loyal companions, a wise owl named Luna and a mischievous squirrel named Nutmeg.",
  key: "Jack",
  option1: "Emily",
  option2: "Sophia",
  option3: "Jacob",
  option4: "Jack"
},
{
  statement: "Read the following paragraph and choose the correct answer: What did the protagonist find at the end of the maze? [Paragraph] Deep within the heart of the ancient maze, the protagonist ventured forth, guided only by the flickering light of a torch. The labyrinth seemed endless, with twists and turns at every corner. Despite the daunting challenge, the protagonist persevered, driven by the promise of untold riches rumored to lie at the maze's center. Finally, after what felt like an eternity, the protagonist reached the end of the maze.",
  key: "treasure",
  option1: "monster",
  option2: "treasure",
  option3: "trap",
  option4: "exit"
}




    ],
  },
  // second subject
  {
    title: "Mathematics",
    noOfMcqs: 80,
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
      },
      {
        statement: "What is the nth term of the arithmetic sequence: 3, 7, 11, 15, ...?",
        key: "4n - 1",
        option1: "3n + 1",
        option2: "4n - 1",
        option3: "3n - 1",
        option4: "4n + 1",
      },
      {
        statement: "What is the sum of the first 20 terms of the arithmetic sequence: 3, 7, 11, 15, ...?",
        key: "620",
        option1: "520",
        option2: "620",
        option3: "720",
        option4: "820",
      },
      
      // Geometric Series and Sequences
      
      {
        statement: "What is the nth term of the geometric sequence: 2, 6, 18, 54, ...?",
        key: "2 * 3^(n-1)",
        option1: "2 * 3^(n-1)",
        option2: "3 * 2^(n-1)",
        option3: "6 * 3^(n-1)",
        option4: "2 * 6^(n-1)",
      },
      {
        statement: "What is the sum of the first 10 terms of the geometric sequence: 3, 6, 12, 24, ...?",
        key: "88572",
        option1: "546",
        option2: "885",
        option3: "88572",
        option4: "675",
      },
      
      // Harmonic Series and Sequences
      
      {
        statement: "What is the nth term of the harmonic sequence: 1/2, 1/3, 1/4, 1/5, ...?",
        key: "1/n",
        option1: "1/n",
        option2: "1/(n+1)",
        option3: "1/(n-1)",
        option4: "1/(2n)",
      },
      {
        statement: "What is the sum of the first 10 terms of the harmonic series: 1/2 + 1/3 + 1/4 + ...?",
        key: "2.929",
        option1: "3.345",
        option2: "2.929",
        option3: "2.718",
        option4: "3.141",
      },
      
      // Sigma Notation
      
      {
        statement: "What is the sum of the series: Σ(k^2), where k ranges from 1 to 5?",
        key: "55",
        option1: "15",
        option2: "35",
        option3: "55",
        option4: "65",
      },
      {
        statement: "What is the sum of the series: Σ(3n - 1), where n ranges from 1 to 10?",
        key: "145",
        option1: "115",
        option2: "135",
        option3: "145",
        option4: "155",
      },
      
      // General Derivations
      
      {
        statement: "What is the formula for the nth term of an arithmetic sequence?",
        key: "a + (n - 1)d",
        option1: "a + nd",
        option2: "an + d",
        option3: "a - (n - 1)d",
        option4: "a - nd",
      },
      {
        statement: "What is the formula for the sum of the first n terms of an arithmetic series?",
        key: "n/2(2a + (n - 1)d)",
        option1: "n/2(2a + nd)",
        option2: "n(2a + d)",
        option3: "n/2(2a - (n - 1)d)",
        option4: "n/2(2a + (n - 1)d)",
      },
      {
        statement: "If you randomly select a card from a standard deck of 52 cards, what is the probability of selecting a red card?",
        key: "1/2",
        option1: "1/3",
        option2: "1/2",
        option3: "2/3",
        option4: "1/4",
      },
      {
        statement: "In a bag, there are 5 red balls and 3 green balls. If one ball is randomly selected, what is the probability of selecting a red ball?",
        key: "5/8",
        option1: "3/8",
        option2: "5/8",
        option3: "2/5",
        option4: "3/5",
      },
      
      // Permutation
      
      {
        statement: "In how many ways can 5 people be arranged in a row?",
        key: "120",
        option1: "20",
        option2: "60",
        option3: "120",
        option4: "720",
      },
      {
        statement: "How many different arrangements can be made from the letters of the word 'APPLE'?",
        key: "60",
        option1: "20",
        option2: "30",
        option3: "60",
        option4: "120",
      },
      {
        statement: "In how many ways can the letters of the word 'COMPUTER' be arranged?",
        key: "40320",
        option1: "720",
        option2: "5040",
        option3: "40320",
        option4: "362880",
      },
      
      // Circular Permutation
      
      {
        statement: "In how many ways can 5 people sit around a circular table?",
        key: "24",
        option1: "20",
        option2: "24",
        option3: "60",
        option4: "120",
      },
      {
        statement: "How many different necklaces can be made using 4 different colored beads?",
        key: "6",
        option1: "4",
        option2: "6",
        option3: "12",
        option4: "24",
      },
      {
        statement: "In how many ways can 6 people be seated around a circular table if 2 specific people must sit together?",
        key: "120",
        option1: "60",
        option2: "90",
        option3: "120",
        option4: "240",
      },
      
      // Combination
      
      {
        statement: "How many different combinations of 3 letters can be made from the word 'CAT'?",
        key: "3",
        option1: "3",
        option2: "6",
        option3: "9",
        option4: "12",
      },
      {
        statement: "In how many ways can you choose 2 books to read from a shelf of 5 books?",
        key: "10",
        option1: "5",
        option2: "8",
        option3: "10",
        option4: "15",
      },
      {
        statement: "What is the complex conjugate of the number 3 + 4i?",
        key: "3 - 4i",
        option1: "3 + 4i",
        option2: "4 - 3i",
        option3: "3 - 4i",
        option4: "4 + 3i",
      },
      {
        statement: "What is the inverse of the complex number 2 - 3i?",
        key: "2/13 + 3/13i",
        option1: "2/13 + 3/13i",
        option2: "2/13 - 3/13i",
        option3: "2/5 - 3/5i",
        option4: "2/5 + 3/5i",
      },
      {
        statement: "What is the polar form of the complex number 1 + √3i?",
        key: "2(cos(π/3) + i sin(π/3))",
        option1: "2(cos(π/6) + i sin(π/6))",
        option2: "2(cos(π/3) + i sin(π/3))",
        option3: "2(cos(π/4) + i sin(π/4))",
        option4: "2(cos(π/2) + i sin(π/2))",
      },
      
      // Argand Diagram
      
      {
        statement: "Which point in the Argand diagram represents the complex number 3 - 2i?",
        key: "(3, -2)",
        option1: "(3, 2)",
        option2: "(3, -2)",
        option3: "(-3, 2)",
        option4: "(-3, -2)",
      },
      {
        statement: "Which point in the Argand diagram represents the complex number -4 + 5i?",
        key: "(-4, 5)",
        option1: "(4, -5)",
        option2: "(-4, 5)",
        option3: "(4, 5)",
        option4: "(-4, -5)",
      },
      
      // Finding Argument of Complex Numbers
      
      {
        statement: "What is the argument of the complex number 1 - √3i?",
        key: "5π/3",
        option1: "π/3",
        option2: "2π/3",
        option3: "5π/6",
        option4: "5π/3",
      },
      {
        statement: "What is the argument of the complex number -2i?",
        key: "3π/2",
        option1: "π/2",
        option2: "π",
        option3: "3π/4",
        option4: "3π/2",
      },
      
      // Binomial Theorem
      
      {
        statement: "What is the 4th term in the expansion of (x + 2)^6?",
        key: "15x^2",
        option1: "20x^3",
        option2: "15x^2",
        option3: "120x",
        option4: "720",
      },
      {
        statement: "What is the number of terms in the expansion of (a + b)^10?",
        key: "11",
        option1: "9",
        option2: "10",
        option3: "11",
        option4: "12",
      },
      {
        statement : "The order of differential equation is ",
        key : "order of highest derivative",
        option1 : "degree of the polynomial",
        option2 : "order of the polynomial", 
        option3 : "number of variables involved", 
        option4 : "order of highest derivative", 
      }
    ],
  },
  //third subject
  {
    title: "Physics",
    noOfMcqs: 60,
    Questions: [
     // Physical Quantities

{
  statement: "Which of the following is a base quantity in the International System of Units (SI)?",
  key: "Length",
  option1: "Volume",
  option2: "Temperature",
  option3: "Mass",
  option4: "Length",
},
{
  statement: "What is the SI unit of electric current?",
  key: "Ampere",
  option1: "Volt",
  option2: "Ohm",
  option3: "Watt",
  option4: "Ampere",
},
{
  statement: "Which of the following is a derived quantity?",
  key: "Acceleration",
  option1: "Length",
  option2: "Mass",
  option3: "Time",
  option4: "Acceleration",
},

// Significant Figures

{
  statement: "What is the result of (3.14 * 2.5) / 0.0079 to the correct number of significant figures?",
  key: "8.01",
  option1: "7.97",
  option2: "8.00",
  option3: "8.01",
  option4: "8.01266",
},
{
  statement: "What is the product of 5.12 and 3.5, rounded to three significant figures?",
  key: "17.9",
  option1: "17.92",
  option2: "17.9",
  option3: "18",
  option4: "17.875",
},

// Scientific Notation

{
  statement: "Express 0.000125 in scientific notation.",
  key: "1.25 x 10^-4",
  option1: "1.25 x 10^-3",
  option2: "1.25 x 10^-4",
  option3: "1.25 x 10^-5",
  option4: "1.25 x 10^-6",
},
{
  statement: "What is 6.02 x 10^23 in standard notation?",
  key: "602,000,000,000,000,000,000,000",
  option1: "6.02",
  option2: "602,000,000,000,000,000,000,000",
  option3: "602,000,000,000,000",
  option4: "6.02 x 10^23",
},

// Usage of Materials in Manufacture of Computer Chips

{
  statement: "Which material is commonly used as a semiconductor in the manufacture of computer chips?",
  key: "Silicon",
  option1: "Aluminum",
  option2: "Copper",
  option3: "Silicon",
  option4: "Gold",
},
{
  statement: "What is the function of the dielectric material in computer chip manufacturing?",
  key: "Insulation",
  option1: "Conduction",
  option2: "Amplification",
  option3: "Insulation",
  option4: "Semiconductor",
},
{
  statement: "What is the quotient of 6.30 and 2.00, rounded to two significant figures?",
  key: "3.2",
  option1: "3.15",
  option2: "3.20",
  option3: "3.2",
  option4: "3.25",
},
// Sound Propagation

{
  statement: "Which medium does sound travel faster through?",
  key: "Solid",
  option1: "Gas",
  option2: "Liquid",
  option3: "Solid",
  option4: "Vacuum",
},
{
  statement: "What is the speed of sound in air at 20°C?",
  key: "343 m/s",
  option1: "343 m/s",
  option2: "330 m/s",
  option3: "340 m/s",
  option4: "350 m/s",
},
{
  statement: "What is the phenomenon where sound waves bend due to temperature gradients in the atmosphere?",
  key: "Refraction",
  option1: "Reflection",
  option2: "Diffraction",
  option3: "Refraction",
  option4: "Interference",
},

// Superposition of Waves

{
  statement: "What happens when two identical waves overlap perfectly in phase?",
  key: "Constructive Interference",
  option1: "Destructive Interference",
  option2: "Standing Wave",
  option3: "Constructive Interference",
  option4: "Diffraction",
},
{
  statement: "What term describes the process where two waves cancel each other out when they overlap?",
  key: "Destructive Interference",
  option1: "Constructive Interference",
  option2: "Resonance",
  option3: "Destructive Interference",
  option4: "Standing Wave",
},

// Speed of Sound Formulas

{
  statement: "According to Newton's formula, what is the speed of sound in air?",
  key: "√(y * R * T)",
  option1: "v = λ * f",
  option2: "v = c / n",
  option3: "v = 2πr / T",
  option4: "v = √(y * R * T)",
},
{
  statement: "What is the Laplace formula for the speed of sound in a gas?",
  key: "v = √(y * P / p)",
  option1: "v = √(y * R * T)",
  option2: "v = 2πr / T",
  option3: "v = λ * f",
  option4: "v = √(y * P / p)",
},
{
  statement: "In Laplace's formula, what does 'gamma' represent?",
  key: "Adiabatic Index",
  option1: "Temperature",
  option2: "Pressure",
  option3: "Density",
  option4: "Adiabatic Index",
},
// Effect of Pressure and Density on Speed of Sound

{
  statement: "How does an increase in pressure affect the speed of sound in a gas?",
  key: "Increases",
  option1: "Decreases",
  option2: "Remains unchanged",
  option3: "Increases",
  option4: "May increase or decrease depending on the gas",
},
{
  statement: "What is the relationship between density and the speed of sound in a medium?",
  key: "Inverse proportional",
  option1: "Directly proportional",
  option2: "No relationship",
  option3: "Inverse proportional",
  option4: "Exponential relationship",
},
// Huygens Wave Principle

{
  statement: "Which principle states that every point on a wavefront serves as a source of wavelets that spread out in all directions?",
  key: "Huygens Principle",
  option1: "Fermat's Principle",
  option2: "Snell's Law",
  option3: "Newton's Law of Cooling",
  option4: "Huygens Principle",
},
{
  statement: "According to Huygens Principle, what happens when these wavelets interfere constructively?",
  key: "They reinforce each other to form a new wavefront.",
  option1: "They cancel each other out, creating darkness.",
  option2: "They scatter randomly.",
  option3: "They refract at an angle.",
  option4: "They reinforce each other to form a new wavefront.",
},

// Young's Double Slit Experiment

{
  statement: "What is the formula for the distance between two adjacent bright fringes in Young's double slit experiment?",
  key: "λD/d",
  option1: "dλ/D",
  option2: "D/λd",
  option3: "2d/λ",
  option4: "λD/d",
},
{
  statement: "In Young's double slit experiment, what is the condition for constructive interference?",
  key: "Path difference = nλ",
  option1: "Path difference = (n + 1/2)λ",
  option2: "Path difference = nλ/2",
  option3: "Path difference = (n + 1)λ",
  option4: "Path difference = nλ",
},

// Michelson's Interferometer

{
  statement: "What is the main principle behind Michelson's interferometer?",
  key: "Interference of Light",
  option1: "Diffraction of Light",
  option2: "Reflection of Light",
  option3: "Refraction of Light",
  option4: "Interference of Light",
},
{
  statement: "In Michelson's interferometer, what is the purpose of the half-silvered mirror?",
  key: "To split the incident beam into two perpendicular paths.",
  option1: "To reflect all incident light.",
  option2: "To transmit all incident light.",
  option3: "To absorb part of the incident light.",
  option4: "To split the incident beam into two perpendicular paths.",
},

// Newton's Rings

{
  statement: "What causes the formation of Newton's rings?",
  key: "Interference of Reflected Light Waves",
  option1: "Diffraction of Light",
  option2: "Refraction of Light",
  option3: "Scattering of Light",
  option4: "Interference of Reflected Light Waves",
},
{
  statement: "How does the spacing between the rings change when the thickness of the air film increases?",
  key: "The spacing decreases",
  option1: "The spacing remains constant",
  option2: "The spacing increases",
  option3: "The spacing decreases",
  option4: "The spacing becomes irregular",
},

// Polarization of Light

{
  statement: "Which property of light is responsible for polarization?",
  key: "Transverse Nature",
  option1: "Longitudinal Nature",
  option2: "Reflection",
  option3: "Refraction",
  option4: "Transverse Nature",
},
{
  statement: "What type of materials can polarize light?",
  key: "Anisotropic Materials",
  option1: "Isotropic Materials",
  option2: "Transparent Materials",
  option3: "Opaque Materials",
  option4: "Anisotropic Materials",
},
// Coulomb's Law

{
  statement: "In Coulomb's law, what happens to the electrostatic force between two charges if the distance between them is doubled?",
  key: "It decreases by a factor of four.",
  option1: "It remains unchanged.",
  option2: "It decreases by a factor of two.",
  option3: "It decreases by a factor of four.",
  option4: "It increases by a factor of two.",
},

// Electric Potential

{
  statement: "What is the electric potential at a point in space due to a point charge?",
  key: "kQ/r",
  option1: "kQ",
  option2: "kQ/r^2",
  option3: "kQ/r^3",
  option4: "kQ/r",
},

// Electric Field Intensity

{
  statement: "What is the formula for the electric field intensity created by a point charge?",
  key: "kQ/r^2",
  option1: "kQ/r",
  option2: "kQ",
  option3: "kQ/r^3",
  option4: "kQ/r^2",
},
{
  statement: "In which direction does the electric field point around a positive point charge?",
  key: "Radially outward",
  option1: "Radially inward",
  option2: "Tangentially",
  option3: "Perpendicular to the charge",
  option4: "Radially outward",
},

// RC Constants

{
  statement: "What is the time constant of an RC circuit?",
  key: "RC",
  option1: "R/C",
  option2: "2RC",
  option3: "RC^2",
  option4: "RC",
},
{
  statement: "In an RC circuit, what happens to the voltage across the capacitor as time goes to infinity?",
  key: "It approaches the source voltage.",
  option1: "It decreases to zero.",
  option2: "It remains constant.",
  option3: "It approaches zero.",
  option4: "It approaches the source voltage.",
},

// Parallel Plate Capacitors

{
  statement: "What is the capacitance of a parallel plate capacitor?",
  key: "ε0A/d",
  option1: "Q/V",
  option2: "ε0A",
  option3: "Q",
  option4: "ε0A/d",
},

// Kirchhoff's Law

{
  statement: "What does Kirchhoff's loop rule state?",
  key: "The sum of the potential differences around any closed loop in a circuit is zero.",
  option1: "The total resistance of a circuit is equal to the sum of the individual resistances.",
  option2: "The total current entering a junction is equal to the total current leaving the junction.",
  option3: "The sum of the potential differences across any two points in a circuit is zero.",
  option4: "The sum of the potential differences around any closed loop in a circuit is zero.",
},

// Wheatstone Bridge

{
  statement: "In a Wheatstone bridge, when is the bridge balanced?",
  key: "When the ratio of the resistances in one diagonal is equal to the ratio in the other diagonal.",
  option1: "When all the resistances are equal.",
  option2: "When the ratio of the resistances in one diagonal is equal to the ratio in the other diagonal.",
  option3: "When the voltage across the bridge is zero.",
  option4: "When the resistance in one diagonal is zero.",
}, 
// Potentiometer

{
  statement: "What is the function of a potentiometer in electrical circuits?",
  key: "To measure potential difference accurately",
  option1: "To regulate current flow",
  option2: "To store electrical energy",
  option3: "To measure electric charge",
  option4: "To measure potential difference accurately",
}, 
// Magnetic Field around a Current Carrying Conductor (Numerical)

{
  statement: "What is the magnetic field strength at a distance of 5 cm from a wire carrying a current of 2 A?",
  key: "1.6 × 10^-4 T",
  option1: "8 × 10^-4 T",
  option2: "1.6 × 10^-3 T",
  option3: "1.6 × 10^-4 T",
  option4: "8 × 10^-5 T",
},
{
  statement: "A current of 3 A flows through a wire. What is the magnetic field strength at a distance of 10 cm from the wire?",
  key: "1.2 × 10^-4 T",
  option1: "3 × 10^-4 T",
  option2: "1.2 × 10^-3 T",
  option3: "1.2 × 10^-4 T",
  option4: "3 × 10^-5 T",
},

// Force Acting on a Current Carrying Conductor

{
  statement: "What is the direction of the force experienced by a current-carrying wire in a magnetic field, according to Fleming's Left Hand Rule?",
  key: "Perpendicular to both the current direction and the magnetic field",
  option1: "Opposite to the current direction",
  option2: "Along the magnetic field lines",
  option3: "Perpendicular to both the current direction and the magnetic field",
  option4: "Parallel to the current direction",
},
{
  statement: "What factors determine the magnitude of the force experienced by a current-carrying conductor in a magnetic field?",
  key: "Current, Length of Conductor, Magnetic Field Strength, Angle",
  option1: "Voltage, Resistance, Inductance",
  option2: "Mass, Velocity, Charge",
  option3: "Temperature, Pressure, Volume",
  option4: "Current, Length of Conductor, Magnetic Field Strength, Angle",
},

// Force on a Charge in a Field

{
  statement: "In which direction does the force act on a positive charge moving in a magnetic field?",
  key: "Perpendicular to the direction of motion and the magnetic field",
  option1: "Opposite to the direction of motion",
  option2: "Along the direction of motion",
  option3: "Perpendicular to the direction of motion and the magnetic field",
  option4: "Parallel to the magnetic field",
},
{
  statement: "What is the formula to calculate the force experienced by a charged particle moving in a magnetic field?",
  key: "F = qvBsinθ",
  option1: "F = qvB",
  option2: "F = q/B",
  option3: "F = qv/B",
  option4: "F = qvBsinθ",
},

// Numerical MCQs on Finding Charge in a Magnetic Field

{
  statement: "A charge of 2 C experiences a force of 4 N in a magnetic field of 0.5 T. What is the velocity of the charge?",
  key: "8 m/s",
  option1: "2 m/s",
  option2: "4 m/s",
  option3: "6 m/s",
  option4: "8 m/s",
},
{
  statement: "A charge of 3 C experiences a force of 6 N in a magnetic field of 2 T. What is the velocity of the charge?",
  key: "1 m/s",
  option1: "1 m/s",
  option2: "2 m/s",
  option3: "3 m/s",
  option4: "4 m/s",
},

// E/M Value to Find Mass of the Charge

{
  statement: "How can the e/m value be used to determine the mass of the charged particle?",
  key: "By measuring the radius of the path in a magnetic field and the magnetic field strength",
  option1: "By measuring the charge and the velocity of the particle",
  option2: "By measuring the energy and the charge of the particle",
  option3: "By measuring the radius of the path in a magnetic field and the magnetic field strength",
  option4: "By measuring the current and the length of the conductor",
},

// Galvanometer (Intermediate Level)

{
  statement: "What is the function of a galvanometer?",
  key: "To detect and measure small electric currents",
  option1: "To generate electric currents",
  option2: "To measure voltage",
  option3: "To detect and measure small electric currents",
  option4: "To measure resistance",
}, 
// General Theory of Relativity

{
  statement: "According to the general theory of relativity, how does gravity affect time?",
  key: "Gravity causes time dilation, slowing down time in stronger gravitational fields.",
  option1: "Gravity speeds up time.",
  option2: "Gravity has no effect on time.",
  option3: "Gravity causes time contraction, speeding up time in stronger gravitational fields.",
  option4: "Gravity causes time dilation, slowing down time in stronger gravitational fields.",
},
{
  statement: "In the general theory of relativity, what happens to the mass of an object as it approaches the speed of light?",
  key: "The mass increases towards infinity.",
  option1: "The mass decreases towards zero.",
  option2: "The mass remains constant.",
  option3: "The mass decreases linearly.",
  option4: "The mass increases towards infinity.",
},

// Effects like Compton's Effect

{
  statement: "What is the Compton Effect?",
  key: "The scattering of X-rays by free electrons, resulting in an increase in wavelength.",
  option1: "The absorption of X-rays by free electrons.",
  option2: "The emission of X-rays by excited electrons.",
  option3: "The scattering of X-rays by a crystal lattice.",
  option4: "The scattering of X-rays by free electrons, resulting in an increase in wavelength.",
},
{
  statement: "What is the Compton Shift?",
  key: "The increase in wavelength of scattered X-rays compared to the incident X-rays.",
  option1: "The decrease in wavelength of scattered X-rays compared to the incident X-rays.",
  option2: "The shift in position of the Compton peak in a spectrum.",
  option3: "The decrease in energy of scattered X-rays compared to the incident X-rays.",
  option4: "The increase in wavelength of scattered X-rays compared to the incident X-rays.",
},

// De-Broglie's Equation (Numerical)

{
  statement: "Calculate the de Broglie wavelength of an electron with a velocity of 2 × 10^6 m/s.",
  key: "3.31 × 10^-10 m",
  option1: "6.63 × 10^-34 m",
  option2: "3.31 × 10^-11 m",
  option3: "3.31 × 10^-10 m",
  option4: "6.63 × 10^-10 m",
},
{
  statement: "Find the de Broglie wavelength of a proton moving with a velocity of 5 × 10^6 m/s.",
  key: "1.33 × 10^-12 m",
  option1: "2.66 × 10^-12 m",
  option2: "1.33 × 10^-13 m",
  option3: "1.33 × 10^-12 m",
  option4: "2.66 × 10^-13 m",
},

// Blackbody Radiation and Stefan-Boltzmann Constant

{
  statement: "What is blackbody radiation?",
  key: "The electromagnetic radiation emitted by a perfect absorber of all incident radiation.",
  option1: "The radiation emitted by a hot object due to its temperature.",
  option2: "The radiation absorbed by a black object.",
  option3: "The radiation emitted by a black object.",
  option4: "The electromagnetic radiation emitted by a perfect absorber of all incident radiation.",
},
{
  statement: "What is the Stefan-Boltzmann constant?",
  key: "5.67 × 10^-8 W/m^2K^4",
  option1: "6.63 × 10^-34 J·s",
  option2: "8.31 J/mol·K",
  option3: "9.81 m/s^2",
  option4: "5.67 × 10^-8 W/m^2K^4",
},

// Uncertainty Principle

{
  statement: "What does the uncertainty principle state?",
  key: "That it is impossible to simultaneously know the exact position and momentum of a particle.",
  option1: "That all physical quantities have inherent uncertainty.",
  option2: "That it is impossible to simultaneously know the exact energy and time of a process.",
  option3: "That it is impossible to measure the exact speed of a particle.",
  option4: "That it is impossible to simultaneously know the exact position and momentum of a particle.",
},
{
  statement: "Who formulated the uncertainty principle?",
  key: "Werner Heisenberg",
  option1: "Albert Einstein",
  option2: "Niels Bohr",
  option3: "Max Planck",
  option4: "Werner Heisenberg",
}
    ],
  },
  //fourth subject
  {
    title: "Chemistry",
    noOfMcqs: 30,
    Questions: [
    // Petroleum Products and Distillation

{
  statement: "Which petroleum product has the lowest boiling point?",
  key: "Natural gas",
  option1: "Gasoline",
  option2: "Kerosene",
  option3: "Diesel",
  option4: "Natural gas",
},
{
  statement: "What is the main purpose of fractional distillation in the petroleum industry?",
  key: "To separate crude oil into its various components based on boiling points.",
  option1: "To purify crude oil by removing impurities.",
  option2: "To convert crude oil into gasoline.",
  option3: "To increase the octane rating of gasoline.",
  option4: "To separate crude oil into its various components based on boiling points.",
},
{
  statement: "Which fraction of crude oil has the highest viscosity?",
  key: "Bitumen",
  option1: "Gasoline",
  option2: "Kerosene",
  option3: "Diesel",
  option4: "Bitumen",
},

// Functional Groups Identification

{
  statement: "Which functional group is present in an alcohol?",
  key: "Hydroxyl (-OH)",
  option1: "Carbonyl (C=O)",
  option2: "Amino (-NH2)",
  option3: "Hydroxyl (-OH)",
  option4: "Ester (R-COO-R')",
},
{
  statement: "Identify the functional group present in a carboxylic acid.",
  key: "Carboxyl (-COOH)",
  option1: "Hydroxyl (-OH)",
  option2: "Carboxyl (-COOH)",
  option3: "Amino (-NH2)",
  option4: "Ester (R-COO-R')",
},
{
  statement: "Which functional group is characteristic of an aldehyde?",
  key: "Carbonyl (C=O)",
  option1: "Carboxyl (-COOH)",
  option2: "Carbonyl (C=O)",
  option3: "Hydroxyl (-OH)",
  option4: "Amino (-NH2)",
},

// Preparation of Alkanes and Alkenes

{
  statement: "What is the primary method for preparing alkanes?",
  key: "Hydrogenation of alkenes or alkynes.",
  option1: "Dehydration of alcohols.",
  option2: "Oxidation of alcohols.",
  option3: "Hydrogenation of alkenes or alkynes.",
  option4: "Halogenation of alkanes.",
},
{
  statement: "How are alkenes commonly prepared in the laboratory?",
  key: "By dehydration of alcohols.",
  option1: "By hydrogenation of alkanes.",
  option2: "By oxidation of alcohols.",
  option3: "By dehydration of alcohols.",
  option4: "By halogenation of alkenes.",
},

// Markovnikov's Rule

{
  statement: "What does Markovnikov's rule state?",
  key: "In the addition of a protic acid to an unsymmetrical alkene, the hydrogen atom adds to the carbon atom with more hydrogen atoms bonded to it already.",
  option1: "In the addition of a protic acid to an unsymmetrical alkene, the hydrogen atom adds to the carbon atom with fewer hydrogen atoms bonded to it already.",
  option2: "In the addition of a protic acid to an unsymmetrical alkene, the hydrogen atom adds to the carbon atom with fewer alkyl substituents.",
  option3: "In the addition of a protic acid to an unsymmetrical alkene, the hydrogen atom adds to the carbon atom with more alkyl substituents.",
  option4: "In the addition of a protic acid to an unsymmetrical alkene, the hydrogen atom adds to the carbon atom with more hydrogen atoms bonded to it already.",
},
{
  statement: "What is the major product of the following reaction according to Markovnikov's rule: HCl + CH3CH=CH2?",
  key: "CH3CH2CH2Cl",
  option1: "CH3CH(Cl)CH2CH3",
  option2: "CH3CH2CH(Cl)CH3",
  option3: "CH3CH(Cl)CH(CH3)2",
  option4: "CH3CH2CH2Cl",
}, 
// Benzene's Electronic Cloud

{
  statement: "What is the shape of the electronic cloud in benzene?",
  key: "Hexagonal planar",
  option1: "Linear",
  option2: "Tetrahedral",
  option3: "Trigonal pyramidal",
  option4: "Hexagonal planar",
},
{
  statement: "How many pi bonds are present in the electronic cloud of benzene?",
  key: "Three",
  option1: "Two",
  option2: "Three",
  option3: "Four",
  option4: "Six",
},

// Friedel-Crafts Reactions

{
  statement: "What type of reaction is a Friedel-Crafts reaction?",
  key: "Electrophilic aromatic substitution",
  option1: "Nucleophilic substitution",
  option2: "Elimination",
  option3: "Electrophilic addition",
  option4: "Electrophilic aromatic substitution",
},
{
  statement: "In the Friedel-Crafts alkylation reaction, what role does the Lewis acid catalyst play?",
  key: "It facilitates the formation of the electrophile.",
  option1: "It facilitates the removal of a leaving group.",
  option2: "It promotes the nucleophilic attack.",
  option3: "It acts as a reducing agent.",
  option4: "It facilitates the formation of the electrophile.",
},

// Calculations based on Moles

{
  statement: "What is the molar mass of carbon dioxide (CO2)?",
  key: "44.01 g/mol",
  option1: "12.01 g/mol",
  option2: "22.99 g/mol",
  option3: "44.01 g/mol",
  option4: "32.00 g/mol",
},
{
  statement: "How many moles of water (H2O) are present in 36 grams?",
  key: "2 moles",
  option1: "1 mole",
  option2: "2 moles",
  option3: "3 moles",
  option4: "4 moles",
},

// Calculating Moles by Comparison Method

{
  statement: "Given the equation: 2H2 + O2 → 2H2O, how many moles of oxygen (O2) are needed to react completely with 4 moles of hydrogen (H2)?",
  key: "2 moles",
  option1: "1 mole",
  option2: "2 moles",
  option3: "4 moles",
  option4: "8 moles",
},
{
  statement: "In the reaction: C3H8 + 5O2 → 3CO2 + 4H2O, if 4 moles of C3H8 are completely reacted, how many moles of oxygen (O2) are needed?",
  key: "20 moles",
  option1: "10 moles",
  option2: "15 moles",
  option3: "20 moles",
  option4: "25 moles",
},
// Kinetic Molecular Theory (KMT)

{
  statement: "According to the Kinetic Molecular Theory, what happens to the average kinetic energy of gas molecules as temperature increases?",
  key: "It increases",
  option1: "It decreases",
  option2: "It remains constant",
  option3: "It increases initially, then decreases",
  option4: "It increases",
},
{
  statement: "Which of the following statements is consistent with the Kinetic Molecular Theory?",
  key: "Gas molecules are in constant, random motion.",
  option1: "Gas molecules have fixed positions.",
  option2: "Gas molecules exert attractive forces on each other.",
  option3: "Gas molecules occupy the entire volume of the container.",
  option4: "Gas molecules are in constant, random motion.",
}, 
// Alkyl Halides

{
  statement: "What is the general formula for alkyl halides?",
  key: "R-X (where R is an alkyl group and X is a halogen)",
  option1: "R-OH",
  option2: "R-COOH",
  option3: "R-X (where R is an alkyl group and X is a halogen)",
  option4: "R-NH2",
},
{
  statement: "Which of the following alkyl halides is expected to undergo SN1 reaction most readily?",
  key: "Tertiary alkyl halide",
  option1: "Primary alkyl halide",
  option2: "Secondary alkyl halide",
  option3: "Tertiary alkyl halide",
  option4: "Allylic alkyl halide",
},
{
  statement: "Which alkyl halide is most reactive towards nucleophilic substitution reactions?",
  key: "Methyl halide",
  option1: "Ethyl halide",
  option2: "Propyl halide",
  option3: "Isopropyl halide",
  option4: "Methyl halide",
},

// Grignard Reagents

{
  statement: "What is the general formula of a Grignard reagent?",
  key: "RMgX (where R is an alkyl or aryl group and X is a halogen)",
  option1: "RNH2",
  option2: "ROH",
  option3: "RCHO",
  option4: "RMgX (where R is an alkyl or aryl group and X is a halogen)",
},
{
  statement: "What type of reaction do Grignard reagents commonly undergo?",
  key: "Nucleophilic addition",
  option1: "Elimination",
  option2: "Substitution",
  option3: "Nucleophilic substitution",
  option4: "Nucleophilic addition",
},
{
  statement: "What is the product of the reaction between ethyl magnesium bromide (C2H5MgBr) and formaldehyde (CH2O)?",
  key: "Secondary alcohol",
  option1: "Primary alcohol",
  option2: "Tertiary alcohol",
  option3: "Secondary alcohol",
  option4: "Quaternary alcohol",
},

// Additional Questions

{
  statement: "Which of the following alkyl halides is least reactive towards nucleophilic substitution reactions?",
  key: "Primary alkyl halide",
  option1: "Primary alkyl halide",
  option2: "Secondary alkyl halide",
  option3: "Tertiary alkyl halide",
  option4: "Methyl halide",
},
{
  statement: "What is the product of the reaction between bromoethane (C2H5Br) and sodium metal?",
  key: "Ethane",
  option1: "Ethanol",
  option2: "Ethene",
  option3: "Ethane",
  option4: "Ethanamine",
},
{
  statement: "What happens when an alkyl halide reacts with a nucleophile?",
  key: "Substitution or elimination reaction",
  option1: "Addition reaction",
  option2: "Oxidation reaction",
  option3: "Reduction reaction",
  option4: "Substitution or elimination reaction",
}, 
{
  statement: "What happens when an alkyl halide reacts with a nucleophile?",
  key: "Substitution or elimination reaction",
  option1: "Addition reaction",
  option2: "Oxidation reaction",
  option3: "Reduction reaction",
  option4: "Substitution or elimination reaction",
}





    ],
  },
 { title: "Intelligence",
  noOfMcqs: 20,
  Questions: [
    {
      statement: "What is the next number in the sequence: 2, 4, 6, 8, ___?",
      key: "10",
      option1: "9",
      option2: "10",
      option3: "12",
      option4: "14"
    },
    {
      statement: "If a triangle has angles measuring 30°, 60°, and 90°, which side is the longest?",
      key: "hypotenuse",
      option1: "adjacent",
      option2: "opposite",
      option3: "hypotenuse",
      option4: "base"
    },
    {
      statement: "Which of the following is the odd one out: apple, banana, orange, pear, ___?",
      key: "banana",
      option1: "apple",
      option2: "banana",
      option3: "orange",
      option4: "pear"
    },
    {
      statement: "What is the capital of France?",
      key: "Paris",
      option1: "Berlin",
      option2: "Rome",
      option3: "Madrid",
      option4: "Paris"
    },
    {
      statement: "If you rearrange the letters 'ROMANCE', you get a word meaning 'a slimy creature'. What is it?",
      key: "acorn",
      option1: "leopard",
      option2: "raccoon",
      option3: "cornea",
      option4: "acorn"
    },
    {
      statement: "Complete the series: 3, 6, 9, 12, ___",
      key: "15",
      option1: "14",
      option2: "15",
      option3: "16",
      option4: "18"
    },
    {
      statement: "Which planet is known as the 'Red Planet'?",
      key: "Mars",
      option1: "Jupiter",
      option2: "Venus",
      option3: "Mars",
      option4: "Saturn"
    },
    {
      statement: "If it takes 5 hours for 10 workers to complete a task, how many hours will it take for 20 workers to complete the same task?",
      key: "2.5",
      option1: "2",
      option2: "2.5",
      option3: "3",
      option4: "4"
    },
    {
      statement: "Which of the following is a prime number: 21, 29, 34, 37?",
      key: "29",
      option1: "21",
      option2: "29",
      option3: "34",
      option4: "37"
    },
    {
      statement: "What is the missing number in the sequence: 1, 1, 2, 3, 5, ___?",
      key: "8",
      option1: "7",
      option2: "8",
      option3: "9",
      option4: "10"
    }
    
  ]
}
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
