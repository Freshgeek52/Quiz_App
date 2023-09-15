const questions = [
    {      
        question: "What is Burna Boy's real name?",
        answers:[
            { text: "Damini Ebunoluwa Ogulu", correct: true },
            { text: "Emmanuel Ogulu", correct: false },
            { text: "Daniel Ebunoluwa Ogulu", correct: false },
            { text: "None", correct: false },
        ] 
    },
    {
        question: "In which country was Burna Boy born??",
        answers:[
            { text: "Cameroun", correct: false },
            { text: "United-States", correct: false },
            { text: "Nigeria", correct: true },
            { text: "Congo", correct: false },
        ] 
    },
    {
        question: "What is Burna Boy's date of birth?",
        answers:[
            { text: "October 15, 2000", correct: false },
            { text: "July 2, 1991", correct: true },
            { text: "August 10, 1995", correct: false },
            { text: "December 30, 1993", correct: false },
        ] 
    },
    {
        question: "Which city in Nigeria is Burna Boy originally from?",
        answers:[
            { text: "Lagos", correct: false },
            { text: "Abudja", correct: false },
            { text: "Jos", correct: false },
            { text: "Port Harcourt", correct: true },
        ] 
    },
    {
        question: "What is Burna Boy's stage name inspired by?",
        answers:[
            { text: "His love for playing with fire as a child.", correct: true },
            { text: "His love for Africa", correct: false },
            { text: "Nelson Mandela's history", correct: false },
            { text: "None", correct: false },
        ] 
    },
    {
        question: "What was Burna Boy's debut studio album called?",
        answers:[
            { text: "On a Spaceship", correct: false },
            { text: "L.I.F.E (Leaving an Impact for Eternity)", correct: true },
            { text: "African Giant", correct: false },
            { text: "Outside", correct: false },
        ] 
    },
    {
        question: "In 2019, Burna Boy released an album that gained international acclaim. What is the title of that album?",
        answers:[
            { text: "L.I.F.E", correct: false },
            { text: "Outside", correct: false },
            { text: "On a Spaceship", correct: false },
            { text: "African Giant", correct: true },
        ] 
    },
    {
        question: "Which Burna Boy song won the Grammy Award for Best Global Music Performance in 2021?",
        answers:[
            { text: "Last-Last", correct: false },
            { text: "It's Plenty", correct: false },
            { text: "Twice as Tall", correct: true },
            { text: "Common Person", correct: false },
        ] 
    },
    {
        question: " Burna Boy collaborated with British musician Stormzy on a track. What is the title of that song?",
        answers:[
            { text: "Location", correct: false },
            { text: "Own it", correct: true },
            { text: "Be Honest", correct: false },
            { text: "Ginger", correct: false },
        ] 
    },
    {
        question: " In which year did Burna Boy release his first mixtape?",
        answers:[
            { text: "2004", correct: false },
            { text: "2007", correct: false },
            { text: "2014 Ebunoluwa Ogulu", correct: false },
            { text: "2011", correct: true },
        ] 
    },
    {      
        question: "What is the name of Burna Boy's sister who is also a singer and songwriter?",
        answers:[
            { text: "Nissi Ogulu", correct: true },
            { text: "Ogulu Idike", correct: false },
            { text: "Chunwa Ogulu", correct: false },
            { text: "None", correct: false },
        ] 
    },
    {
        question: "Burna Boy's album 'African Giant' was nominated for a Grammy Award in which category?",
        answers:[
            { text: "Best Africa Male Album", correct: false },
            { text: "Best World Music Album", correct: true },
            { text: "Top Streamed Album", correct: false },
            { text: "Best", correct: false },
        ] 
    },
    {
        question: "Which international music festival did Burna Boy perform at in 2019, solidifying his global presence?",
        answers:[
            { text: "Coachella Valley Music and Arts Festival.", correct: true },
            { text: "Afro Nation", correct: false },
            { text: "Rock Werchter", correct: false },
            { text: "Glastonbury Festival", correct: false },
        ] 
    },
    {
        question: "Burna Boy's 2021 album 'Twice as Tall' was produced by a famous American music producer. Who is he?",
        answers:[
            { text: "Leriq", correct: false },
            { text: "Phantom", correct: false },
            { text: "Kel P", correct: false },
            { text: "Diddy (Sean Combs)", correct: true },
        ] 
    },
    {
        question: " Which famous African reggae and dancehall artist did Burna Boy pay tribute to in his song 'African Giant'?",
        answers:[
            { text: "Alpha Blondy", correct: false },
            { text: "Lucku Dube", correct: false },
            { text: "Majek Fashek", correct: false },
            { text: "Fela Kuti", correct: true },
        ] 
    },
    {
        question: " Burna Boy's song 'Ye' is featured on which album?",
        answers:[
            { text: "Outside", correct: true },
            { text: "L.I.F.E", correct: false },
            { text: "On a spaceshit", correct: false },
            { text: "African Geant", correct: false },
        ] 
    },
    {
        question: " What is the title of Burna Boy's hit single that features the Nigerian musician Zlatan?",
        answers:[
            { text: "I Told Them", correct: false },
            { text: "Cheat on me", correct: false },
            { text: "Thanks", correct: false },
            { text: "Killin Them", correct: true },
        ] 
    },
    {
        question: "Which music genre is Burna Boy primarily known for?",
        answers:[
            { text: "Reggae", correct: true },
            { text: "Afrofusion/Afrobeats", correct: false },
            { text: "Hip Hop", correct: false },
            { text: "Dombolo", correct: false },
        ] 
    }
];

const questionElement = document.getElementById("question");
const answerBtn = document.getElementById("answer");
const nextBtn = document.getElementById("next");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML = "Next";
    showQuestion();   
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;  

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerBtn.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}

function resetState(){
    nextBtn.style.display = "none";
    while(answerBtn.firstChild){
        answerBtn.removeChild(answerBtn.firstChild);
    }
}

function selectAnswer(e){
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct === "true";
    if(isCorrect){
        selectBtn.classList.add("correct");
        score++; 
    }else{
        selectBtn.classList.add("incorrect");
    }
    Array.from(answerBtn.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextBtn.style.display = "block";
}


function showScore(){
    resetState();
    questionElement.innerHTML = `Your scored ${score} out of ${questions.length}!`;
    nextBtn.innerHTML = "Play Again";
    nextBtn.style.display = "block";
}

nextBtn.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length - 1) { // Using <= and subtracting 1
        handleNextButton();
    } else {
        startQuiz();
    }
});


function handleNextButton() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion();
    } else {
        showScore();
    }
}

startQuiz();