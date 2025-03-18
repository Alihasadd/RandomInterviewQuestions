const characters = [
  {question:"Walk me through your resume", hint: "Use CAR method" },
"Tell me about a time where you were working with a difficult client.","What is a weakness you are working on?","What was your biggest mistake at work?","Tell me about a time you were delayed on a project.","What experiences have helped prepared you for this role?","What is your greatest strength?","How would your team describe you?","Why do you want this job?","Describe your leadership style.","How do you handle conflict?","Why do you want to work here?","What are your weaknesses?","What is your biggest achievement?","What do you know about the company?",];
let passwordOne = document.getElementById('el-passwordOne') // 1 connection JS > HTML
let passwordTwo = document.getElementById('el-passwordTwo')
let button = document.getElementById('generatePasswordBtn')

function randomCharacter(){
   let randomNum = Math.floor(Math.random() * characters.length)
   return characters[randomNum]
}

function randomGen(){
    let string = "" 
    for (let i = 0; i < 1; i++){
     string += randomCharacter()
} 
    return string // 2 Connection Output 
}

button.addEventListener('click', () => {
  passwordOne.innerText = randomGen();
  passwordTwo.innerText = randomGen();
})


function copy() {
  let copyText = document.querySelector(passwordOne);
  copyText.select();
  document.execCommand("copy");
}

document.querySelector(passwordOne).addEventListener("click", copy);






/*//https://projects.scrimba.com/password-generator

https://www.figma.com/design/NEj9JDycMjF3XKXq7swoc9/Random-Password-Generator-(New-version)?node-id=102-702&t=C08bkbgs3DMxFw5M-0

function jump(only when i jump) {
    step 1 bend knees
    step 2 push off floor
    step 3 land on floor
}*/