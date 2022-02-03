let userName = prompt('come ti chiami?')
console.log(userName)


let userSurname = prompt('quale è il tuo cognome?')
console.log(userSurname)

let userColor = prompt('quale è il tuo colore preferito?')
console.log(userColor)

const number = 21

const passwordRandomHTMLElement = document.getElementById('password')
console.log(passwordRandomHTMLElement)

passwordRandomHTMLElement.innerHTML += ` ${userName}${userSurname}${userColor}${number}`
