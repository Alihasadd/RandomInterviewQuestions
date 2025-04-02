const questionsAndHints = [
  { question: "Walk me through your resume", hint: "Use relevant prior experience." },
  { question: "What are your strengths?", hint: "Focus on skills that relate to the job." },
  { question: "Describe a challenge you've faced at work.", hint: "Choose a situation that shows problem-solving." },
  { question: "Tell me about a time you were delayed on a project", hint: "Use a situation where you were able to communicate expectations." },
  { question: "What experiences have helped prepare you for this role?", hint: "Use 2 relevant experience combined for this role" },
  { question: "How would your team describe you ", hint: "Choose a positive attribute that you might have been given as kudos" },
  { question: "Why do you want this job?", hint: "Role, team, company mission, etc. Choose something that speaks to your passions." },
  { question: "What is your greatest strength", hint: "Be prepared to give an example." },
  
  { question: "Tell me about a time you faced a challenge at work. How did you handle it?", hint: "Focus on the specific challenge and your approach." },
  { question: "Describe a situation where you had to work as part of a team. What was your role, and what was the outcome?", hint: "Highlight your contributions and teamwork." },
  { question: "Can you give an example of a time when you had to meet a tight deadline? How did you manage your time?", hint: "Discuss your time management strategies." },
  { question: "Tell me about a time you made a mistake. How did you handle it, and what did you learn?", hint: "Emphasize accountability and learning." },
  { question: "Describe a situation where you had to deal with a difficult coworker or client. How did you approach the situation?", hint: "Show your conflict resolution skills." },
  { question: "Give an example of a goal you set and how you achieved it.", hint: "Discuss the steps you took to reach the goal." },
  { question: "Tell me about a time when you had to adapt to a significant change at work. How did you handle it?", hint: "Highlight your flexibility and adaptability." },
  { question: "Describe a situation where you took the initiative to improve a process or solve a problem.", hint: "Show your proactive approach." },
  { question: "Can you share an experience where you had to persuade someone to see things your way? What was the outcome?", hint: "Discuss your persuasive communication skills." },
  { question: "Tell me about a time when you received constructive criticism. How did you respond?", hint: "Emphasize your openness to feedback." },
  { question: "Describe a project you worked on that required attention to detail. How did you ensure accuracy?", hint: "Highlight your attention to detail." },
  { question: "Can you give an example of how you handled a conflict within your team?", hint: "Discuss your conflict resolution strategies." },
  { question: "Tell me about a time when you had to learn something new quickly. How did you approach it?", hint: "Show your ability to learn and adapt." },
  { question: "Describe a situation where you had to balance multiple priorities. How did you manage your workload?", hint: "Discuss your prioritization techniques." },
  { question: "Can you share an experience where you demonstrated leadership skills?", hint: "Highlight your leadership qualities and impact." },
  { question: "Tell me about a time when you had to make a difficult decision. What was the situation, and what did you decide?", hint: "Discuss your decision-making process." },
  { question: "Describe a time when you had to handle a high-pressure situation. How did you cope?", hint: "Emphasize your stress management techniques." },
  { question: "Can you give an example of a time when you had to collaborate with someone from a different department or background? What challenges did you face?", hint: "Highlight your collaboration skills." },
  { question: "Tell me about a time when you had to give a presentation or speak in front of a group. How did you prepare?", hint: "Discuss your preparation and delivery." },
  { question: "Describe a situation where you had to provide feedback to a peer. How did you approach it?", hint: "Show your constructive feedback skills." },
  { question: "Can you share an experience where you had to deal with ambiguity or uncertainty? How did you navigate it?", hint: "Highlight your problem-solving skills." },
  { question: "Tell me about a time when you went above and beyond your job responsibilities. What motivated you?", hint: "Discuss your motivation and impact." },
  { question: "Describe a situation where you had to manage a project with limited resources. How did you ensure success?", hint: "Show your resourcefulness." },
  { question: "Can you give an example of a time when you had to negotiate to achieve a desired outcome?", hint: "Highlight your negotiation skills." },
  { question: "Tell me about a time when you had to change your approach to achieve a goal. What prompted the change?", hint: "Discuss your adaptability." },
  { question: "Describe a time when you had to mentor or train someone. What was your approach?", hint: "Highlight your mentoring skills." },
  { question: "Can you share an experience where you had to deal with a significant setback? How did you recover?", hint: "Emphasize resilience and recovery." },
  { question: "Tell me about a time when you had to analyze data or information to make a decision. What was the outcome?", hint: "Discuss your analytical skills." },
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

