// could also use nth child selector

let user_score = 0;
let computer_score = 0;

const user_board = document.querySelector('div.scoreboard .user')
const computer_board = document.querySelector('div.scoreboard .comp')

const message_box = document.querySelector("div.message")

const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper")
const scissors = document.querySelector("#scissors")

// Available choices
const choices = ["rock", "paper", "scissors"]

// game functions

const generateComputerResponse = () => {
    const index = ((Math.random() * 10).toFixed(0)) % 3
    return choices[index]
}

const result = (winner, userResponse, computerResponse) => {
    switch(winner){
        case "user":
            // display message
            message_box.innerHTML=` User Wins !! <br/> ${userResponse} beats ${computerResponse} `
            document.querySelector(`#${userResponse}`).classList.add('won')
            // setTimeout(2000,()=> document.querySelector(`#${userResponse}`).classList.remove('won'))
            // update scoreboard
            user_board.innerHTML=++user_score
            break
        case "computer":
             message_box.innerHTML=` Computer Wins !! <br/> ${computerResponse} beats ${userResponse}`
            computer_board.innerHTML=++computer_score
            break
        default:
            window.alert("something went wrong")
    }
}

const playGame = (userResponse) => {
    const computerResponse = generateComputerResponse()
    if (userResponse === computerResponse) return console.log('Tie!!')
    switch (userResponse) {
        case "rock":
            switch (computerResponse) {
                case "paper":
                    return result("computer", userResponse, computerResponse)
                case "scissors":
                    return result("user", userResponse, computerResponse)
            }
        case "paper":
            switch (computerResponse) {
                case "rock":
                    return result("user", userResponse, computerResponse)
                case "scissors":
                    return result("computer", userResponse, computerResponse)
            }
        case "scissors":
            switch (computerResponse) {
                case "rock":
                    return result("computer", userResponse, computerResponse)
                case "paper":
                    return result("user", userResponse, computerResponse)
            }
        default:
            window.alert('invalid response')

    }

}

// add event listeners
rock.addEventListener('click', (e) => playGame(e.target.id))
paper.addEventListener('click', (e) => playGame(e.target.id))
scissors.addEventListener('click', (e) => playGame(e.target.id))