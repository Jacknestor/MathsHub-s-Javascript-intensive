const getRandomNumInRange = (min, max) => {
    const randomNum = (Math.random() * (max - min) + min).toFixed(0)
    return randomNum
}

const getTask = () => {
    const symbol = (Math.random() > 0.5) ? "+" : "-"
    // const task = `${randomNum1} ${symbol} ${randomNum2}`
    const task = `${getRandomNumInRange(0, 100)} ${symbol} ${getRandomNumInRange(0, 100)}`
    gameState.rightAnswer = eval(task)
    return task
}

const toggleGameState = () => {
    gameState.taskInProcess = !gameState.taskInProcess
}

const gameElements = document.getElementById("my_game").children
const title = gameElements[0]
const userTask = gameElements[1]
const userAnswer = gameElements[2]
const btnGame = gameElements[3]

const gameState = {
    taskInProcess: false,
    rightAnswer: null,
}

const startGameFunc = () => {
    if (!gameState.taskInProcess) {
        title.innerText = "Игра началась!"
        userAnswer.value = null
        userTask.innerText = getTask()
        userAnswer.hidden = false
        btnGame.innerText = "Проверить!"
        toggleGameState()
    } else {
        const isRight = gameState.rightAnswer == userAnswer.value
        userTask.innerText = userTask.innerText + " = " + gameState.rightAnswer
        title.innerText = "Вы " + ((isRight) ? "победили!" : "проиграли!")
        btnGame.innerText = "Начать заново!"
        toggleGameState()
    }
}
btnGame.addEventListener("click", startGameFunc)
userAnswer.addEventListener("keydown", (e) => {
    // console.log(e)
    if(e.key === "Enter") {
        startGameFunc()
    } else if(e.key === "Escape") {
        userAnswer.blur()
    }
})










// console.log(document)
// console.dir(document)
const choosedEl = document.querySelectorAll(".choosed_block-container > div")
const counterEl = document.querySelector(".choosed_block span")
// const anyValue = document.getElementById(".choosed_block-container").children
// const choosedEl = document.querySelectorAll(".my_game")
// console.log(choosedEl[0])
// console.log(choosedEl)
const choosedState = {
    countElements: 0,
    setCountValue(value) {
        this.countElements += value
        counterEl.innerText = this.countElements
    }
}
// const changeCount = (value) => {
//     choosedState.countElements += value
//     counterEl.innerText = choosedState.countElements
const eventFunc = (e) => {
    // console.log("click")
    // выбрать элемент, то есть выделить его с помощью класса
    // choosedEl[i].className = "choosed_element"
    // console.log(e)
    // e.target.className = "choosed_element"
    // // запустить счетчик
    // counterEl.innerText = +counterEl.innerText + 1
    if (e.target.className === "") {
        e.target.className = "choosed_element"
        // counterEl.innerText = +counterEl.innerText + 1
        choosedState.setCountValue(1)
    } else {
        e.target.className = ""
        // counterEl.innerText = counterEl.innerText - 1
        choosedState.setCountValue(-1)
    }
}

for (let i = 0; i < choosedEl.length; i++) {
    // console.log(choosedEl[i])
    choosedEl[i].addEventListener("click", eventFunc)
}
choosedEl[2].removeEventListener("click", eventFunc)
// console.log(choosedEl.length)
