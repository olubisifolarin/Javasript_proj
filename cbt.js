const quizData = [
    {
        question: 'Who is the President of Nigeria?',
        a: 'Buhari',
        b: 'Tinubu',
        c: 'Bidden',
        d: 'Goodluck',
        correct_answer: 'Buhari'
    },
    {
        question: 'How many continents do we have?',
        a:'3',
        b: '5',
        c: '7',
        d: '9',
        correct_answer: '7'
    },
    {
        question: '______is a name of any person, animal, place or thing',
        a: 'Pronoun',
        b: 'Verb',
        c: 'Adjective',
        d: 'Noun',
        correct_answer: 'Noun',
    },
    {
        question: '2x + 5 = 45. Find x',
        a: '20',
        b: '14',
        c: '11',
        d: '50',
        correct_answer: '20'
    }
]

// Declaring the question, options and button containers
const questionContainer = document.getElementById('questionContainer');
const optionContainer = document.getElementById('optionContainer');
const btn = document.getElementById('btn');
const btnSub = document.getElementById('btnSub');
const btnPrint = document.getElementById('btnPrint');
const studentImg = document.getElementById('studentImg');
const result = document.getElementById('result');
const totalScore = document.getElementById('totalScore')
const resultContainer = document.getElementById('resultContainer')



resultContainer.style.display = 'none'
studentImg.style.display = 'none'
btnSub.style.display = 'none';
btnPrint.style.display = 'none'

let currentQuiz = 0

let score = 0

function loadQuiz(){
    let myQuiz = quizData[currentQuiz]

    questionContainer.innerHTML = myQuiz.question;
    optionContainer.innerHTML = `
    A. <input type = "radio" name = "answer" value = "${myQuiz.a}"> ${myQuiz.a} <br><br>
    B. <input type = "radio" name = "answer" value = "${myQuiz.b}"> ${myQuiz.b} <br><br>
    C. <input type = "radio" name = "answer" value = "${myQuiz.c}"> ${myQuiz.c} <br><br>
    D. <input type = "radio" name = "answer" value = "${myQuiz.d}"> ${myQuiz.d} <br><br>
     `
    
}

loadQuiz()

// Add Event Listener
btn.addEventListener('click', function(){
    // Lets check if a student clicked on any of the options
    let radioBtn = document.querySelector('input[type = radio]:checked')
    if(!radioBtn){
       alert('You must select an answer')
       console.log(radioBtn);
    }
    else{
        // Lets checked for the right answers
        if(radioBtn.value == quizData[currentQuiz].correct_answer ){
            score += 5;
            alert(`Your current score is ${score}`)
        }
        if(currentQuiz == quizData.length - 1){
            btnSub.style.display = 'block';
            btn.style.display = 'none'
        }

        currentQuiz++;
        loadQuiz()
    }
})

// Event Listener for submit button
btnSub.addEventListener('click', function(){
    studentImg.style.display = 'block'
    questionContainer.style.display = 'none'
    optionContainer.style.display = 'none'
    btnSub .style.display = 'none'
    btnPrint.style.display = 'block'
    resultContainer.style.display = 'block'
    let myScore = score;
    result.innerHTML = "Your score is " + myScore;

})
