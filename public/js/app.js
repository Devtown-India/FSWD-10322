// Coudl also use nth child selector

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

const playGame = (userResponse) => {
    const computerResponse = generateComputerResponse()
    if (userResponse === computerResponse) return console.log('Tie!!')
    switch (userResponse) {
        case "rock":
            switch (computerResponse) {
                case "paper":
                    console.log('computer wins')
                    break
                case "scissors":
                    console.log('user wins')
                    break
            }
            break;
        case "paper":
            switch (computerResponse) {
                case "rock":
                    console.log('user wins')
                    break
                case "scissors":
                    console.log('computer wins')
                    break
            }
            break;
        case "scissors":
            switch (computerResponse) {
                case "rock":
                    console.log('computer wins')
                    break
                case "paper":
                    console.log('user wins')
                    break
            }
            break;
        default:
            window.alert('invalid response')

    }

}

// add event listeners
rock.addEventListener('click', (e) => playGame(e.target.id))
paper.addEventListener('click', (e) => playGame(e.target.id))
scissors.addEventListener('click', (e) => playGame(e.target.id))