const quizData =
[
    {
        question: 'Selecione a opção que completa a lacuna: MCD, NEF, OGH, ___, QKL',
        a: 'CMN',
        b: 'UJI',
        c: 'PIJ',
        d: 'IJT',
        correta: 'c'
    },

    {
        question: 'Selecione a opção que completa a lacuna: B5CD, ____, BCD7, B8CD, BC9D',
        a: 'B2C2D',
        b: 'BC6D',
        c: 'B2C3D',
        d: 'BCD1',
        correta: 'b'
    },

    {
        question: 'Selecione a opção que completa a lacuna: FEG, GEF, HEI, IEH, ___',
        a: 'JEK',
        b: 'HEL',
        c: 'HEK',
        d: 'JEI',
        correta: 'a'
    },

    {
        question: 'Selecione a opção que completa a lacuna: ELFU, GLHU, ILJU, ____, MLNU',
        a: 'OLPU',
        b: 'KLMU',
        c: 'LLMU',
        d: 'KLLU',
        correta: 'd'
    },

    {
        question: 'Selecione a opção que completa a lacuna: BMN, DOO, FQQ, ___, JUU',
        a: 'GRR',
        b: 'GSS',
        c: 'HSS',
        d: 'ITT',
        correta: 'c'
    }
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEL = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const enviarBtn = document.getElementById('enviar');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz()
{
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEL.innerText = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected()
{
    let answer = undefined;

    answerEls.forEach(
        (answerEl) =>
        {
            if(answerEl.checked)
            {
                answer = answerEl.id;
            }
        }
    );
    return answer;
}

function deselectAnswers()
{
    answerEls.forEach(
        (answerEl) =>
        {
            answerEl.checked = false;
        }
    );
}

enviarBtn.addEventListener
(
    "click", () =>
    {
        const answer = getSelected();
        console.log(answer);

        if(answer)
        {
            if(answer == quizData[currentQuiz].correta)
            {
                score++;
            }

            currentQuiz++;
            
            if(currentQuiz < quizData.length)
            {
                loadQuiz();
            }
            else
            {
                quiz.innerHTML = `<h2>Você acertou ${score}/${quizData.length} questões</h2> 
                                  <button onclick = "location.reload()">Refazer o Quiz</button>`;
            }
        }
        
    }
);