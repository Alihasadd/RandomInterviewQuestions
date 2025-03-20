const questionsAndHints = [
  { question: "Walk me through your resume", hint: "Use relevant prior experience." },
  { question: "What are your strengths?", hint: "Focus on skills that relate to the job." },
  { question: "Describe a challenge you've faced at work.", hint: "Choose a situation that shows problem-solving." }
];

// for (const item of questionsAndHints) {
//   console.log(`Question: ${item.question}`);
//   console.log(`Hint: ${item.hint}`);
// }

const questionElement = document.getElementById('question')
const hintElement = document.getElementById('hint')
const generateButton = document.getElementById("generatePasswordBtn")

function randomCharacter(){
   let randomNum = Math.floor(Math.random() * questionsAndHints.length)
   return questionsAndHints[randomNum]
}

let questionIndex = 0

generateButton.addEventListener('click', () => {
  questionIndex = Math.floor(Math.random() * questionsAndHints.length)
  questionElement.innerText = questionsAndHints[questionIndex].question;
  hintElement.innerText = "Hint"
})

hint.addEventListener('click', () => {
  hintElement.innerText = questionsAndHints[questionIndex].hint;
})

/*//https://projects.scrimba.com/password-generator

https://www.figma.com/design/NEj9JDycMjF3XKXq7swoc9/Random-Password-Generator-(New-version)?node-id=102-702&t=C08bkbgs3DMxFw5M-0

}*/