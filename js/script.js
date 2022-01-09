const comecarBtn = document.getElementById('start-btn')
const proxBtn = document.getElementById('next-btn')
const pergContainerElement = document.getElementById('perg-container')
const titulo = document.getElementById('titulo')
const questionElement = document.getElementById('perg')
const answerButtonsElement = document.getElementById('resp-btn')

let embalharPerg, atualPergIndex

comecarBtn.addEventListener('click', startGame)
proxBtn.addEventListener('click', () => {
    atualPergIndex++
    proxPerg()
})

function startGame(){
    comecarBtn.classList.add('hide')
    titulo.classList.add('hide')
    embalharPerg = questions.sort(() => Math.random() - .5)
    atualPergIndex = 0
    pergContainerElement.classList.remove('hide')
    proxPerg()
}

function proxPerg() {
    resetarEstado()
    mostrarPerg(embalharPerg[atualPergIndex])
}

function mostrarPerg(question){
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectResp)
        answerButtonsElement.appendChild(button)
    })
}

function resetarEstado() {
    limparStatusClass(document.body)
    proxBtn.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild (answerButtonsElement.firstChild)
    }
}

function selectResp(e) {
    const btnSelecionado = e.target
    const correct = btnSelecionado.dataset.correct
    setarStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setarStatusClass(button, button.dataset.correct)
    })
    if (embalharPerg.lenght > atualPergIndex + 1) {
        proxBtn.classList.remove('hide')
    } else {
        comecarBtn.innerText = 'Recomeçar'
        comecarBtn.classList.remove('hide')
    }
}

function setarStatusClass(element, correct) {
    limparStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function limparStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}


// function numAle(ramdom, ramdom2) {
//     ramdom = Math.floor(Math.random() * 10) + 1
//     ramdom2 = Math.floor(Math.random() * 10) + 1
//     print(ramdom,ramdom2)
// }
// const aleatorio = (min, max) => Math.floor(Math.random() * (max - min) + min)
// const logicos = ['==', '!==', '!=', '>', '<', '>=', '<=']
// const ale = logicos[aleatorio(0, logicos.length)]
    


const questions = [
    {
        question: 'O número 3 é diferente de 10?' ,
        answers: [
            { text: 'Sim', correct: true },
            { text: 'Não', correct: false }
        ]
    },
    {
        question: 'O número 50 é ________ à 2.5?',
        answers: [
            { text: 'Menor', correct: false},
            { text: 'Igual', correct: false},
            { text: 'Menor ou igual', correct: false},
            { text: 'Maior', correct: true}
        ]
    },
    {
        question: 'O número 27 é igual à 9?' ,
        answers: [
            { text: 'Sim', correct: false },
            { text: 'Não', correct: true }
        ]
    },
    {
        question: 'O número 18 é menor ou igual à 34?' ,
        answers: [
            { text: 'Sim', correct: true },
            { text: 'Não', correct: false }
        ]
    },
    {
        question: 'O número 26 é _________ à 26.5?' ,
        answers: [
            { text: 'Sim', correct: false },
            { text: 'Igual', correct: false },
            { text: 'Diferente', correct: true },
            { text: 'Maior ou igual', correct: true }
        ]
    }
]