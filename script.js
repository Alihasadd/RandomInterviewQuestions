const questionsAndHints = [
  { question: "Walk me through your resume", hint: "Use relevant prior experience." },
  { question: "What are your strengths?", hint: "Focus on skills that relate to the job." },
  { question: "Describe a challenge you've faced at work.", hint: "Choose a situation that shows problem-solving." },
  { question: "Tell me about a time you were delayed on a project", hint: "Use a situation where you were able to communicate expectations." },
  { question: "What experiences have helped prepare you for this role?", hint: "Use 2 relevant experience combined for this role" },
  { question: "How would your team describe you ", hint: "Choose a positive attribute that you might have been given as kudos" },
  { question: "Why do you want this job?", hint: "Role, team, company mission, etc. Choose something that speaks to your passions." },
  { question: "What is your greatest strength", hint: "Be prepared to give an example." }
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


// const questionsAndHints = [
//   { question: "What are higher order functions", hint: "A Higher Order Function is a function that accepts a function as an argument or returns a function as its result, .map() would be the HOF, not the function you pass into it too." },
//   { question: "1", hint: "2" },
//   { question: "1", hint: "2" },
//   { question: "1", hint: "2" },
//   { question: "1", hint: "2" },
//   { question: "1", hint: "2" },
//   { question: "1", hint: "2" },

